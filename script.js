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
