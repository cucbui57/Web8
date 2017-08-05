class ShipType1Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs) {
    super(
      x,
      y,
      `Spaceship1${spriteSuffix}.png`,
      // = "Spaceship1" +spriteSuffix+ ".png";
      configs
    );
    this.configs.SHIP_SPEED = 1000;
    this.configs.COOLDOWN = 100;
  }
    fire(){
      new BulletType1Controller(
        this.sprite.x,
        this.sprite.y,
        {}
      );
    }
  }
