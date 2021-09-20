import Phaser from 'phaser';
class MyGame extends Phaser.Scene
{
 constructor ()
    {
        super();
    } 
     create(){
    
        this.createGrid(); 
       
      // var container;

     
    }
    createGrid(m,n){
       let x=0;
        let y=150;
         this.count=3;
        let width=600;
        let height=750;
//     
         for(  m=1; m<this.count+1;m++){
          
             x=width/this.count;
             y+=x;
     for(  n=1;n<this.count+1;n++){  
    
   var container =this.add.container(350,400);
   container.setSize(width,height); 
  var graphics = this.add.graphics({ fillStyle: { color: 0xffffff,top:'10',align:'top'} });
          var  circle = new Phaser.Geom.Circle(x*n, y, 5);
  graphics.fillCircleShape(circle);
  let text  = this.add.text(x*n,y,Phaser.Math.Between(-9,9),{color:' #000000', fontSize: "40px",align:'top' });
         text.setOrigin(0, 1);
        
         container = this.add.container(0,100, [ graphics,text ]);  
       
             }
        }

        
        }
    }    
export default MyGame;