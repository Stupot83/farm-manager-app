import Farmer from "../src/models/Farmer";
import Market from "../src/models/Market";
import Farm from "../src/models/Farm";

const makeFarm = (
  farm: Farm,
  farmer: Farmer,
  market: Market,
  setAppState: Function
): Function => {
  const sketch = (p: any) => {
    p.preload = () => {
      // Make P5 available to each instance using the Drawable abstract class
      farmer.myP5 = p;
      market.myP5 = p;
      farm.myP5 = p;

      // set the property using the HasUI abstract class
      farmer.setHandleUpdate = setAppState;
      farm.setHandleUpdate = setAppState;
      market.setHandleUpdate = setAppState;
      farm.preload();

      farmer.preload();
      market.preload();
    };

    window.onresize = () => {
      const height = window.innerHeight;  
      const width = window.innerWidth;
      p.resizeCanvas(1065, 555);
      p.height = height;
      p.width = width;
    };

    p.setup = () => {
      p.createCanvas(1065, 555);
      farmer.farm = farm;
      farmer.market = market;
      market.farmer = farmer;
    };

    p.draw = () => {
      p.background("#50c878");
      farm.draw();
      market.draw();
      farmer.draw();
    };

    p.keyPressed = () => {
      farmer.keyPressed();
    };
  };
  // return a closure to be used in App.js
  return sketch;
};

export default makeFarm;
