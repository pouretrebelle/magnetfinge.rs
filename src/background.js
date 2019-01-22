const magnets = [
  {
    element: document.getElementById('leftMagnet'),
    everyXFrames: 18,
    speed: 1,
    rings: [],
  },
  {
    element: document.getElementById('rightMagnet'),
    everyXFrames: 15,
    speed: 1.5,
    rings: [],
  },
];

const PIXEL_RATIO = window.devicePixelRatio || 1;

const background = {
  c: undefined,
  backgroundColor: '#fff',
  scrollY: 0,
  scrollX: 0,
  frames: 0,
  disappearAt: 1000 * PIXEL_RATIO,
};

const setup = () => {
  setPageScroll();
  setupEventListeners();
  setupCanvas();
  getPositions();
};

const update = () => {
  background.frames++;

  magnets.forEach((magnet) => {
    var randomThing = 3 + Math.floor(Math.random() * 7);
    if (
      background.frames % magnet.everyXFrames === 0 &&
      magnet.rings.length < randomThing
    ) {
      magnet.rings.push(new Ring(magnet));
    }

    magnet.rings.forEach((ring) => ring.update());
  });
};

const draw = () => {
  const c = background.c;
  c.fillStyle = background.backgroundColor;
  c.fillRect(0, 0, c.canvas.width, c.canvas.height);
  c.save();
  c.translate(
    -background.scrollX * PIXEL_RATIO,
    -background.scrollY * PIXEL_RATIO
  );

  magnets.forEach((magnet) => magnet.rings.forEach((ring) => ring.draw()));

  c.restore();
};

class Ring {
  constructor(magnet) {
    this.magnet = magnet;
    this.size = 0;
    this.color = '#ccc';
  }

  update() {
    this.size += PIXEL_RATIO * this.magnet.speed;

    if (this.size > background.disappearAt) {
      this.magnet.rings.shift();
    }
  }

  draw() {
    const c = background.c;
    c.strokeStyle = this.color;
    c.globalAlpha = 1 - this.size / background.disappearAt;
    c.beginPath();
    c.arc(this.magnet.x, this.magnet.y, this.size, 0, Math.PI * 2);
    c.stroke();
    c.closePath();
  }
}

const setupEventListeners = () => {
  window.addEventListener('resize', onResize);
};

const onResize = () => {
  setSizes();
  getPositions();
};

const setSizes = () => {
  const canvas = background.c.canvas;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * PIXEL_RATIO;
  canvas.style.width = `${width}px`;
  canvas.height = height * PIXEL_RATIO;
  canvas.style.height = `${height}px`;
};

const getPositions = () => {
  magnets.forEach((magnet) => {
    const bBox = magnet.element.getBoundingClientRect();
    magnet.x = PIXEL_RATIO * (bBox.left + background.scrollX + bBox.width / 2);
    magnet.y = PIXEL_RATIO * (bBox.top + background.scrollY + bBox.height / 2);
  });
};

const setPageScroll = () => {
  background.scrollX = window.scrollX;
  background.scrollY = window.scrollY;
};

const setupCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.className = 'background';
  document.body.appendChild(canvas);

  background.c = canvas.getContext('2d');
  background.c.strokeWidth = 1 * PIXEL_RATIO;

  setSizes();
};

const loop = () => {
  setPageScroll();
  update();
  draw();
  window.requestAnimationFrame(loop);
};

const init = () => {
  setup();
  window.requestAnimationFrame(loop);
};

window.addEventListener('load', init);
