class ShipType1Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs) {
    super(
      x,
      y,
      `Spaceship1${spriteSuffix}.png`,
      // = "Spaceship1" +spriteSuffix+ ".png";
      configs
    );
    this.configs.SHIP_SPEED = 600;
    this.configs.COOLDOWN = 500;
  }
    fire(){
      new BulletType1Controller(
        this.sprite.x,
        this.sprite.y,
        {}
      );
    }
  }
