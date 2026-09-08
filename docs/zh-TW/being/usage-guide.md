# 使用指南

`@ue-too/being` 是一個型別安全的 TypeScript 有限狀態機函式庫。它提供以類別為基礎的方式來定義狀態、事件、轉換和守衛（guards），並在整個過程中提供完整的 TypeScript 型別推斷。

## 安裝

```bash
npm install @ue-too/being
```

## 核心概念

`@ue-too/being` 中的狀態機由三個主要部分組成：

1. **事件酬載映射（Event Payload Mapping）** — 一個 TypeScript 型別，將事件名稱映射到其酬載型別
2. **狀態（States）** — 一個字串字面量聯合型別，代表所有可能的狀態
3. **上下文（Context）** — 一個共享物件（繼承自 `BaseContext`），所有狀態都可以存取

定義好這些之後，你需要建立**狀態類別**（繼承自 `TemplateState`）來定義每個狀態如何回應事件，然後將它們組裝成一個 **`TemplateStateMachine`**。

## 基本用法

以下是一個最小範例 — 一個具有三個狀態的放置工具：

### 第一步：定義事件、狀態和上下文

```typescript
import {
  BaseContext,
  EventReactions,
  NO_OP,
  TemplateState,
  TemplateStateMachine,
} from '@ue-too/being';

// 事件及其酬載型別
type PlacementEvents = {
  startPlacement: {};          // 不需要酬載
  pointerMove: { x: number; y: number };
  leftPointerUp: { x: number; y: number };
  escapeKey: {};
  endPlacement: {};
};

// 所有可能的狀態
type PlacementStates = 'IDLE' | 'HOVER_FOR_START' | 'HOVER_FOR_END';

// 所有狀態共享的上下文
interface PlacementContext extends BaseContext {
  startDrag: (position: { x: number; y: number }) => void;
  updateDrag: (position: { x: number; y: number }) => void;
  finishDrag: (position: { x: number; y: number }) => void;
  cancelPlacement: () => void;
}
```

**重點：**
- 酬載為 `{}` 的事件在觸發時不需要傳入參數
- 具有特定型別（如 `{ x: number; y: number }`）的事件需要傳入該酬載
- 上下文必須實作 `BaseContext` 的 `setup()` 和 `cleanup()` 方法

### 第二步：定義狀態類別

每個狀態繼承自 `TemplateState`，並定義其 `_eventReactions`：

```typescript
class IdleState extends TemplateState<
  PlacementEvents,
  PlacementContext,
  PlacementStates
> {
  protected _eventReactions: EventReactions<
    PlacementEvents,
    PlacementContext,
    PlacementStates
  > = {
    startPlacement: {
      action: NO_OP,                    // 無副作用
      defaultTargetState: 'HOVER_FOR_START',  // 轉換到此狀態
    },
  };
}

class HoverForStartState extends TemplateState<
  PlacementEvents,
  PlacementContext,
  PlacementStates
> {
  protected _eventReactions: EventReactions<
    PlacementEvents,
    PlacementContext,
    PlacementStates
  > = {
    leftPointerUp: {
      action: (context, event) => {
        context.startDrag({ x: event.x, y: event.y });
      },
      defaultTargetState: 'HOVER_FOR_END',
    },
    escapeKey: {
      action: (context) => context.cancelPlacement(),
      defaultTargetState: 'IDLE',
    },
    endPlacement: {
      action: (context) => context.cancelPlacement(),
      defaultTargetState: 'IDLE',
    },
  };
}

class HoverForEndState extends TemplateState<
  PlacementEvents,
  PlacementContext,
  PlacementStates
> {
  protected _eventReactions: EventReactions<
    PlacementEvents,
    PlacementContext,
    PlacementStates
  > = {
    pointerMove: {
      action: (context, event) => {
        context.updateDrag({ x: event.x, y: event.y });
      },
      // 沒有 defaultTargetState — 維持在 HOVER_FOR_END
    },
    leftPointerUp: {
      action: (context, event) => {
        context.finishDrag({ x: event.x, y: event.y });
      },
      defaultTargetState: 'HOVER_FOR_START',
    },
    escapeKey: {
      action: (context) => context.cancelPlacement(),
      defaultTargetState: 'HOVER_FOR_START',
    },
  };
}
```

