class Rover {
  constructor(direction, x, y, name) {
    this.correctDir(direction);
    this.x = x;
    this.y = y;
    this.name = name;
    this.direction = 1;
    this.lastPosition = [];
  }

  correctDir(direction) {
    if (direction === "W") {
      this.direction = 4;
    }
    if (direction === "S") {
      this.direction = 3;
    }
    if (direction === "E") {
      this.direction = 2;
    }
    if (direction === "N") {
      this.direction = 1;
      this.lastPosition = [];
    }
    if (direction > 4) {
      this.direction = 1;
    }

    if (direction < 1) {
      this.direction = 4;
    }
  }
  //Turns rover left
  turnLeft() {
    console.log("turnLeft was called!");
    this.direction--;
    if (this.direction < 1) {
      this.direction = 4;
    }
  }

  commands(orders) {
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      switch (order) {
        case "r":
          this.turnRight();
          break;
        case "l":
          this.turnLeft();
          break;
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBack();
          break;
        default:
          console.log("Not a valid command!");
      }
    }
  }

  isAbleToMove(command) {
    if (command === "f") {
      if (this.direction === 1 && this.y === 0) return false;
      else if (this.direction === 2 && this.x === 9) return false;
      else if (this.direction === 3 && this.y === 9) return false;
      else if (this.direction === 4 && this.x === 0) return false;
      else return true;
    } else if (command === "b") {
      if (this.direction === 3 && this.y === 0) return false;
      else if (this.direction === 1 && this.y === 9) return false;
      else if (this.direction === 2 && this.x === 0) return false;
      else if (this.direction === 4 && this.x === 9) return false;
      else return true;
    }
  }

  commands(orders) {
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      switch (order) {
        case "r":
          this.turnRight();
          break;
        case "l":
          this.turnLeft();
          break;
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBack();
          break;
        default:
          console.log("Not a valid command!");
      }
    }
  }

  moveForward() {
    if (!this.isAbleToMove("f")) return console.log("Rover can't go outside of the board!");
    if (this.direction === 1) {
      this.y--;
      currentBoard.theBoard[this.x][this.y - 1] = this.name;
      currentBoard.theBoard[this.x][this.y] = "free";
    } else if (this.direction === 2) {
      this.x++;
      currentBoard.theBoard[this.x + 1][this.y] = this.name;
      currentBoard.theBoard[this.x][this.y] = "free";
    } else if (this.direction === 3) {
      this.y++;
      currentBoard.theBoard[this.x][this.y + 1] = this.name;
      currentBoard.theBoard[this.x][this.y] = "free";
    } else if (this.direction === 4) {
      this.x--;
      currentBoard.theBoard[this.x - 1][this.y] = this.name;
      currentBoard.theBoard[this.x][this.y] = "free";
    }
  }
  moveBack() {
    if (!this.isAbleToMove("b")) return console.log("Rover can't go outside of the board!");
    if (this.direction === 1) {
      this.y++;
      currentBoard.theBoard[this.x][this.y + 1] = this.name;
      currentBoard.theBoard[this.x][this.y] = "free";
    } else if (this.direction === 2) {
      this.x--;
      currentBoard.theBoard[this.x - 1][this.y] = this.name;
      currentBoard.theBoard[this.x][this.y] = "free";
    } else if (this.direction === 3) {
      this.y--;
      currentBoard.theBoard[this.x][this.y - 1] = this.name;
      currentBoard.theBoard[this.x][this.y] = "free";
    } else if (this.direction === 4) {
      this.x++;
      currentBoard.theBoard[this.x + 1][this.y] = this.name;
      currentBoard.theBoard[this.x][this.y] = "free";
    }
  }

  getInfo() {
    console.log(this.getDirection(), this.y, this.x);
  }

  moveForward() {
    if (!this.isAbleToMove("f")) return console.log("Rover can't go outside of the board!");
    if (this.direction === 1) this.y--;
    else if (this.direction === 2) this.x++;
    else if (this.direction === 3) this.y++;
    else if (this.direction === 4) this.x--;
    this.moveOnBoard();
  }
  moveBack() {
    if (!this.isAbleToMove("b")) return console.log("Rover can't go outside of the board!");
    if (this.direction === 1) this.y++;
    else if (this.direction === 2) this.x--;
    else if (this.direction === 3) this.y--;
    else if (this.direction === 4) this.x++;
    this.moveOnBoard();
  }
  getInfo() {
    console.log(this.getDirection(), this.y, this.x);
  }
  getBoardPosition() {
    for (i = 0; i < currentBoard.length; i++) {
      for (j = 0; j < currentBoard[j]; i++) {
        if (currentBoard[i][j].includes(this.name)) {
          return ``;
        }
      }
    }
  }
  moveOnBoard() {
    for (i = 0; i < currentBoard.length; i++) {
      for (j = 0; j < currentBoard[j]; i++) {
        if (currentBoard[i][j].includes(this.name)) {
          currentBoard[i][j].splice(currentBoard[i][j], 1, []);
          currentBoard[this.x][this.y] = this.name;
        }
      }
    }
  }
}

class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Board {
  constructor() {
    this.theBoard = [];
  }

  createBoard() {
    for (let y = 0; y < 10; y++) {
      const currentCords = [];
      for (let x = 0; x < 10; x++) {
        currentCords.push("free");
      }
      this.theBoard.push(currentCords);
    }
  }

  placeRover(rover) {
    console.log(this.theBoard[rover.x][rover.y]);
    this.theBoard[rover.x][rover.y] = rover.name;
  }

  createObstacle() {
    console.log("Obstacle Created");
    let randomCol = Math.floor(Math.random() * 10);
    let randomRow = Math.floor(Math.random() * 10);

    console.log(randomCol);
    console.log(randomRow);
    console.log(currentBoard.theBoard[randomRow][randomCol]);
    if (currentBoard.theBoard[randomRow][randomCol] === "free") {
      currentBoard.theBoard[randomRow][randomCol] = "obstacle";
    } else {
      this.createObstacle();
    }
  }

  placeRover(rover) {
    console.log(rover);
    // this.currentBoard[rover.x][rover.y].push(rover.name);
  }
}
document.onkeyup = movement;
function movement(event) {
  console.log(event);
  if ((event.key = "w")) {
    moveForward();
  } else if ((event.key = "s")) {
    moveBack();
  } else if ((event.key = "a")) {
    turnLeft();
  }
}

let currentBoard = new Board();

currentBoard.createBoard();

let first = new Rover("N", 1, 1, "tom");

currentBoard.placeRover(first);

// first.getInfo();

// first.commands("rffflfffffff");

first.getInfo();

first.getBoardPosition();
