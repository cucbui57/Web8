class ShipController {

  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);

    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;

    this.configs = configs;
    this.configs.SHIP_SPEED = 600;

    this.bullets = [];
    this.bullets.TIME = 5;
    this.bullets.wait = this.bullets.TIME;
    // bullet.push(
    //   new BulletController(x, y, 'BulletType1.png');
    // )
    this.sprite.update = this.update.bind(this);
  }

  update() {
    // console.log(this.sprite.position.x);
    // console.log(this.sprite.position.y);
    if (Nakama.keyboard.isDown(this.configs.left) ){
      this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
    }

    else if (Nakama.keyboard.isDown(this.configs.right)) {
      this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
    }

    else{
      this.sprite.body.velocity.x = 0;
    }

    if (Nakama.keyboard.isDown(this.configs.up)){
      (this.sprite.body.velocity.y = -this.configs.SHIP_SPEED);
    }

    else if (Nakama.keyboard.isDown(this.configs.down)) {
      (this.sprite.body.velocity.y = this.configs.SHIP_SPEED);
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
    if(this.bullets.wait < this.bullets.TIME) {
      this.bullets.wait++;
    }
    if(Nakama.keyboard.isDown(this.configs.fire) && this.bullets.wait == this.bullets.TIME){
      // console.log((this.sprite.position.x);
      this.bullets.push ( new BulletController(
        this.sprite.position.x + this.sprite.width/4,
        this.sprite.position.y- this.sprite.height/2,
        'BulletType1.png'
      ));
      // console.log((this.sprite.position.x));
      this.bullets.wait = 0;
    }
  }
}
