class EnemyController {
  constructor(x, y, spriteName, configs) {
    this.sprite = Nakama.enemyGroup.create(x, y, 'assets', spriteName);

    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
    this.moveRadius = 250;
    this.startingX = x;
    this.sprite.health = this.configs.health;
    this.ENEMY_SPEED = 500;
    this.sprite.update = this.update.bind(this);
    this.sprite.body.velocity.x = -this.ENEMY_SPEED;
  }
  update(){
    this.sprite.position.x = this.startingX + this.moveRadius * Math.sin(Nakama.game.time.time / 1000);
  }
}
