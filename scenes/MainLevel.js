import { Player2 } from '../objects/Player2.js'
import { Enemy } from '../objects/Enemy.js'
export class MainLevel extends Phaser.Scene {
	constructor() {
		super({ key: "main-level" });
	}

	preload(time,delta) {
		console.log("loading MainLevel");
		this.load.image("platform", "assets/platform.png")
		this.load.image("bg", "assets/1.jpg")
		this.load.spritesheet("player", "assets/Player.png", { frameWidth: 64, frameHeight: 64 })
		this.load.spritesheet("ghoul", "assets/goul.png", { frameWidth: 32, frameHeight: 32 })
		this.load.spritesheet("candel", "assets/candel.png", { frameWidth: 32, frameHeight: 32 })
	}

	addPlatform(x, y, w, h) {
		const platform = this.add.image(x, y, 'platform')
		this.platforms.push(platform)
		this.physics.add.existing(platform)
		platform.body.setAllowGravity(false)
		platform.body.setImmovable(true)
		this.platforms.push(platform)
	}
	addPlatformB(x, y, w, h, r) {
		const platformB = this.add.image(x, y, 'platform')
		this.platformsB.push(platformB)
		this.physics.add.existing(platformB)
		platformB.body.setAllowGravity(false)
		platformB.body.setImmovable(true)
		platformB.body.setAngularVelocity(r)
		this.platforms.push(platformB)

	}
	addPlatformC(x, y, w, h) {
		const platformC = this.add.rectangle(x, y, w, h, 0x0000000)
		this.platformsC.push(platformC)
		this.physics.add.existing(platformC)
		platformC.body.setAllowGravity(false)
		platformC.body.setImmovable(true)
		this.platforms.push(platformC)

	}
	create() {
/*				for(let i =0; i<11; i++){
						for(let e =0; e<15; e++){
		this.add.image(i*500, e*400, 'bg')
						}
		}
	*/
				this.add.image(2500,2500,'bg')

			this.anims.create({
			key: "RunR",
			frames: this.anims.generateFrameNumbers("player", { start: 1, end: 3, first: 0 }),
			framerate: 0,
			repeat: -1,
			duration: 500

		})
			this.anims.create({
			key: "RunL",
			frames: this.anims.generateFrameNumbers("player", { start: 4, end: 6, first: 0 }),
			framerate: 0,
			repeat: -1,
			duration: 500

		})
				this.anims.create({
			key: "Idle",
			frames: this.anims.generateFrameNumbers("player", { start: 0, end: 0, first: 0 }),
			framerate: 0,
			repeat: -1,
			duration: 500

		})
		this.physics.world.bounds.width = 5000
		this.physics.world.bounds.height = 5000
		this.cameras.main.setBounds(0, 0, 5000, 5000)
		this.player2 = new Player2(this, 100, 100)
		this.cameras.main.startFollow(this.player2)

		/*
			this.anims.create({
				key: "spawn",
				frames: this.anims.generateFrameNumbers("ghoul", { start: 0, end: 3, first: 0 }),
				framerate: 0,
				repeat: -1,
				duration: 500
	
			})
			*/
		this.anims.create({
			key: "urmom",
			frames: this.anims.generateFrameNumbers("candel", { start: 0, end: 3, first: 0 }),
			framerate: 0,
			repeat: -1,
			duration: 500

		})
		this.platforms = []
		this.platformsB = []
		this.platformsC = []
		this.enemies = []
		this.em2 = this.add.sprite(150, 100, "candel").play("urmom")
		this.addPlatform(50, 200, 200, 50)
		this.addPlatform(350, 200, 200, 50)
		this.addPlatform(350, 100, 200, 10)
		this.addPlatform(100, 300, 200, 10)
		this.addPlatform(50, 500, 200, 50)
		this.addPlatform(350, 750, 200, 50)
		this.addPlatform(350, 1000, 200, 10)
		this.addPlatform(100, 1500, 200, 10)
		this.addPlatform(50, 1750, 200, 50)
		this.addPlatform(100, 750, 50, 50)
		this.addPlatform(10, 1000, 200, 10)
		this.addPlatform(20, 2000, 200, 10)
		this.addPlatform(50, 2500, 200, 50)
		this.addPlatform(350, 3000, 200, 50)
		this.addPlatform(350, 3500, 200, 10)
		this.addPlatform(100, 4000, 200, 10)
		this.addPlatform(100, 4500, 200, 10)
		this.addPlatform(50, 5000, 200, 50)
		this.addPlatform(350, 1750, 200, 50)
		this.addPlatform(350, 1200, 200, 10)
		this.addPlatform(100, 1850)
		this.addPlatform(50, 3540)
		this.addPlatform(100, 3400)
		this.addPlatform(10, 890)
		this.addPlatform(20, 2220)
		this.addPlatformC(200, 500, 100, 10)
		for(let i =0; i<10; i++){
			this.addPlatform(100*i+400, 200+i*10)
			this.addPlatform(100*i+400, 100+i*10)
		}
		this.enemies.push(new Enemy(this, 0, 0, this.player2).play('spawn'))
		this.physics.add.collider(this.player2, this.platforms)
		this.physics.add.collider(this.player2, this.platformsB)
		this.physics.add.collider(this.player2, this.platformsC)
		this.physics.add.collider(this.player2, this.enemies)
		this.physics.add.collider(this.player2, this.enemies)
		this.physics.add.collider(this.enemies, this.platforms)
		this.physics.add.collider(this.enemies, this.platformsB)
		this.physics.add.collider(this.enemies, this.platformsC)
		 this.physics.add.collider(this.player2, this.enemies, (p, e) => { e.destroy(), this.scene.start('main-level2') })

		// this runs once when the scene is created
		// initialize variables and create object here
		// create colliders after all objects exist
	}

	update(time, delta) {
	}

}
