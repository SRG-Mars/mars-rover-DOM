class Rover{
    constructor(direction, x, y){
      this.x = x;
      this.y = y;
      this.direction = direction;
    }

// Commands function
    
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
      }

  }

  