(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let isDrawing = false,
    lastX = 0, lastY = 0,
    hue = 0,
    lineWidth = 1, direction = true;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Draw when mouse is down & cursor is moving
  canvas.addEventListener('mousemove', drawCircle);
  canvas.addEventListener('mousedown', ({ clientX, clientY }) => {
    isDrawing = true;
    [lastX, lastY]  = [clientX, clientY];
  });

  // if mouseup or out of canvas stop drawing
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  function drawCircle({ clientX, clientY }) {
    if(!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(clientX, clientY);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`;
    ctx.stroke();

    // increment linewidth to 50 & then decrement
    if(lineWidth >= 50 || lineWidth <= 0){
      direction = !direction;
    }
    if(direction) {
      lineWidth++;
    } else {
      lineWidth--;
    }

    // increment hue & reset
    hue++;
    if(hue >= 360) {
      hue = 0;
    }

    // continue drawing from destination of mousemove
    [lastX, lastY]  = [clientX, clientY];
  }

}());
