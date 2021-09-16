import Phaser from 'phaser';
import MyGame from './mygame';
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 750,
    height: 900,
    backgroundColor: '#ffffff',
    scene: MyGame
};
const game = new Phaser.Game(config);
