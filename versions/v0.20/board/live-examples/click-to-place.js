import { Board } from '@ue-too/board';

const canvas = document.getElementById('graph');
const board = new Board(canvas);
const dots = [];

canvas.addEventListener('click', (event) => {
    // Window pixels → world coordinates, wherever the camera is
    const point = board.convertWindowPoint2WorldCoord({
        x: event.clientX,
        y: event.clientY,
    });
    dots.push(point);
    console.log('placed at', Math.round(point.x), Math.round(point.y));
});

function draw(timestamp) {
    board.step(timestamp);
    const ctx = board.context;

    // The world origin, for reference
    ctx.strokeStyle = 'rgba(128, 128, 128, 0.6)';
    ctx.lineWidth = 1 / board.camera.zoomLevel;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(20, 0);
    ctx.moveTo(0, -20);
    ctx.lineTo(0, 20);
    ctx.stroke();

    ctx.fillStyle = '#5d8c3e';
    for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 8, 0, Math.PI * 2);
        ctx.fill();
    }

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