**事件反應結構：**
- `action` — 事件發生時被呼叫的函式。接收 `(context, eventPayload, stateMachine)` 參數。不需要副作用時可使用 `NO_OP`。
- `defaultTargetState` — （選填）action 執行後要轉換到的狀態。如果省略，狀態機會維持在目前的狀態。

### 第三步：組裝狀態機

```typescript
const context: PlacementContext = {
  startDrag(pos) { /* ... */ },
  updateDrag(pos) { /* ... */ },
  finishDrag(pos) { /* ... */ },
  cancelPlacement() { /* ... */ },
  setup() { /* 初始化資源 */ },
  cleanup() { /* 釋放資源 */ },
};

const machine = new TemplateStateMachine<
  PlacementEvents,
  PlacementContext,
  PlacementStates
>(
  {
    IDLE: new IdleState(),
    HOVER_FOR_START: new HoverForStartState(),
    HOVER_FOR_END: new HoverForEndState(),
  },
  'IDLE',       // 初始狀態
  context,
);
```

建構子接受：
1. 一個將每個狀態名稱映射到其狀態實例的 record
2. 初始狀態名稱
3. 上下文物件
4. （選填）`autoStart` — 預設為 `true`。為 `true` 時會自動呼叫 `start()`，會呼叫 `context.setup()` 並進入初始狀態。

### 第四步：觸發事件

```typescript
machine.happens('startPlacement');
// 現在在 HOVER_FOR_START

machine.happens('leftPointerUp', { x: 100, y: 200 });
// 現在在 HOVER_FOR_END

machine.happens('pointerMove', { x: 150, y: 250 });
// 維持在 HOVER_FOR_END（沒有定義目標狀態）

machine.happens('leftPointerUp', { x: 200, y: 300 });
// 現在在 HOVER_FOR_START
```

`happens()` 會回傳一個 `EventResult`：
```typescript
const result = machine.happens('startPlacement');
if (result.handled) {
  console.log('轉換到:', result.nextState);
} else {
  console.log('事件未被目前的狀態處理');
}
```

## 生命週期鉤子

狀態可以定義 `uponEnter` 和 `beforeExit` 方法，在轉換時執行邏輯：

```typescript
class LayoutState extends TemplateState<Events, MyContext, States> {
  private _subMachine: SomeStateMachine;

  constructor(subMachine: SomeStateMachine) {
    super();
    this._subMachine = subMachine;
  }

  uponEnter(context: MyContext, stateMachine: StateMachine<...>, from: States | 'INITIAL') {
    // 進入此狀態時被呼叫
    this._subMachine.happens('startLayout');
  }

  beforeExit(context: MyContext, stateMachine: StateMachine<...>, to: States | 'TERMINAL') {
    // 離開此狀態時被呼叫
    this._subMachine.happens('endLayout');
  }

  protected _eventReactions = { /* ... */ };
}
```

- `uponEnter` 接收轉換**來源**的狀態（首次進入時為 `'INITIAL'`）
- `beforeExit` 接收即將轉換**目標**的狀態（wrapup 時為 `'TERMINAL'`）
- 當狀態機維持在同一狀態時，這些鉤子**不會**被呼叫

### 狀態機生命週期

```typescript
machine.start();   // 呼叫 context.setup()，進入初始狀態，觸發 uponEnter
machine.wrapup();  // 觸發目前狀態的 beforeExit，呼叫 context.cleanup()
machine.reset();   // 呼叫 wrapup()，然後 start() — 完全重新啟動
```

你也可以監聽狀態變化：

```typescript
machine.onStateChange((from, to) => {
  console.log(`從 ${from} 轉換到 ${to}`);
});
```

## 守衛：條件式轉換

