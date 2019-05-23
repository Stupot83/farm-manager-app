import Drawable from "./abstract/Drawable";
import Farmer from "./Farmer";

class Market extends Drawable {
  imgUrl = "/img/twtr/market.png";
  currentFarmer!: Farmer;

  pricePerCow: number = 60;
  pricePerSheep: number = 40;
  pricePerChicken: number = 20;
  pricePerPig: number = 80;
  pricePerCrocodile: number = 100;
  pricePerOstrich: number = 60;
  pricePerSalmon: number = 40;
  pricePerDuck: number = 40;
  pricePerGoose: number = 40;
  pricePerLlama: number = 40;

  cabbagePrice: number = 10;
  carrotPrice: number = 10;
  kalePrice: number = 10;
  lettucePrice: number = 10;
  peaPrice: number = 10;
  potatoPrice: number = 10;
  pumpkinPrice: number = 10;
  rapeseedPrice: number = 10;
  sugarbeetPrice: number = 10;
  wheatPrice: number = 10;

  cabbageSeedPrice: number = 10;
  carrotSeedPrice: number = 10;
  kaleSeedPrice: number = 10;
  lettuceSeedPrice: number = 10;
  peaSeedPrice: number = 10;
  potatoSeedPrice: number = 10;
  pumpkinSeedPrice: number = 10;
  rapeseedSeedPrice: number = 10;
  sugarbeetSeedPrice: number = 10;
  wheatSeedPrice: number = 10;

  strawPrice: number = 100;
  cornPrice: number = 100;
  fishPrice: number = 100;
  fishFoodPrice: number = 100;
  grassSeedPrice: number = 100;

  gasGeneratorPrice: number = 1000;
  solarPanelPrice: number = 1000;

  beefPrice: number = 25;
  lambPrice: number = 25;
  chickenPrice: number = 25;
  porkPrice: number = 25;
  crocodilePrice: number = 25;
  ostrichPrice: number = 25;
  salmonPrice: number = 25;
  duckPrice: number = 25;
  goosePrice: number = 25;
  llamaPrice: number = 25;

  milkPrice: number = 100;
  eggsPrice: number = 100;
  crocEggsPrice: number = 100;
  ostrichEggsPrice: number = 100;
  duckEggsPrice: number = 100;
  gooseEggsPrice: number = 100;

  woolPrice: number = 100;
  llamaWoolPrice: number = 100;
  greenGasPrice: number = 5;
  solarPowerPrice: number = 5;
  gasGeneratorResalePrice: number = 50;
  solarPanelResalePrice: number = 50;

  constructor() {
    super();
    this.x = 1000;
    this.y = 275;
    this.width = 60;
    this.height = 60;
  }

  set farmer(farmer: Farmer) {
    this.currentFarmer = farmer;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
  }

  public draw() {
    this.p5.image(this.p5Img, this.x, this.y, this.width, this.height);
  }
}

export default Market;
