class Rover{
    constructor(direction, x, y){
      this.x = x;
      this.y = y;
      this.correctDir(direction);
    }

    //Turns rover left
    turnLeft(){
    this.direction--;
    }
    
    //Turns rover right
    turnRight(){
    this.direction++;
    }

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




  
}


  
