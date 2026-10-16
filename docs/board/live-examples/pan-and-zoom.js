import { Board } from '@ue-too/board';

const canvas = document.getElementById('graph');
const board = new Board(canvas);

// Shapes in world coordinates: edit one or add one
const shapes = [
    { x: -170, y: -100, w: 120, h: 80, color: '#5d8c3e' },
    { x: 30, y: -60, w: 90, h: 90, color: '#3a7bd5' },
    { x: -60, y: 70, w: 180, h: 50, color: '#e08a2e' },
];

function drawGrid(ctx, spacing, extent) {
    ctx.strokeStyle = 'rgba(128, 128, 128, 0.25)';
    // Divide by zoom so lines stay 1px wide on screen
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

function draw(timestamp) {
    // step() clears the canvas and applies the camera
    board.step(timestamp);
    const ctx = board.context;

    drawGrid(ctx, 50, 2000);
    for (const s of shapes) {
        ctx.fillStyle = s.color;
        ctx.fillRect(s.x, s.y, s.w, s.h);
    }

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
