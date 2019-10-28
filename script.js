class Rover{
    constructor(direction, x, y){
      this.x = x;
      this.y = y;
      this.correctDir(direction);
    }

//Direction function
    correctDir(direction){ 
        let numericDir = 1;
        if(direction === "W"){
            numericDir = 4;
        }
        if(direction === "S"){
            numericDir = 3;
        }
        if(direction === "E"){
            numericDir = 2;
        }
        if(direction === "N"){
            numericDir = 1;
        }
        if(direction > 4){
          this.direction = 1;
        }
      
        if (direction < 1){
          this.direction = 4;
        }
      }

      //Turns rover left
      turnLeft(){
        this.direction--;
      }
      
      //Turns rover right
      turnRight(){
        this.direction++;
      }




  
  }

  let first = new Rover("W", 1,1);

  first.roverCommands("fbblrfbf");