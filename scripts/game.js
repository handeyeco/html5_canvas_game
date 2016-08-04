/* ================= */
/* ================= */
/* Create the canvas */
/* ================= */
/* ================= */
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);

/* =========== */
/* =========== */
/* Load Images */
/* =========== */
/* =========== */

// Background image
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function () {
 bgReady = true;
};

bgImage.src = 'images/background.png';

// Hero Image
var heroReady = false;
var heroImage = new Image();

heroImage.onload = function () {
  heroReady = true;
};

heroImage.src = 'images/hero.png';

// Monster Image
var monsterReady = false;
var monsterImage = new Image();

monsterImage.onload = function () {
  monsterReady = true;
};

monsterImage.src = 'images/monster.png';

/* ============ */
/* ============ */
/* Game Objects */
/* ============ */
/* ============ */
var hero = {
  speed: 256, // pixels per second
  x: 0,
  y: 0
};

var monster = {
  x: 0,
  y: 0
};

var monstersCaught = 0;

/* ================ */
/* ================ */
/* Keyboard Control */
/* ================ */
/* ================ */
var keysDown = {};

addEventListener('keydown', function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener('keyup', function (e) {
  delete keysDown[e.keyCode];
}, false);

/* ================ */
/* ================ */
/* Reset Game Setup */
/* ================ */
/* ================ */
var reset = function () {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canavs.height - 64));
};
