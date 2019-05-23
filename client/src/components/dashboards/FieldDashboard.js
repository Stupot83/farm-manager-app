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

  getMeat(meat) {
    const arrmid = this.props.field.contents.length / 2;
    const arrqtr = this.props.field.contents.length / 4;

    switch (meat) {
      case "beef":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldBeef();
        }
        this.props.field.contents.pop();
        break;

      case "halfBeef":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldBeef();
          this.props.field.contents.pop();
        }
        break;

      case "quarterBeef":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldBeef();
          this.props.field.contents.pop();
        }
        break;

      case "lamb":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLamb();
        }
        this.props.field.contents.pop();
        break;

      case "halfLamb":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldLamb();
          this.props.field.contents.pop();
        }
        break;

      case "quarterLamb":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldLamb();
          this.props.field.contents.pop();
        }
        break;

      case "chicken":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldChicken();
        }
        this.props.field.contents.pop();
        break;

      case "halfChicken":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldChicken();
          this.props.field.contents.pop();
        }
        break;

      case "quarterChicken":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldChicken();
          this.props.field.contents.pop();
        }
        break;

      case "pork":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldPork();
        }
        this.props.field.contents.pop();
        break;

      case "halfPork":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldPork();
          this.props.field.contents.pop();
        }
        break;

      case "quarterPork":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldPork();
          this.props.field.contents.pop();
        }
        break;

      case "crocodile":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCrocodile();
        }
        this.props.field.contents.pop();
        break;

      case "halfCrocodile":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldCrocodile();
          this.props.field.contents.pop();
        }
        break;

      case "quarterCrocodile":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldCrocodile();
          this.props.field.contents.pop();
        }
        break;

      case "ostrich":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldOstrich();
        }
        this.props.field.contents.pop();
        break;

      case "halfOstrich":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldOstrich();
          this.props.field.contents.pop();
        }
        break;

      case "quarterOstrich":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldOstrich();
          this.props.field.contents.pop();
        }
        break;

      case "salmon":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldSalmon();
        }
        this.props.field.contents.pop();
        break;

      case "halfSalmon":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldSalmon();
          this.props.field.contents.pop();
        }
        break;

      case "quarterSalmon":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldSalmon();
          this.props.field.contents.pop();
        }
        break;

      case "duck":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldDuck();
        }
        this.props.field.contents.pop();
        break;

      case "halfDuck":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldDuck();
          this.props.field.contents.pop();
        }
        break;

      case "quarterDuck":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldDuck();
          this.props.field.contents.pop();
        }
        break;

      case "goose":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGoose();
        }
        this.props.field.contents.pop();
        break;

      case "halfGoose":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldGoose();
          this.props.field.contents.pop();
        }
        break;

      case "quarterGoose":
        for (var i = 0; i < arrqtr; i++) {
          this.props.field.contents[i].yieldGoose();
          this.props.field.contents.pop();
        }
        break;

      case "llama":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLlama();
        }
        this.props.field.contents.pop();
        break;

      case "halfLlama":
        for (var i = 0; i < arrmid; i++) {
          this.props.field.contents[i].yieldLlama();
          this.props.field.contents.pop();
        }
        break;

      case "quarterLlama":
        for (var i = 0; i < arrqtr; i++) {
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
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldMilk();
        }
        break;

      case "eggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldEggs();
        }
        break;

      case "crocEggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCrocEggs();
        }
        break;

      case "ostrichEggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldOstrichEggs();
        }
        break;

      case "duckEggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldDuckEggs();
        }
        break;

      case "gooseEggs":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGooseEggs();
        }
        break;

      default:
    }
  }

  getCrops(crops) {
    switch (crops) {
      case "carrots":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldCarrot();
          this.props.field.contents.pop();
        }
        break;

      case "pumpkins":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldPumpkin();
          this.props.field.contents.pop();
        }
        break;

      case "wheats":
        for (var i = 0; i < this.props.field.contents.length; i++) {
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
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldWool();
        }
        break;

      case "llamaWool":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldLlamaWool();
        }
        break;

      case "greenGas":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGreenGas();
        }
        break;

      case "gasGenerator":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldGasGenerator();
          this.props.field.contents.pop();
        }
        break;

      case "solarPower":
        for (var i = 0; i < this.props.field.contents.length; i++) {
          this.props.field.contents[i].yieldSolarPower();
        }
        break;

      case "solarPanel":
        for (var i = 0; i < this.props.field.contents.length; i++) {
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
              This is a {this.props.field.contents[0].name} Area
              <br />
              (currently with {this.props.field.contents.length}{" "}
              {this.props.field.contents[0].name}s)
            </h5>

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
            {this.props.field.contents[0].name === "Carrot" && (
              <Button onClick={() => this.getCrops("carrots")}>
                Collect Carrots
              </Button>
            )}
            {this.props.field.contents[0].name === "Pumpkin" && (
              <Button onClick={() => this.getCrops("pumpkins")}>
                Collect Pumpkins
              </Button>
            )}
            {this.props.field.contents[0].name === "Wheat" && (
              <Button onClick={() => this.getCrops("wheats")}>
                Collect Wheats
              </Button>
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
                  variant="primary"
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
                        🚜 You are examining a {item.name} 🚜
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
                            Health: {item.health}
                          </h3>
                        </dt>
                        <dt>
                          <h3>
                            <img
                              src="/img/twtr/hunger.png"
                              id="hunger"
                              alt="hunger"
                            />{" "}
                            Hunger: {item.hunger}
                          </h3>
                        </dt>
                      </dl>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
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
