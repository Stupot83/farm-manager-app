import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./FieldDashboard.css";

class FieldDashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  cropAge() {
    return (
      this.props.field.contents.reduce((a, b) => a + b.plantAge(), 0) /
      this.props.field.contents.length
    ).toFixed(2);
  }

  animalHunger() {
    return (
      this.props.field.contents.reduce((a, b) => a + b.hunger, 0) /
      this.props.field.contents.length
    ).toFixed(2);
  }

  animalHealth() {
    return (
      this.props.field.contents.reduce((a, b) => a + b.health, 0) /
      this.props.field.contents.length
    ).toFixed(2);
  }

  getMeat(meat) {
    const arrmid = this.props.field.contents.length / 2;
    const arrqtr = this.props.field.contents.length / 4;

    switch (meat) {
      case "beef":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldBeef();
        }
        this.props.field.contents.pop();
        break;

      case "halfBeef":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldBeef();
          this.props.field.contents.pop();
        }
        break;

      case "quarterBeef":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldBeef();
          this.props.field.contents.pop();
        }
        break;

      case "lamb":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLamb();
        }
        this.props.field.contents.pop();
        break;

      case "halfLamb":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldLamb();
          this.props.field.contents.pop();
        }
        break;

      case "quarterLamb":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldLamb();
          this.props.field.contents.pop();
        }
        break;

      case "chicken":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldChicken();
        }
        this.props.field.contents.pop();
        break;

      case "halfChicken":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldChicken();
          this.props.field.contents.pop();
        }
        break;

      case "quarterChicken":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldChicken();
          this.props.field.contents.pop();
        }
        break;

      case "pork":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldPork();
        }
        this.props.field.contents.pop();
        break;

      case "halfPork":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldPork();
          this.props.field.contents.pop();
        }
        break;

      case "quarterPork":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldPork();
          this.props.field.contents.pop();
        }
        break;

      case "crocodile":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCrocodile();
        }
        this.props.field.contents.pop();
        break;

      case "halfCrocodile":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldCrocodile();
          this.props.field.contents.pop();
        }
        break;

      case "quarterCrocodile":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldCrocodile();
          this.props.field.contents.pop();
        }
        break;

      case "ostrich":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldOstrich();
        }
        this.props.field.contents.pop();
        break;

      case "halfOstrich":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldOstrich();
          this.props.field.contents.pop();
        }
        break;

      case "quarterOstrich":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldOstrich();
          this.props.field.contents.pop();
        }
        break;

      case "salmon":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldSalmon();
        }
        this.props.field.contents.pop();
        break;

      case "halfSalmon":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldSalmon();
          this.props.field.contents.pop();
        }
        break;

      case "quarterSalmon":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldSalmon();
          this.props.field.contents.pop();
        }
        break;

      case "duck":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldDuck();
        }
        this.props.field.contents.pop();
        break;

      case "halfDuck":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldDuck();
          this.props.field.contents.pop();
        }
        break;

      case "quarterDuck":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldDuck();
          this.props.field.contents.pop();
        }
        break;

      case "goose":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGoose();
        }
        this.props.field.contents.pop();
        break;

      case "halfGoose":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldGoose();
          this.props.field.contents.pop();
        }
        break;

      case "quarterGoose":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldGoose();
          this.props.field.contents.pop();
        }
        break;

      case "llama":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLlama();
        }
        this.props.field.contents.pop();
        break;

      case "halfLlama":
        for (let i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldLlama();
          this.props.field.contents.pop();
        }
        break;

      case "quarterLlama":
        for (let i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldLlama();
          this.props.field.contents.pop();
        }
        break;

      default:
    }
  }

  getDairy(dairy) {
    switch (dairy) {
      case "milk":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldMilk();
          this.props.field.contents[i].checkCowHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "eggs":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldEggs();
          this.props.field.contents[i].checkChickenHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "crocEggs":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCrocEggs();
          this.props.field.contents[i].checkCrocodileHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "ostrichEggs":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldOstrichEggs();
          this.props.field.contents[i].checkOstrichHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "duckEggs":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldDuckEggs();
          this.props.field.contents[i].checkDuckHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "gooseEggs":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGooseEggs();
          this.props.field.contents[i].checkGooseHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      default:
    }
  }

  getCrops(crops) {
    switch (crops) {
      case "cabbages":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCabbage();
          this.props.field.contents.pop();
        }
        break;

      case "carrots":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCarrot();
          this.props.field.contents.pop();
        }
        break;

      case "kales":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldKale();
          this.props.field.contents.pop();
        }
        break;

      case "lettuces":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLettuce();
          this.props.field.contents.pop();
        }
        break;

      case "peas":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldPea();
          this.props.field.contents.pop();
        }
        break;

      case "potatoes":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldPotato();
          this.props.field.contents.pop();
        }
        break;

      case "pumpkins":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldPumpkin();
          this.props.field.contents.pop();
        }
        break;

      case "rapeseeds":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldRapeseed();
          this.props.field.contents.pop();
        }
        break;

      case "sugarbeets":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldSugarbeet();
          this.props.field.contents.pop();
        }
        break;

      case "wheats":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldWheat();
          this.props.field.contents.pop();
        }
        break;

      default:
    }
  }

  getMisc(misc) {
    switch (misc) {
      case "wool":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldWool();
          this.props.field.contents[i].checkSheepHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "llamaWool":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLlamaWool();
          this.props.field.contents[i].checkLlamaHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "greenGas":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGreenGas();
          this.props.field.contents[i].checkGasGeneratorHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "gasGenerator":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGasGenerator();
          this.props.field.contents.pop();
        }
        break;

      case "solarPower":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldSolarPower();
          this.props.field.contents[i].checkSolarPanelHealth();
          if (this.props.field.contents[i].health <= 0) {
            this.props.field.contents.pop();
          }
        }
        break;

      case "solarPanel":
        for (let i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldSolarPanel();
          this.props.field.contents.pop();
        }
        break;

      default:
    }
  }

  render() {
    return (
      <div className="FieldDashboard">
        {this.props.field.contents[0] && (
          <p>
            <h5>
              {this.props.field.fieldName} Area for{" "}
              {this.props.field.contents[0].name}s
              <br />
              (currently with {this.props.field.contents.length}{" "}
              {this.props.field.contents[0].name}s)
            </h5>

            {this.props.field.contents[0].name === "Cow" && (
              <div className="AnimalHunger">
              <p>
                  Avg Health: {this.animalHealth()}
                </p>
                <p>
                  Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Cow" && (
              <Button onClick={() => this.getMeat("beef")}>Collect beef</Button>
            )}
            {this.props.field.contents[0].name === "Cow" && (
              <Button onClick={() => this.getMeat("halfBeef")}>
                Collect 1/2 beef
              </Button>
            )}
            {this.props.field.contents[0].name === "Cow" && (
              <Button onClick={() => this.getMeat("quarterBeef")}>
                Collect 1/4 beef
              </Button>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
               <div className="AnimalHunger">
               <p>
                   Avg Health: {this.animalHealth()}
                 </p>
                 <p>
                   Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <Button onClick={() => this.getMeat("lamb")}>Collect lamb</Button>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <Button onClick={() => this.getMeat("halfLamb")}>
                Collect 1/2 lamb
              </Button>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <Button onClick={() => this.getMeat("quarterLamb")}>
                Collect 1/4 lamb
              </Button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <div className="AnimalHunger">
              <p>
                  Avg Health: {this.animalHealth()}
                </p>
                <p>
                  Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <Button onClick={() => this.getMeat("chicken")}>
                Collect chicken
              </Button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <Button onClick={() => this.getMeat("halfChicken")}>
                Collect 1/2 chicken
              </Button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <Button onClick={() => this.getMeat("quarterChicken")}>
                Collect 1/4 chicken
              </Button>
            )}
            {this.props.field.contents[0].name === "Pig" && (
               <div className="AnimalHunger">
               <p>
                   Avg Health: {this.animalHealth()}
                 </p>
                 <p>
                   Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Pig" && (
              <Button onClick={() => this.getMeat("pork")}>Collect pork</Button>
            )}
            {this.props.field.contents[0].name === "Pig" && (
              <Button onClick={() => this.getMeat("halfPork")}>
                Collect 1/2 pork
              </Button>
            )}
            {this.props.field.contents[0].name === "Pig" && (
              <Button onClick={() => this.getMeat("quarterPork")}>
                Collect 1/4 pork
              </Button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
               <div className="AnimalHunger">
               <p>
                   Avg Health: {this.animalHealth()}
                 </p>
                 <p>
                   Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <Button onClick={() => this.getMeat("crocodile")}>
                Collect crocodile
              </Button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <Button onClick={() => this.getMeat("halfCrocodile")}>
                Collect 1/2 crocodile
              </Button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <Button onClick={() => this.getMeat("quarterCrocodile")}>
                Collect 1/4 crocodile
              </Button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <div className="AnimalHunger">
              <p>
                  Avg Health: {this.animalHealth()}
                </p>
                <p>
                  Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <Button onClick={() => this.getMeat("ostrich")}>
                Collect ostrich
              </Button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <Button onClick={() => this.getMeat("halfOstrich")}>
                Collect 1/2 ostrich
              </Button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <Button onClick={() => this.getMeat("quarterOstrich")}>
                Collect 1/4 ostrich
              </Button>
            )}
            {this.props.field.contents[0].name === "Salmon" && (
              <div className="AnimalHunger">
              <p>
                  Avg Health: {this.animalHealth()}
                </p>
                <p>
                  Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Salmon" && (
              <Button onClick={() => this.getMeat("salmon")}>
                Collect salmon
              </Button>
            )}
            {this.props.field.contents[0].name === "Salmon" && (
              <Button onClick={() => this.getMeat("halfSalmon")}>
                Collect 1/2 salmon
              </Button>
            )}
            {this.props.field.contents[0].name === "Salmon" && (
              <Button onClick={() => this.getMeat("quarterSalmon")}>
                Collect 1/4 salmon
              </Button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <div className="AnimalHunger">
              <p>
                  Avg Health: {this.animalHealth()}
                </p>
                <p>
                  Avg Hunger: {this.animalHunger()}   </p>
                <p>Average Hunger: {this.animalHunger()}</p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <Button onClick={() => this.getMeat("duck")}>Collect duck</Button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <Button onClick={() => this.getMeat("halfDuck")}>
                Collect 1/2 duck
              </Button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <Button onClick={() => this.getMeat("quarterDuck")}>
                Collect 1/4 duck
              </Button>
            )}
            {this.props.field.contents[0].name === "Goose" && (
               <div className="AnimalHunger">
               <p>
                   Avg Health: {this.animalHealth()}
                 </p>
                 <p>
                   Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Goose" && (
              <Button onClick={() => this.getMeat("goose")}>
                Collect goose
              </Button>
            )}
            {this.props.field.contents[0].name === "Goose" && (
              <Button onClick={() => this.getMeat("halfGoose")}>
                Collect 1/2 goose
              </Button>
            )}
            {this.props.field.contents[0].name === "Goose" && (
              <Button onClick={() => this.getMeat("quarterGoose")}>
                Collect 1/4 goose
              </Button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <div className="AnimalHunger">
              <p>
                  Avg Health: {this.animalHealth()}
                </p>
                <p>
                  Avg Hunger: {this.animalHunger()}   </p>
                <div className="AnimalsHungry">
                  {this.animalHunger() > 4.8 ? (
                    <p>Feed the {this.props.field.contents[0].name}s</p>
                  ):  (
                    <p />
                  )}
                </div>
              </div>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <Button onClick={() => this.getMeat("llama")}>
                Collect llama
              </Button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <Button onClick={() => this.getMeat("halfLlama")}>
                Collect 1/2 llama
              </Button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <Button onClick={() => this.getMeat("quarterLlama")}>
                Collect 1/4 llama
              </Button>
            )}
            {this.props.field.contents[0].name === "Cow" && (
              <Button onClick={() => this.getDairy("milk")}>
                Collect milk
              </Button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <Button onClick={() => this.getDairy("eggs")}>
                Collect eggs
              </Button>
            )}
            {this.props.field.contents[0].name === "Crocodile" && (
              <Button onClick={() => this.getDairy("crocEggs")}>
                Collect Crocodile eggs
              </Button>
            )}
            {this.props.field.contents[0].name === "Ostrich" && (
              <Button onClick={() => this.getDairy("ostrichEggs")}>
                Collect Ostrich eggs
              </Button>
            )}
            {this.props.field.contents[0].name === "Duck" && (
              <Button onClick={() => this.getDairy("duckEggs")}>
                Collect Duck eggs
              </Button>
            )}
            {this.props.field.contents[0].name === "Goose" && (
              <Button onClick={() => this.getDairy("gooseEggs")}>
                Collect Goose eggs
              </Button>
            )}
            {this.props.field.contents[0].name === "Cabbage" && (
              <div className="CropStats">
                <p>Average Cabbage age: {this.cropAge()} days</p>
                {this.cropAge() > 70 ? (
                  <div className="CropStatsReady">
                    <p>
                      Cabbages are ready to be harvested
                      <Button onClick={() => this.getCrops("cabbages")}>
                        Collect Cabbages
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Cabbages are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Carrot" && (
              <div className="CropStats">
                <p>Average Carrot age: {this.cropAge()} days</p>
                {this.cropAge() > 80 ? (
                  <div className="CropStatsReady">
                    <p>
                      Carrots are ready to be harvested
                      <Button onClick={() => this.getCrops("carrots")}>
                        Collect Carrots
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Carrots are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Kale" && (
              <div className="CropStats">
                <p>Average Kale age: {this.cropAge()} days</p>
                {this.cropAge() > 60 ? (
                  <div className="CropStatsReady">
                    <p>
                      Kales are ready to be harvested
                      <Button onClick={() => this.getCrops("kales")}>
                        Collect Kales
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Kales are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Lettuce" && (
              <div className="CropStats">
                <p>Average Lettuce age: {this.cropAge()} days</p>
                {this.cropAge() > 55 ? (
                  <div className="CropStatsReady">
                    <p>
                      Lettuces are ready to be harvested
                      <Button onClick={() => this.getCrops("lettuces")}>
                        Collect Lettuces
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Lettuces are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Pea" && (
              <div className="CropStats">
                <p>Average Pea age: {this.cropAge()} days</p>
                {this.cropAge() > 42 ? (
                  <div className="CropStatsReady">
                    <p>
                      Peas are ready to be harvested
                      <Button onClick={() => this.getCrops("peas")}>
                        Collect Peas
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Peas are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Potato" && (
              <div className="CropStats">
                <p>Average Potato age: {this.cropAge()} days</p>
                {this.cropAge() > 84 ? (
                  <div className="CropStatsReady">
                    <p>
                      Potatoes are ready to be harvested
                      <Button onClick={() => this.getCrops("potatoes")}>
                        Collect Potatoes
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Potatoes are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Pumpkin" && (
              <div className="CropStats">
                <p>Average Pumpkin age: {this.cropAge()} days</p>
                {this.cropAge() > 120 ? (
                  <div className="CropStatsReady">
                    <p>
                      Pumpkins are ready to be harvested
                      <Button onClick={() => this.getCrops("pumpkins")}>
                        Collect Pumpkins
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Pumpkins are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Rapeseed" && (
              <div className="CropStats">
                <p>Average Rapeseed age: {this.cropAge()} days</p>
                {this.cropAge() > 60 ? (
                  <div className="CropStatsReady">
                    <p>
                      Rapeseeds are ready to be harvested
                      <Button onClick={() => this.getCrops("rapeseeds")}>
                        Collect Rapeseeds
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Rapeseeds are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Sugarbeet" && (
              <div className="CropStats">
                <p>Average Sugarbeet age: {this.cropAge()} days</p>
                {this.cropAge() > 90 ? (
                  <div className="CropStatsReady">
                    <p>
                      Sugarbeets are ready to be harvested
                      <Button onClick={() => this.getCrops("sugarbeets")}>
                        Collect Sugarbeets
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Sugarbeets are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Wheat" && (
              <div className="CropStats">
                <p>Average Wheat age: {this.cropAge()} days</p>
                {this.cropAge() > 250 ? (
                  <div className="CropStatsReady">
                    <p>
                      Wheats are ready to be harvested
                      <Button onClick={() => this.getCrops("wheats")}>
                        Collect Wheats
                      </Button>
                    </p>
                  </div>
                ):  (
                  <p>Wheats are growing and cannot be harvested yet</p>
                )}
              </div>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <Button onClick={() => this.getMisc("wool")}>Collect wool</Button>
            )}
            {this.props.field.contents[0].name === "Llama" && (
              <Button onClick={() => this.getMisc("llamaWool")}>
                Collect llamaWool
              </Button>
            )}
            {this.props.field.contents[0].name === "GasGenerator" && (
              <Button onClick={() => this.getMisc("greenGas")}>
                Collect green gas
              </Button>
            )}
            {this.props.field.contents[0].name === "SolarPanel" && (
              <Button onClick={() => this.getMisc("solarPower")}>
                Collect solar power
              </Button>
            )}
            {this.props.field.contents[0].name === "GasGenerator" && (
              <Button onClick={() => this.getMisc("gasGenerator")}>
                Recycle gasGenerators
              </Button>
            )}
            {this.props.field.contents[0].name === "SolarPanel" && (
              <Button onClick={() => this.getMisc("solarPanel")}>
                Recycle solarPanels
              </Button>
            )}
          </p>
        )}
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <Button
                  letiant="primary"
                  onClick={this.handleShow}
                  style={{ marginTop: "0.8rem" }}
                >
                  Examine {item.name}
                </Button>
                <>
                  <Modal
                    backdrop="static"
                    show={this.state.show}
                    aria-labelledby="field-modal"
                  >
                    <Modal.Header>
                      <Modal.Title id="field-modal">
                        <span role="img" aria-label="Tractor">
                          🚜
                        </span>{" "}
                        You are examining a {item.name}{" "}
                        <span role="img" aria-label="Tractor">
                          🚜
                        </span>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h3>
                        <img src={item.imgUrl} alt={item.name} /> {item.name}
                      </h3>
                      <dl>
                        <dt>
                          <h3>
                            <img
                              src="/img/twtr/health.png"
                              id="health"
                              alt="health"
                            />{" "}
                            Health: {item.health.toFixed(2)}
                          </h3>
                        </dt>
                        <dt>
                          <h3>
                            <img
                              src="/img/twtr/hunger.png"
                              id="hunger"
                              alt="hunger"
                            />{" "}
                            Hunger: {item.hunger.toFixed(2)}
                          </h3>
                        </dt>
                      </dl>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        letiant="secondary"
                        onClick={this.handleClose}
                        style={{
                          marginTop: "2rem",
                          backgroundColor: "#37474f",
                        }}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </div>
            )}
          </>
        ))}
      </div>
    );
  }
}

export default FieldDashboard;
