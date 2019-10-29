


class Rover {
    constructor(direction, x, y, name) {
      this.correctDir(direction);
      this.x = x;
      this.y = y;
      this.name = name;
      this.direction = 1;
      this.lastPosition = [];
      this.points = 0;
    }
  
    correctDir(direction){ 
      if(direction === "W"){
          this.direction = 4;
      }
      if(direction === "S"){
          this.direction = 3;
      }
      if(direction === "E"){
          this.direction = 2;
      }
      if(direction === "N"){
          this.direction = 1;
      }
      if(direction > 4){
          this.direction = 1;
      }
      
      if (direction < 1){
          this.direction = 4;
      }
    }
  
    getDirection(){
        if(this.direction === 1){
          return "N";
        }
        if(this.direction === 2){
          return "E";
        }
      if(this.direction === 3){
          return "S";
       }
      if(this.direction === 4){
          return "W";
        }
    }
  
    //Turns rover left
    turnLeft(){
        console.log("turnLeft was called!");
        this.direction--;
        if (this.direction < 1){
            this.direction = 4;
        }
    }
    
    //Turns rover right
    turnRight(){
        console.log("turnRight was called!");
        this.direction++;
        if(this.direction > 4){
            this.direction = 1;
        }
    }

    commands(orders){
        for (let i = 0; i < orders.length; i++){
            let order = orders[i];
            switch(order) {
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



    moveForward (){
        console.log('Forward was called');
        if (!this.isAbleToMove("f")) return console.log("Rover can't go outside of the board!");
        if (this.direction === 1) {
            currentBoard.theBoard[this.y][this.x] = "free";
            if(currentBoard.theBoard[this.y-1][this.x] === "points"){
                first.points += 100;
                document.querySelector('.scoreCount > span').innerHTML = first.points;
            }
            currentBoard.theBoard[this.y-1][this.x] = this.name;
            this.y--;
            refreshBoard();
        }
        else if (this.direction === 2)  {
            currentBoard.theBoard[this.y][this.x] = "free";
            if(currentBoard.theBoard[this.y][this.x+1] === "points"){
                first.points += 100;
                document.querySelector('.scoreCount > span').innerHTML = first.points;
            }
            currentBoard.theBoard[this.y][this.x+1] = this.name;
            this.x++;
            refreshBoard();
        }
        else if (this.direction === 3)  {
            currentBoard.theBoard[this.y][this.x] = "free";
            if(currentBoard.theBoard[this.y+1][this.x] === "points"){
                first.points += 100;
                document.querySelector('.scoreCount > span').innerHTML = first.points;
            }
            currentBoard.theBoard[this.y+1][this.x] = this.name;
            this.y++;
            refreshBoard();
        }
        else if (this.direction === 4) {
            currentBoard.theBoard[this.y][this.x] = "free";
            if(currentBoard.theBoard[this.y][this.x-1] === "points"){
                first.points += 100;
                document.querySelector('.scoreCount > span').innerHTML = first.points;
            }
            currentBoard.theBoard[this.y][this.x-1] = this.name;
            this.x--;
            refreshBoard();
        }
    };
    moveBack() {
        if (!this.isAbleToMove("b")) return console.log("Rover can't go outside of the board!");
        if (this.direction === 1) {
            this.y++;
            currentBoard.theBoard[this.x][this.y+1] = this.name;
            currentBoard.theBoard[this.x][this.y] = "free";
        }
        else if (this.direction === 2) {
            this.x--;
            currentBoard.theBoard[this.x-1][this.y] = this.name;
            currentBoard.theBoard[this.x][this.y] = "free";
        }
        else if (this.direction === 3) {
            this.y--;
            currentBoard.theBoard[this.x][this.y-1] = this.name;
            currentBoard.theBoard[this.x][this.y] = "free";
        }
        else if (this.direction === 4) {
            this.x++;
            currentBoard.theBoard[this.x+1][this.y] = this.name;
            currentBoard.theBoard[this.x][this.y] = "free";
        }
    }

    getInfo(){
    console.log(this.getDirection(), this.y, this.x);
    }
  
  }

class Board {
    constructor(){
        this.theBoard= [];

    }

    createBoard (){
        for (let y = 0; y < 10; y++) {
            const currentCords = []
             for (let x = 0; x < 10; x++) {
               currentCords.push(
                "free"
                )
             }
             this.theBoard.push(currentCords)
           }
    }

    placeRover (rover){
        console.log(this.theBoard[rover.x][rover.y]);
        this.theBoard[rover.x][rover.y] = rover.name;
    }

    createObstacle(){
        console.log('Obstacle Created');
        let randomCol = Math.floor(Math.random() * 10);
        let randomRow = Math.floor(Math.random() * 10);

        console.log(randomCol);
        console.log(randomRow);
        console.log(currentBoard.theBoard[randomRow][randomCol]);
        if(currentBoard.theBoard[randomRow][randomCol] === "free"){
            currentBoard.theBoard[randomRow][randomCol] = "obstacle";
            refreshBoard();
        }else{
            this.createObstacle();
        }
    }

    createPoints(){
        console.log('Points Created');
        let randomCol = Math.floor(Math.random() * 10);
        let randomRow = Math.floor(Math.random() * 10);

        console.log(randomCol);
        console.log(randomRow);
        console.log(currentBoard.theBoard[randomRow][randomCol]);
        if(currentBoard.theBoard[randomRow][randomCol] === "free"){
            currentBoard.theBoard[randomRow][randomCol] = "points";
            refreshBoard();
        }else{
            this.createObstacle();
        }
    }

}



let currentBoard = new Board;

currentBoard.createBoard();

let first = new Rover("N", 1, 1, "tom");

currentBoard.placeRover(first);

first.commands("f");



function refreshBoard(){
    for(let i = 0; i < currentBoard.theBoard.length; i++){
        for(let j = 0; j < currentBoard.theBoard.length; j++){
            if(currentBoard.theBoard[j][i] === "free"){
                document.querySelector(`.row${i+1} > .col${j+1}`).innerHTML = "";
            }
            if(currentBoard.theBoard[j][i] === first.name){
                switch(first.direction){
                    case 1:
                        document.querySelector(`.row${i+1} > .col${j+1}`).innerHTML = "<img src=\"robotleft.png\" width=\"100%\" height=\"100%\">";
                        break;
                    case 2:
                        document.querySelector(`.row${i+1} > .col${j+1}`).innerHTML = "<img src=\"robotdown.png\" width=\"100%\" height=\"100%\">";
                        break;
                    case 3:
                        document.querySelector(`.row${i+1} > .col${j+1}`).innerHTML = "<img src=\"robotright.png\" width=\"100%\" height=\"100%\">";
                        break;
                    case 4:
                        document.querySelector(`.row${i+1} > .col${j+1}`).innerHTML = "<img src=\"robot.png\" width=\"100%\" height=\"100%\">";
                        break;
                }
            }
            if(currentBoard.theBoard[j][i] === "obstacle"){
                document.querySelector(`.row${i+1} > .col${j+1}`).innerHTML = "<img src=\"download.jpg\" width=\"100%\" height=\"100%\">";
            }
            if(currentBoard.theBoard[j][i] === "points"){
                document.querySelector(`.row${i+1} > .col${j+1}`).innerHTML = "<img src=\"coin.jpg\" width=\"100%\" height=\"100%\">";
            }
        }
    }

}

currentBoard.createObstacle();
currentBoard.createObstacle();
currentBoard.createObstacle();
currentBoard.createObstacle();
currentBoard.createObstacle();
currentBoard.createPoints();
currentBoard.createPoints();
currentBoard.createPoints();
currentBoard.createPoints();
currentBoard.createPoints();
currentBoard.createPoints();
refreshBoard();

document.addEventListener("keydown", getKey);

function getKey(e){
    switch(e.key){
        case "w":
            first.moveForward();
            break;
        case "e":
            first.turnLeft();
            break;
        case "q":
            first.turnRight();
            break;
        case "s":
            first.moveBack();
    }
}

