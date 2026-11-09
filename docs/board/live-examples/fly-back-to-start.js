import { Board, createZoomPanPath } from '@ue-too/board';

const canvas = document.getElementById('graph');
const board = new Board(canvas);
const mux = board.cameraMux;
const rig = board.getCameraRig();

// Where the camera starts, and somewhere far away to fly to
const start = { position: { x: 0, y: 0 }, zoomLevel: 1 };
const farAway = { position: { x: 3000, y: -1800 }, zoomLevel: 2 };

let flight = null;

function flyTo(target) {
    const camera = board.camera;
    flight = {
        path: createZoomPanPath(
            { position: camera.position, zoomLevel: camera.zoomLevel },
            target,
            camera.viewPortWidth
        ),
        startTime: performance.now(),
        duration: 1200,
    };
    // Tell the camera an animation is starting; panning or zooming ends it
    mux.initatePanTransition();
    mux.initateZoomTransition();
}

function fly(timestamp) {
    if (!flight) return;
    if (
        mux.panStateMachine.currentState !== 'TRANSITION' ||
        mux.zoomStateMachine.currentState !== 'TRANSITION'
    ) {
        flight = null; // You grabbed the camera, so it's yours
        return;
    }
    const t = Math.min(1, (timestamp - flight.startTime) / flight.duration);
    // Ease in and out; the path itself zooms out on long trips
    const view = flight.path.at((1 - Math.cos(Math.PI * t)) / 2);
    mux.notifyZoomInputAnimation(view.zoomLevel);
    rig.zoomTo(view.zoomLevel);
    mux.notifyPanToAnimationInput(view.position);
    rig.panToWorld(view.position);
    if (t === 1) flight = null;
}

const buttons = document.createElement('nav');
for (const [label, target] of [
    ['Fly away', farAway],
    ['Back to start', start],
]) {
    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', () => flyTo(target));
    buttons.append(button);
}
document.body.append(buttons);

function drawGrid(ctx, spacing, extent) {
    ctx.strokeStyle = 'rgba(128, 128, 128, 0.25)';
    ctx.lineWidth = 1 / board.camera.zoomLevel;
    ctx.beginPath();
    for (let i = -extent; i <= extent; i += spacing) {
        ctx.moveTo(i, -extent);
        ctx.lineTo(i, extent);
        ctx.moveTo(-extent, i);
        ctx.lineTo(extent, i);
    }
    ctx.stroke();
}

function drawMarker(ctx, view, color, label) {
    // Divide by zoom so the marker stays the same size on screen
    const size = 1 / board.camera.zoomLevel;
    const { x, y } = view.position;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 10 * size, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = `${14 * size}px sans-serif`;
    ctx.fillText(label, x + 16 * size, y + 5 * size);
}

function draw(timestamp) {
    fly(timestamp);
    board.step(timestamp);
    const ctx = board.context;

    drawGrid(ctx, 100, 5000);
    drawMarker(ctx, start, '#5d8c3e', 'start');
    drawMarker(ctx, farAway, '#e08a2e', 'far away');

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
