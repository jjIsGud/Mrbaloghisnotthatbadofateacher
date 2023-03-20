export class Enemy extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y,target) {
		super(scene, x, y,'ghoul')
		this.scene = scene
		this.target = target
		this.scene.physics.add.existing(this)
		this.scene.add.existing(this)
		this.body.isCircle = true
		this.body.collideWorldBounds = true	
				this.anims.create({
			key: "spawn",
			frames: "ghoul",
			framerate: 100,
			repeat: -1,
			duration: 500

		})
		this.anims.play("spawn")
	}
	preUpdate(time,delta) {
		super.preUpdate(time,delta)
			this.scene.physics.moveToObject(this, this.target, 250, null)
	}
	
}
