import Phaser from 'phaser';
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
        let y=0;
        let count=20;
        let width=750;
         //  let height=900;    
         for(let m= 0; m<count;m++){
            
             x=width/count;
             y+=x;
             for(let n=1;n<count;n++){
               // y=height/count;
               // x+=x;
                var graphics = this.add.graphics({ fillStyle: { color: 0xffffff,top:'10',align:'top'} });
                var circle = new Phaser.Geom.Circle(x*n, y, 3);
               
                graphics.fillCircleShape(circle);
                
               
    
                 
                let text  = this.add.text(x*n,y,Phaser.Math.Between(-9,9),{color:' #000000', fontSize: "10px",align:'top' });
                text.setOrigin(0.5, 2);
             }
        }
        }
         
    }
     
export default MyGame;