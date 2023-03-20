export class StartMenu extends Phaser.Scene {
	constructor() {
		super({ key: "start-menu", active: true });
	}

	preload() {
	}

	create() {
		this.welcome = this.add.text(150, 150, "Welcome to My Game!");
		this.yes = this.add.text(150, 200, "figure the controls out");
		this.move = this.add.text(100, 100, '(X) to start')
		this.kbStart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
		this.physics.add.existing(this.welcome)
		this.physics.add.existing(this.move)
		this.welcome.body.collideWorldBounds = true
		this.move.body.collideWorldBounds = true
		this.welcome.body.setBounce(1)
		this.move.body.setBounce(1)
		this.welcome.body.setAngularVelocity(0)
		this.physics.add.collider(this.welcome, this.move)
		
	}
	update() {
		if (this.input.gamepad.total > 0) {
			const pad = this.input.gamepad.getPad(0)
			if (pad.A) {
				this.add.text(100, 200, 'Loading...')
				this.scene.start('main-level')
			}

			if (pad.B) {
				this.welcome.body.setVelocityY(50)
				this.welcome.setOrigin(0.5,0.5)
				this.welcome.body.x = 150
				this.welcome.body.setAngularVelocity(26)
				this.move.body.setVelocityY(50)
				this.move.setOrigin(0.5,0.5)
				this.move.body.x = 100
				this.move.body.setAngularVelocity(26)

			}
			if (pad.Y) {
				this.welcome.body.setVelocityY(-50)
			
			}

		}
	}
}