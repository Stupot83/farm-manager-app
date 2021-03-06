import Crop from "../abstract/Crop";
import Farm from "../Farm";

class Pumpkin extends Crop {
  name: string = "Pumpkin";
  genus: string = "Pumpkins";
  imgUrl: string = "/img/twtr/pumpkin.png";
  birthDate: Date = new Date();
  age: number = 0;
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  maxAge() {
    if(this.age >= 121) {
      this.age = 121
    }
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
  }

  public plantAge() {
    return Math.floor((this.age += 0.04));
  }

  public draw(): any {
    this.constrainItem();
    this.farmerExamine();
    this.maxAge();
  }

  yieldPumpkin() {
    this.farm.pumpkin.total += this.farm.pumpkins.total;
    this.farm.pumpkins.total --;
    this.health = 0;
  }

  plantPumpkin(fieldX: number, fieldY: number) {
    this.x = fieldX;
    this.y = fieldY;
  }
}
export default Pumpkin;