守衛（Guards）讓你根據目前的上下文，有條件地選擇要轉換到哪個狀態。當同一事件根據執行時條件需要導向不同狀態時非常有用。

### 定義守衛

```typescript
import {
  EventGuards,
  EventReactions,
  Guard,
  TemplateState,
} from '@ue-too/being';

type EditStates = 'INACTIVE' | 'IDLE' | 'DRAGGING';

type EditEvents = {
  startEditing: {};
  endEditing: {};
  leftPointerDown: { x: number; y: number };
  leftPointerUp: { x: number; y: number };
  leftPointerMove: { x: number; y: number };
};

interface EditContext extends BaseContext {
  projectOnTarget: (position: { x: number; y: number }) => boolean;
  getCurrentPosition: () => { x: number; y: number };
  setCurrentPosition: (position: { x: number; y: number }) => void;
}

class IdleState extends TemplateState<EditEvents, EditContext, EditStates> {
  // 1. 定義守衛函式
  protected _guards: Guard<EditContext, 'projectOnTarget'> = {
    projectOnTarget: (context) => {
      return context.projectOnTarget(context.getCurrentPosition());
    },
  };

  // 2. 定義事件反應（action 先執行）
  protected _eventReactions = {
    leftPointerDown: {
      action: (context: EditContext, payload: { x: number; y: number }) => {
        context.setCurrentPosition(payload);
      },
      // 沒有 defaultTargetState — 如果沒有守衛匹配，維持在目前狀態
    },
    endEditing: {
      action: NO_OP,
      defaultTargetState: 'INACTIVE' as const,
    },
  } as EventReactions<EditEvents, EditContext, EditStates>;

  // 3. 將守衛映射到事件和目標狀態
  protected _eventGuards: Partial<
    EventGuards<EditEvents, EditStates, EditContext, typeof this._guards>
  > = {
    leftPointerDown: [
      { guard: 'projectOnTarget', target: 'DRAGGING' },
    ],
  };
}
```

### 守衛的運作方式

當事件被處理時：

1. `action` 函式先執行（例如，更新上下文中的位置）
2. 狀態機檢查該事件的 `_eventGuards`
3. 守衛按**順序**評估 — 第一個回傳 `true` 的守衛決定目標狀態
4. 如果沒有守衛匹配，使用 `defaultTargetState`（如果有定義的話）
5. 如果既沒有守衛匹配也沒有設定 `defaultTargetState`，狀態機維持在目前狀態

這對於拖放等場景非常強大：指標按下（pointer-down）的 action 總是記錄位置，但只有當指標在有效目標上時才會轉換到 `DRAGGING` 狀態。

## 事件委派與 Defer

`Defer` 允許狀態在其正常的 `_eventReactions` 被評估之前攔截事件。這通常用於將事件委派給子狀態機。

### 運作方式

當帶有 `_defer` 定義的狀態接收到事件時：

1. 首先呼叫 `_defer.action` 函式
2. 如果回傳 `{ handled: true }`，則事件被視為已處理，`_eventReactions` 會被**跳過**
3. 如果回傳 `{ handled: false }`，事件會照常傳遞給 `_eventReactions`

### 範例：委派給子狀態機

```typescript
class LayoutToolState extends TemplateState<
  ToolEvents,
  ToolContext,
  ToolStates
> {
  private _layoutMachine: LayoutStateMachine;

  constructor(layoutMachine: LayoutStateMachine) {
    super();
    this._layoutMachine = layoutMachine;
  }

  // Defer：先嘗試子狀態機
  protected _defer: Defer<ToolContext, ToolEvents, ToolStates> = {
    action: (context, event, eventKey, stateMachine) => {
      const result = this._layoutMachine.happens(eventKey, event);
      if (result.handled) {
        return { handled: true, output: result.output };
      }
      return { handled: false };
    },
  };

  // 生命週期：啟動/停止子狀態機
  uponEnter(context: ToolContext, sm: any, from: ToolStates | 'INITIAL') {
    this._layoutMachine.happens('startLayout');
  }

  beforeExit(context: ToolContext, sm: any, to: ToolStates | 'TERMINAL') {
    this._layoutMachine.happens('endLayout');
  }

  // 自身的事件反應（只有在 defer 未處理事件時才會被觸及）
  protected _eventReactions: EventReactions<ToolEvents, ToolContext, ToolStates> = {
    switchToOtherTool: {
      action: NO_OP,
      defaultTargetState: 'OTHER_TOOL',
    },
  };
}
```

