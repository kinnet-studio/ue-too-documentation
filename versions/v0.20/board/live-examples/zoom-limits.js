import { Board } from '@ue-too/board';

const canvas = document.getElementById('graph');
const board = new Board(canvas);

// Keep the camera inside a 2400 × 1600 world
board.camera.boundaries = {
    min: { x: -1200, y: -800 },
    max: { x: 1200, y: 800 },
};
board.limitEntireViewPort = true;

// Zooming out stops at 0.6×, zooming in at 3×.
// Try other numbers, then press Run.
board.camera.setMinZoomLevel(0.6);
board.camera.setMaxZoomLevel(3);

// A readout so you can see the limits kick in
const readout = document.createElement('output');
document.body.append(readout);
readout.textContent = 'zoom ' + board.camera.zoomLevel.toFixed(2) + '×';
board.camera.on('zoom', (event, state) => {
    readout.textContent = 'zoom ' + state.zoomLevel.toFixed(2) + '×';
});

function draw(timestamp) {
    board.step(timestamp);
    const ctx = board.context;
    const { min, max } = board.camera.boundaries;

    ctx.fillStyle = 'rgba(93, 140, 62, 0.12)';
    ctx.fillRect(min.x, min.y, max.x - min.x, max.y - min.y);
    ctx.strokeStyle = '#5d8c3e';
    ctx.lineWidth = 2 / board.camera.zoomLevel;
    ctx.strokeRect(min.x, min.y, max.x - min.x, max.y - min.y);

    ctx.fillStyle = '#3a7bd5';
    for (let x = -1100; x <= 1100; x += 100) {
        for (let y = -700; y <= 700; y += 100) {
            ctx.fillRect(x - 6, y - 6, 12, 12);
        }
    }

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
