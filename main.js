 import { StartMenu } from './scenes/StartMenu.js';
import { MainLevel } from './scenes/MainLevel.js';
import { MainLevel2 } from './scenes/MainLevel2.js';
import { GameOver } from './scenes/GameOver.js';

let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    input: {
        gamepad: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            fps: 240,
            gravity: { y: 1000, x:0 }
        }
    },
    scene: [ 
      StartMenu, GameOver, MainLevel, MainLevel2
    ]
};

let game = new Phaser.Game(config);