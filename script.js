class Rover {
    constructor(direction, x, y, name) {
      this.correctDir(direction);
      this.x = x;
      this.y = y;
      this.name = name;
      this.direction = 1;
      this.lastPosition = [];
      currentBoard.placeRover(this);
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
        else if (this.direction === 3 && this.y === 9) return false;
        else if (this.direction === 4 && this.x === 0) return false;
        else if (this.direction === 2 && this.x === 9) return false;
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
        if (!this.isAbleToMove("f")) return console.log("Rover can't go outside of the board!");
        if (this.direction === 1) this.y--;
        else if (this.direction === 2)  this.x++;
        else if (this.direction === 3)  this.y++;
        else if (this.direction === 4) this.x--;
        this.moveOnBoard();
    };
    moveBack() {
        if (!this.isAbleToMove("b")) return console.log("Rover can't go outside of the board!");
        if (this.direction === 1) this.y++;
        else if (this.direction === 2) this.x--;
        else if (this.direction === 3) this.y--;
        else if (this.direction === 4) this.x++;
        this.moveOnBoard();
    }

    getInfo(){
    console.log(this.getDirection(), this.y, this.x);
    }

    getBoardPosition(){
        let temp;
        for(let a = 0; a < currentBoard.currentBoard.length; a++){
            console.log(currentBoard.currentBoard)
            for(let b = 0; b < currentBoard.currentBoard[a].length; b++){
                console.log(currentBoard.currentBoard[1][1])
                if(currentBoard.currentBoard[a][b].includes(this.name)){
                    console.log("success");
                    return {a,b};
                }
            }
        }
    }

   

    moveOnBoard(){
        for(let temp = 0; temp < currentBoard.currentBoard.length; temp++){
            for(let whatever = 0; whatever < currentBoard.currentBoard[temp].length; whatever++){
                if(currentBoard.currentBoard[i][whatever].indexOf(this.name)){
                    currentBoard.currentBoard[i][whatever].splice(currentBoard.currentBoard[i][j], 1, []);
                    currentBoard.currentBoard[this.x][this.y] = [this.name];
                }
            }
        }
    }


  
  }


// class Obstacle {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }

//     createObst(){
//         for(i = 0; i < roverTracker.length; i++){
//             if(this.x === roverTracker[i].x && this.y === roverTracker[i].y){
//                 this.x = Math.floor(Math.random() * 10);
//                 this.y = Math.floor(Math.random() * 10);
//             }
//         }

//     }

// }

class Board {
    constructor(){
        this.currentBoard = [];

    }

    createBoard (){
        for (let y = 0; y < 10; y++) {
            const currentCords = []
             for (let x = 0; x < 10; x++) {
               currentCords.push(
                "free"
                )
             }
             this.currentBoard.push(currentCords)
           }
    }

    placeRover (rover){
        this.currentBoard[rover.x][rover.y].push(rover.name);
    }

}



let currentBoard = new Board;

currentBoard.createBoard();

let first = new Rover("N", 1, 1, "tom");

first.getInfo();

// first.commands("rffflfffffff");

first.getInfo();

first.getBoardPosition();