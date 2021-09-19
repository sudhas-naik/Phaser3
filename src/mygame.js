import Phaser from 'phaser';

class MyGame extends Phaser.Scene
{
 constructor ()
    {
        super();
    } 
    create(){
    
        this.createGrid();  
        this.update();
    }
    
    createGrid( m, n){
        let x=0;
        let y=150;
       
         this.count=6;
        let width=700;
         // let height=750; 
            
         for( m=0; m<this.count;m++){
          
             x=width/this.count;
             y+=x;

             for( n=0;n<this.count;n++){
              
              //  this.container = this.add.container(x, y);
//this.container=this.add.container(x*n,y[ this.add.graphics({ fillStyle: { color: 0xffffff,top:'10',align:'top'} }),this.add.text(x*n,y,Phaser.Math.Between(-9,9),{color:' #000000', fontSize: "40px",align:'top' })]);
              var graphics = this.add.graphics({ fillStyle: { color: 0xffffff,top:'10',align:'top'} });
                let circle = new Phaser.Geom.Circle(x*n, y, 5);
              
                 graphics.fillCircleShape(circle);
               // circle.setOrigin(2,0);
               let text  = this.add.text(x*n,y,Phaser.Math.Between(-9,9),{color:' #000000', fontSize: "40px",align:'top' });
                text.setOrigin(0, 1);
               // this.container.add([circle, text,graphics]);
                

               
             }
        }

        }    
    }
   
     
export default MyGame;
