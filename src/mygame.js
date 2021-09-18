import Phaser from 'phaser';
import img from './assets/dotgame.png';
class MyGame extends Phaser.Scene
{
 constructor ()
    {
        super();
    } 
    create(){
    
        this.createGrid();  
    }
    
    createGrid(){
        let x=0;
        let y=150;
         this.count=5;
        let width=750;
         // let height=750; 
            
         for(let m=1; m<this.count;m++){
            
             x=width/this.count;
             y+=x;

             for(let n=1;n<this.count;n++){
              
              
              var graphics = this.add.graphics({ fillStyle: { color: 0xffffff,top:'10',align:'top'} });
                var circle = new Phaser.Geom.Circle(x*n, y, 5);
                 graphics.fillCircleShape(circle);
               let text  = this.add.text(x*n,y,Phaser.Math.Between(-9,9),{color:' #000000', fontSize: "40px",align:'top' });
                text.setOrigin(-1.5, 1.5);
                 
               
             }
        }
        }   
    }
     
export default MyGame;