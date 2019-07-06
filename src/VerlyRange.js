/**
 * @author Anurag Hazra
 * @param {string} id 
 * @param {string} color 
 */
function VerlyRange(id, color) {
  let DOMSlider = document.getElementById(id);
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  let width = DOMSlider.scrollWidth;
  let height = width / 2;
  canvas.width = width;
  canvas.height = height;
  canvas.style.pointerEvents = 'none';
  canvas.style.transform = 'translate(0, -15px)';
  DOMSlider.parentElement.appendChild(canvas);
  
  const gravity = new Vector(0, 0.3);
  
  // iteration, canvas, ctx
  let verly = new Verly(50, canvas, ctx);
  let rope = generateRope();

  // generic function to apply reset of rope wehn resizing
  function generateRope() {
    let rope = verly.createRope(0, 0, width / 20, 17, 0);
    let lastIndex = rope.points.length - 1;
    // rope extra tweaks
    rope.setGravity(gravity);
    rope.pin(lastIndex);

    // overwrite render function
    rope.renderSticks = () => {
      for (let i = 0; i < rope.sticks.length; i++) {
        let stick = rope.sticks[i];
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.moveTo(stick.startPoint.pos.x, stick.startPoint.pos.y);
        ctx.lineTo(stick.endPoint.pos.x, stick.endPoint.pos.y);
        ctx.stroke();
        ctx.closePath();
      }
    }
    return rope;
  }

  // handle resize 
  window.addEventListener('resize', function () {
    width = DOMSlider.scrollWidth
    height = width / 2;
    canvas.width = verly.WIDTH = width;
    canvas.height = verly.HEIGHT = height;

    rope = generateRope();

    setRopePosition();
  });

  // rope end point position
  function setRopePosition() {
    let ratio = (DOMSlider.value - DOMSlider.min) / (DOMSlider.max - DOMSlider.min);
    // floating point correction
    if (ratio < 0.5) ratio += 0.01;
    if (ratio < 0.3) ratio += 0.01;
    if (ratio > 0.6) ratio -= 0.01;
    if (ratio > 0.8) ratio -= 0.02;
    rope.points[rope.points.length - 1].pos.x = (ratio * width);
  }
  setRopePosition();
  DOMSlider.addEventListener('input', setRopePosition);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    verly.update();
    rope.renderSticks();

    requestAnimationFrame(animate);
  }
  animate();
}