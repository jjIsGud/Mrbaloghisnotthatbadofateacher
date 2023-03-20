export class Player2 extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y/*, "player"*/)
		this.scene = scene
		this.scene.add.existing(this)
		this.scene.physics.add.existing(this)
		this.body.offset.x= 16
		this.body.offset.y = 32
	// this.body.x =16
		//this.body.y = 32
		this.body.setCollideWorldBounds(true)
		this.body.setBounce(0.1)
	}
	preUpdate(time,delta) {
		if (this.scene.input.gamepad.total > 0) {
			const pad = this.scene.input.gamepad.getPad(0)
			if (pad.leftStick.x > 0.1) {
				this.body.setVelocityX(200 * this.speed)
				this.anims.play('RunR')
			} else if (pad.leftStick.x < -0.1) {
				this.body.setVelocityX(-200 * this.speed)
				this.anims.play('RunL')
			} else {
				this.body.setVelocityX(0)
				this.anims.play('Idle')
			}
			if (pad.B && this.body.onFloor()) {
				this.body.setVelocityY(-600 * this.jumpM)
				this.jumpCount = 1
			}
			if (pad.A && this.jumpCount < 2) {
				this.body.setVelocityY(-500 * this.jumpM)
				this.jumpCount = 2
				console.log(this.jumpCount)
				if (this.body.onFloor()) this.jumpCount = 0
			}
			if (pad.B && this.jumpCount < 3 && this.jumpCount != 1) {
				this.body.setVelocityY(-400 * this.jumpM)
				this.jumpCount = 3
				console.log(this.jumpCount)
			}

			if (pad.L1 & !pad.R1) {
				this.jumpM = 1.25
				this.speed = 0.5
												this.anims.play('Idle')

			} else {
				this.jumpM = 1
				this.speed = 1
				if (pad.R1 & !pad.L1) {
					this.jumpM = 0.5
					this.speed = 3
					console.log('yes')
				} else {
					this.jumpM = 1
					this.speed = 1
				}
			}
		}
	}
}