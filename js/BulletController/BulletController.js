class BulletController {
  constructor(x, y, spriteName) {
    this.sprite = Nakama.bulletGroup.create(x, y, 'assets', spriteName);

    // check xem dan co ra ngoai man hinh khong
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
  }
}
