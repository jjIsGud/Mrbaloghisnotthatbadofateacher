import { Player2 } from '../objects/Player2.js'
import { Enemy } from '../objects/Enemy.js'
export class MainLevel2 extends Phaser.Scene {
	constructor() {
		super({ key: "main-level2" });
	}

	preload(time,delta) {
		console.log("loading MainLevel2");
	}
	create() {
/*				for(let i =0; i<11; i++){
						for(let e =0; e<15; e++){
		this.add.image(i*500, e*400, 'bg')
						}
		}
	*/
		// this runs once when the scene is created
		// initialize variables and create object here
		// create colliders after all objects exist
	}

	update(time, delta) {
	}

}