這個模式實現了**層次式組合** — 父狀態機將特定領域的事件委派給子狀態機，同時正常處理自己的事件（如工具切換）。

## 事件輸出映射

預設情況下，事件的 action 回傳 `void`。你可以定義**事件輸出映射（Event Output Mapping）**，讓事件處理器回傳具有型別的值：

```typescript
type MyEvents = {
  calculate: { value: number };
  reset: {};
};

// 定義每個事件的回傳值
type MyOutputMapping = {
  calculate: number;  // calculate 回傳數字
  reset: void;        // reset 不回傳任何值
};

type MyStates = 'IDLE' | 'ACTIVE';

class ActiveState extends TemplateState<
  MyEvents,
  MyContext,
  MyStates,
  MyOutputMapping  // 第四個型別參數
> {
  protected _eventReactions = {
    calculate: {
      action: (context, event) => {
        return event.value * 2;  // 回傳值的型別為 number
      },
    },
  } as EventReactions<MyEvents, MyContext, MyStates, MyOutputMapping>;
}

// 使用方式：
const result = machine.happens('calculate', { value: 5 });
if (result.handled && 'output' in result) {
  console.log(result.output); // 10，型別為 number
}
```

`EventOutputMapping` 是 `TemplateState`、`TemplateStateMachine` 和相關型別的第四個泛型參數。

## 擴展現有的狀態機

`@ue-too/being` 中一個強大的模式是擴展現有的狀態機以添加新功能，而不修改原始程式碼。這在程式庫中被廣泛使用，用於取得基礎輸入狀態機並在其上層疊加特定工具的行為。

### 模式概述

這個方法包含：
1. **合併事件型別** — 使用 `&` 交集型別將原始事件與新事件合併
2. **合併上下文型別** — 對上下文使用相同的方法
3. **建立新的狀態類別**，包裝原始狀態並透過 `Defer` 添加新行為
4. **使用型別轉換工具函式**將現有狀態適配到擴展的型別系統
5. **使用擴展型別組裝新的狀態機**

### 逐步說明

假設你有一個來自函式庫的基礎輸入狀態機：

```typescript
// 來自函式庫 — 你無法修改這些
type BaseEvents = {
  leftPointerDown: { x: number; y: number };
  leftPointerUp: { x: number; y: number };
  pointerMove: { x: number; y: number };
  scrollWheel: { deltaY: number };
};

type BaseStates = 'IDLE' | 'PAN' | 'DISABLED';

interface BaseInputContext extends BaseContext {
  // ... 基礎上下文方法
}

// 原始狀態類別：BaseIdleState, PanState, DisabledState
// 原始工廠函式：createBaseInputStateMachine(context)
```

#### 1. 定義擴展型別

```typescript
// 應用程式特定的新事件
type ToolSwitcherEvents = {
  switchToLayout: {};
  switchToTrain: {};
  switchToIdle: {};
};

// 合併事件型別
type ExpandedEvents = BaseEvents & ToolSwitcherEvents;

// 合併上下文型別
type ExpandedContext = BaseInputContext & ToolSwitcherContext;
```

#### 2. 建立擴展的 Idle 狀態

關鍵是包裝原始的 IDLE 狀態，並透過 `Defer` 添加子狀態機委派：

