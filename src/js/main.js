const Game = (function() {
  const canvasID = document.getElementById('snake__canvas');
  const ctx = canvasID.getContext('2d');
  /**
   * Should belong to graphics?
   */
  const canvasDimensions = {
    height: 200,
    width: 200
  };

  /**
   * Should belong to graphics?
   */
  const grid = {
    x: 4,
    y: 4
  };
  /**
   * move to graphics
   */
  const box = {
    height: canvasDimensions.height / grid.y,
    width: canvasDimensions.width / grid.x,
  };

  let count = 0;

  function init() {
    setupGame();
    window.requestAnimationFrame(loop);
  }

  function setupGame() {
    drawMap();
  }

  function drawMap() {
    canvasID.setAttribute('height', canvasDimensions.height.toString());
    canvasID.setAttribute('width', canvasDimensions.width.toString());
    drawGrid();
  }

  function drawGrid() {


    /**
     * Can we make a graphics class so we can change all looks inside 1 file? bring canvas dimensions there also
     */
    ctx.lineWidth = 1;
    ctx.fillStyle = 'rgb(200, 0, 0)';

    for (let rowX = 0; rowX < grid.x; rowX++) {
      for (let rowY = 0; rowY < grid.y; rowY++) {
        const x = rowX * box.width;
        const y = rowY * box.height;
        ctx.strokeRect(x, y, box.width, box.height);
      }
    }
  }


  /**
   * Update snake position?
   */
  function drawSnake() {
    /**
     * Should belong to graphics?
     */
    ctx.fillStyle = 'green';
    // ctx.fillRect(0, 0, 50, 50);
    Store.snake.forEach((bodyPart) => {
      /**
       * add snake graphics
       */
      ctx.fillRect(bodyPart.x * box.width + 6, bodyPart.y * box.height + 6, box.width - 12, box.height - 12);
    });
  }

  // function drawRamp() {
  //   ctx.fillStyle = 'rgb(200, 0, 0)';
  //   ctx.beginPath();
  //   ctx.moveTo(Store.ramp.start.x, Store.ramp.start.y); // ramp start
  //   ctx.lineTo(Store.ramp.end.x, Store.ramp.end.x); // ramp end
  //   ctx.lineTo(Store.ramp.end.x, canvasDimensions.height);
  //   ctx.lineTo(Store.ramp.start.x, canvasDimensions.height);
  //   ctx.fill();
  // }

  function loop() {
    drawSnake();
    if (count === 5) {
      return;
    }
    console.log('hey');
    // if (!Store.state.getCurrent()) {
    // }
    // ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
    // drawRamp();
    // drawBall();

    window.requestAnimationFrame(loop);
    count++;
  }

  return {
    init
  };

})();

Game.init();
