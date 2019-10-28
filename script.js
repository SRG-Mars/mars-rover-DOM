class Rover {
  constructor(direction, x, y) {
    this.direction = direction;
    this.x = x;
    this.y = y;
  }
  moveForward = () => {
    if (!isAbleToMove(this.direction, "f")) return console.log("Rover can't go outside of the board!");
    if (this.direction === "N") {
      this.y--;
    } else if (this.direction === "E") {
      this.x++;
    } else if (this.direction === "S") {
      this.y++;
    } else if (this.direction === "W") {
      this.x--;
    }
  };
  moveBack = () => {
    if (!isAbleToMove(this.direction, "b")) return console.log("Rover can't go outside of the board!");
    if (this.direction === "N") {
      this.y++;
    } else if (this.direction === "E") {
      this.x--;
    } else if (this.direction === "S") {
      this.y--;
    } else if (this.direction === "W") {
      this.x++;
    }
  };
}
function isAbleToMove(direction, command) {
  if (command === "f") {
    if (this.direction === "N" && this.y === 0) return false;
    else if (this.direction === "S" && this.y === 9) return false;
    else if (this.direction === "W" && this.x === 0) return false;
    else if (this.direction === "E" && this.x === 9) return false;
    else return true;
  } else if (command === "b") {
    if (this.direction === "S" && this.y === 0) {
      return false;
    } else if (this.direction === "N" && this.y === 9) {
      return false;
    } else if (this.direction === "E" && this.x === 0) {
      return false;
    } else if (this.direction === "W" && this.x === 9) {
      return false;
    } else return true;
  }
}

class Rover {
  constructor(direction, x, y) {
    this.x = x;
    this.y = y;
    this.correctDir(direction);
  }

  //Direction function
  correctDir(direction) {
    let numericDir = 1;
    if (direction === "W") {
      numericDir = 4;

    //Turns rover left
    turnLeft(){
    this.direction--;
    }
    if (direction === "S") {
      numericDir = 3;
    }
    if (direction === "E") {
      numericDir = 2;
    }
    if (direction === "N") {
      numericDir = 1;
    }
    if (direction > 4) {
      this.direction = 1;

//Direction functions
    roverCommands(orders){
        for (let i = 0; i < orders.length; i++){
            let order = orders[i];
            switch(order) {
            case "r":
                this.turnRight;
                break;
            case "l":
                this.turnLeft;
                break;
            case "f":
                this.moveForward;
                break;
            case "b":
                this.moveBack;
                break;
            default:
                console.log("Not a valid command!");
            }
        }
        console.log(this.x, this.y);
    }

    if (direction < 1) {
      this.direction = 4;
    }
  }

  //Turns rover left
  turnLeft() {
    this.direction--;
  }

  //Turns rover right
  turnRight() {
    this.direction++;
  }

  roverCommands(orders) {
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      switch (order) {
        case "r":
          this.turnRight;
          break;
        case "l":
          this.turnLeft;
          break;
        case "f":
          this.moveForward;
          break;
        case "b":
          this.moveBack;
          break;
        default:
          console.log("Not a valid command!");
      }
    }
  }
}