```typescript
class ExpandedIdleState extends TemplateState<
  ExpandedEvents,
  ExpandedContext,
  BaseStates,
  BaseOutputMapping
> {
  private _toolSwitcherMachine: ToolSwitcherStateMachine;

  constructor(toolSwitcherMachine: ToolSwitcherStateMachine) {
    super();

    // 實例化原始狀態
    const originalIdle = new BaseIdleState();

    // 複製其事件反應（使用型別轉換以適配擴展型別）
    this._eventReactions = {
      ...originalIdle.eventReactions as unknown as EventReactions<
        ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping
      >,
    };

    // 複製生命週期鉤子
    this.uponEnter = originalIdle.uponEnter as unknown as (
      context: ExpandedContext,
      sm: TemplateStateMachine<ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping>,
      from: BaseStates | 'INITIAL'
    ) => void;

    this.beforeExit = originalIdle.beforeExit as unknown as (
      context: ExpandedContext,
      sm: TemplateStateMachine<ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping>,
      to: BaseStates | 'TERMINAL'
    ) => void;

    // 複製守衛
    this._guards = originalIdle.guards as unknown as Guard<ExpandedContext>;

    this._toolSwitcherMachine = toolSwitcherMachine;
  }

  // Defer：工具切換事件由子狀態機處理
  protected _defer: Defer<ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping> = {
    action: (context, event, eventKey, stateMachine) => {
      const result = this._toolSwitcherMachine.happens(
        eventKey as keyof ToolSwitcherEvents,
        event as ToolSwitcherEvents[keyof ToolSwitcherEvents]
      );
      if (result.handled) {
        return { handled: true, output: result.output };
      }
      return { handled: false };
    },
  };
}
```

#### 3. 建立既有狀態的型別適配器

不需要修改的狀態仍然需要被轉換到擴展的型別系統：

```typescript
import { State } from '@ue-too/being';

const createAdaptedState = <
  OldState extends State<any, any, any, any>,
  NewState extends State<any, any, any, any>,
>() => {
  return (state: OldState): NewState => {
    return state as unknown as NewState;
  };
};

// 建立我們特定擴展的適配器
const expandState = createAdaptedState<
  State<BaseEvents, BaseInputContext, BaseStates, BaseOutputMapping>,
  State<ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping>
>();
```

#### 4. 組裝擴展的狀態機

```typescript
function createExpandedInputStateMachine(
  toolSwitcherMachine: ToolSwitcherStateMachine,
  context: ExpandedContext,
) {
  const states = {
    // 帶有子狀態機委派的擴展 IDLE 狀態
    IDLE: new ExpandedIdleState(toolSwitcherMachine),
    // 適配到擴展型別的原始狀態
    PAN: expandState(new PanState()),
    DISABLED: expandState(new DisabledState()),
  };

  return new TemplateStateMachine<
    ExpandedEvents,
    ExpandedContext,
    BaseStates,
    BaseOutputMapping
  >(states, 'IDLE', context);
}
```

### 執行時的運作方式

1. 當 `switchToLayout` 事件到達時，IDLE 狀態的 `_defer` 攔截它並委派給工具切換子狀態機
2. 當 `leftPointerDown` 事件到達時，`_defer` 先將它傳給子狀態機。如果子狀態機不處理，它會傳遞給原始 IDLE 狀態的 `_eventReactions`
3. 非 IDLE 狀態（PAN、DISABLED）的運作方式與之前完全相同 — 它們只看到它們處理的事件，其餘的則忽略

這個模式保留了原始狀態機的行為，同時在其上層疊加新功能，而不修改任何函式庫程式碼。

## 工具函式：`CreateStateType`

一個便利型別，從 `readonly` 陣列推導出字串字面量聯合型別：

```typescript
import { CreateStateType } from '@ue-too/being';

const TOOL_STATES = ['LAYOUT', 'TRAIN', 'STATION', 'IDLE'] as const;

type ToolStates = CreateStateType<typeof TOOL_STATES>;
// 結果：'LAYOUT' | 'TRAIN' | 'STATION' | 'IDLE'
```

當你在執行時也需要陣列（例如用於迭代或驗證），同時保持型別同步時非常有用。

## API 參考

完整的 API 細節（所有類別、介面、型別和函式），請參閱 [API 參考](./index/index.md)。
