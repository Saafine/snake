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
    addKeydownListeners();
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


  function drawSnake() {
    /**
     * Should belong to graphics?
     */
    ctx.fillStyle = 'green';
    Store.snake.position.forEach((bodyPart) => {
      /**
       * add snake graphics
       */
      ctx.fillRect(bodyPart.x * box.width + 6, bodyPart.y * box.height + 6, box.width - 12, box.height - 12);
    });
  }

  function moveSnake() {
    Store.snake.position.splice(0, 1);
    const headPositionIdx = Store.snake.position.length - 1;
    Store.snake.position[headPositionIdx].x = 2;
    Store.snake.position[headPositionIdx].y = 2;
    drawSnake();
  }

  function addKeydownListeners() {
    addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case(32): // space
          moveSnake();
          break;
      }
    });
  }

  function loop() {
    drawSnake();

    /**
     * reload initial map instead of clearing 
     */
    // ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);

    // redraw if changes happened
    window.requestAnimationFrame(loop);
    count++;
  }

  return {
    init
  };

})();

Game.init();
