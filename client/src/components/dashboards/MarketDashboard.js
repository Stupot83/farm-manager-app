import React, { Component } from "react";
import CryptoCard from "./CryptoCard";
import { Player, ControlBar } from "video-react";
import Song from "../../music/Pasture Road.mp3";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import "./MarketDashboard.css";

const bitcoinData = {
  name: "Bitcoin",
  symbol: "BTC",
  image: "/img/twtr/bitcoin.png",
};

const bitcoincashData = {
  name: "Bit Cash",
  symbol: "BCH",
  image: "/img/twtr/bitcoincash.png",
};

const ethereumData = {
  name: "Ethereum",
  symbol: "ETH",
  image: "/img/twtr/ethereum.png",
};

const dashData = {
  name: "Dash",
  symbol: "DASH",
  image: "/img/twtr/dash.png",
};

const litecoinData = {
  name: "Litecoin",
  symbol: "LTC",
  image: "/img/twtr/litecoin.png",
};

const bitcoinsvData = {
  name: "Bit SV",
  symbol: "BSV",
  image: "/img/twtr/bitcoinsv.png",
};

const moneroData = {
  name: "Monero",
  symbol: "XMR",
  image: "/img/twtr/monero.png",
};

const zcashData = {
  name: "ZCash",
  symbol: "ZEC",
  image: "/img/twtr/zcash.png",
};

class MarketDashboard extends Component {
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

  buyAnimal(animal) {
    switch (animal) {
      case "cow":
        if (
          this.props.market.currentFarmer.budget > this.props.market.pricePerCow
        ) {
          this.props.market.currentFarmer.myFarm.cows.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerCow;
        }
        break;

      case "sheep":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pricePerSheep
        ) {
          this.props.market.currentFarmer.myFarm.sheep.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerSheep;
        }
        break;

      case "chicken":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pricePerChicken
        ) {
          this.props.market.currentFarmer.myFarm.chickens.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerChicken;
        }
        break;

      case "pig":
        if (
          this.props.market.currentFarmer.budget > this.props.market.pricePerPig
        ) {
          this.props.market.currentFarmer.myFarm.pigs.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerPig;
        }
        break;

      case "crocodile":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pricePerCrocodile
        ) {
          this.props.market.currentFarmer.myFarm.crocodiles.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerCrocodile;
        }
        break;

      case "ostrich":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pricePerOstrich
        ) {
          this.props.market.currentFarmer.myFarm.ostriches.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerOstrich;
        }
        break;

      case "salmon":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pricePerSalmon
        ) {
          this.props.market.currentFarmer.myFarm.salmons.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerSalmon;
        }
        break;

      case "duck":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pricePerDuck
        ) {
          this.props.market.currentFarmer.myFarm.ducks.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerDuck;
        }
        break;

      case "goose":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pricePerGoose
        ) {
          this.props.market.currentFarmer.myFarm.geese.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerGoose;
        }
        break;

      case "llama":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pricePerLlama
        ) {
          this.props.market.currentFarmer.myFarm.llamas.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pricePerLlama;
        }
        break;

      default:
    }
  }

  buyFeed(feed) {
    switch (feed) {
      case "straw":
        if (
          this.props.market.currentFarmer.budget > this.props.market.strawPrice
        ) {
          this.props.market.currentFarmer.myFarm.straw.total += 100;
          let unit = 100;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.strawPrice;
        }
        break;

      case "corn":
        if (
          this.props.market.currentFarmer.budget > this.props.market.cornPrice
        ) {
          this.props.market.currentFarmer.myFarm.corn.total += 100;
          let unit = 100;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.cornPrice;
        }
        break;

      case "fish":
        if (
          this.props.market.currentFarmer.budget > this.props.market.fishPrice
        ) {
          this.props.market.currentFarmer.myFarm.fish.total += 100;
          let unit = 100;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.fishPrice;
        }
        break;

      case "fishFood":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.fishFoodPrice
        ) {
          this.props.market.currentFarmer.myFarm.fishFood.total += 100;
          let unit = 100;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.fishFoodPrice;
        }
        break;

      case "seeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.grassSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.seeds.total += 100;
          let unit = 100;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.grassSeedPrice;
        }
        break;

      default:
    }
  }

  buySeeds(seeds) {
    switch (seeds) {
      case "cabbageSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.cabbageSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.cabbageSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.cabbageSeedPrice;
        }
        break;

      case "carrotSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.carrotSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.carrotSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.carrotSeedPrice;
        }
        break;

      case "kaleSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.kaleSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.kaleSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.kaleSeedPrice;
        }
        break;

      case "lettuceSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.lettuceSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.lettuceSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.lettuceSeedPrice;
        }
        break;

      case "peaSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.peaSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.peaSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.peaSeedPrice;
        }
        break;

      case "potatoSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.potatoSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.potatoSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.potatoSeedPrice;
        }
        break;

      case "pumpkinSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.pumpkinSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.pumpkinSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.pumpkinSeedPrice;
        }
        break;

      case "rapeseedSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.rapeseedSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.rapeseedSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.rapeseedSeedPrice;
        }
        break;

      case "sugarbeetSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.sugarbeetSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.sugarbeetSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.sugarbeetSeedPrice;
        }
        break;

      case "wheatSeeds":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.wheatSeedPrice
        ) {
          this.props.market.currentFarmer.myFarm.wheatSeeds.total += 1;
          const unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.wheatSeedPrice;
        }
        break;

      default:
    }
  }

  buyTech(tech) {
    switch (tech) {
      case "gasGenerators":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.gasGeneratorPrice
        ) {
          this.props.market.currentFarmer.myFarm.gasGenerators.total += 1;
          let unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.gasGeneratorPrice;
        }
        break;

      case "solarPanels":
        if (
          this.props.market.currentFarmer.budget >
          this.props.market.solarPanelPrice
        ) {
          this.props.market.currentFarmer.myFarm.solarPanels.total += 1;
          let unit = 1;
          this.props.market.currentFarmer.budget -=
            unit * this.props.market.solarPanelPrice;
        }
        break;

      default:
    }
  }

  sellMeat(meat) {
    switch (meat) {
      case "beef":
        this.props.market.currentFarmer.budget +=
          this.props.market.beefPrice *
          this.props.market.currentFarmer.myFarm.beef.total;
        this.props.market.currentFarmer.myFarm.beef.total = 0;
        break;

      case "lamb":
        this.props.market.currentFarmer.budget +=
          this.props.market.lambPrice *
          this.props.market.currentFarmer.myFarm.lamb.total;
        this.props.market.currentFarmer.myFarm.lamb.total = 0;
        break;

      case "chicken":
        this.props.market.currentFarmer.budget +=
          this.props.market.chickenPrice *
          this.props.market.currentFarmer.myFarm.chicken.total;
        this.props.market.currentFarmer.myFarm.chicken.total = 0;
        break;

      case "pork":
        this.props.market.currentFarmer.budget +=
          this.props.market.porkPrice *
          this.props.market.currentFarmer.myFarm.pork.total;
        this.props.market.currentFarmer.myFarm.pork.total = 0;
        break;

      case "crocodile":
        this.props.market.currentFarmer.budget +=
          this.props.market.crocodilePrice *
          this.props.market.currentFarmer.myFarm.crocodile.total;
        this.props.market.currentFarmer.myFarm.crocodile.total = 0;
        break;

      case "ostrich":
        this.props.market.currentFarmer.budget +=
          this.props.market.ostrichPrice *
          this.props.market.currentFarmer.myFarm.ostrich.total;
        this.props.market.currentFarmer.myFarm.ostrich.total = 0;
        break;

      case "salmon":
        this.props.market.currentFarmer.budget +=
          this.props.market.salmonPrice *
          this.props.market.currentFarmer.myFarm.salmon.total;
        this.props.market.currentFarmer.myFarm.salmon.total = 0;
        break;

      case "duck":
        this.props.market.currentFarmer.budget +=
          this.props.market.duckPrice *
          this.props.market.currentFarmer.myFarm.duck.total;
        this.props.market.currentFarmer.myFarm.duck.total = 0;
        break;

      case "goose":
        this.props.market.currentFarmer.budget +=
          this.props.market.goosePrice *
          this.props.market.currentFarmer.myFarm.goose.total;
        this.props.market.currentFarmer.myFarm.goose.total = 0;
        break;

      case "llama":
        this.props.market.currentFarmer.budget +=
          this.props.market.llamaPrice *
          this.props.market.currentFarmer.myFarm.llama.total;
        this.props.market.currentFarmer.myFarm.llama.total = 0;
        break;

      default:
    }
  }

  sellDairy(dairy) {
    switch (dairy) {
      case "milk":
        this.props.market.currentFarmer.budget +=
          this.props.market.milkPrice *
          this.props.market.currentFarmer.myFarm.milk.total;
        this.props.market.currentFarmer.myFarm.milk.total = 0;
        break;

      case "eggs":
        this.props.market.currentFarmer.budget +=
          this.props.market.eggsPrice *
          this.props.market.currentFarmer.myFarm.eggs.total;
        this.props.market.currentFarmer.myFarm.eggs.total = 0;
        break;

      case "crocEggs":
        this.props.market.currentFarmer.budget +=
          this.props.market.crocEggsPrice *
          this.props.market.currentFarmer.myFarm.crocEggs.total;
        this.props.market.currentFarmer.myFarm.crocEggs.total = 0;
        break;

      case "ostrichEggs":
        this.props.market.currentFarmer.budget +=
          this.props.market.ostrichEggsPrice *
          this.props.market.currentFarmer.myFarm.ostrichEggs.total;
        this.props.market.currentFarmer.myFarm.ostrichEggs.total = 0;
        break;

      case "duckEggs":
        this.props.market.currentFarmer.budget +=
          this.props.market.duckEggsPrice *
          this.props.market.currentFarmer.myFarm.duckEggs.total;
        this.props.market.currentFarmer.myFarm.duckEggs.total = 0;
        break;

      case "gooseEggs":
        this.props.market.currentFarmer.budget +=
          this.props.market.gooseEggsPrice *
          this.props.market.currentFarmer.myFarm.gooseEggs.total;
        this.props.market.currentFarmer.myFarm.gooseEggs.total = 0;
        break;

      default:
    }
  }

  sellCrop(crop) {
    switch (crop) {
      case "cabbage":
        this.props.market.currentFarmer.budget +=
          this.props.market.cabbagePrice *
          this.props.market.currentFarmer.myFarm.cabbage.total;
        this.props.market.currentFarmer.myFarm.cabbage.total = 0;
        break;

      case "carrot":
        this.props.market.currentFarmer.budget +=
          this.props.market.carrotPrice *
          this.props.market.currentFarmer.myFarm.carrot.total;
        this.props.market.currentFarmer.myFarm.carrot.total = 0;
        break;

      case "kale":
        this.props.market.currentFarmer.budget +=
          this.props.market.kalePrice *
          this.props.market.currentFarmer.myFarm.kale.total;
        this.props.market.currentFarmer.myFarm.kale.total = 0;
        break;

      case "lettuce":
        this.props.market.currentFarmer.budget +=
          this.props.market.lettucePrice *
          this.props.market.currentFarmer.myFarm.lettuce.total;
        this.props.market.currentFarmer.myFarm.lettuce.total = 0;
        break;

      case "pea":
        this.props.market.currentFarmer.budget +=
          this.props.market.peaPrice *
          this.props.market.currentFarmer.myFarm.pea.total;
        this.props.market.currentFarmer.myFarm.pea.total = 0;
        break;

      case "potato":
        this.props.market.currentFarmer.budget +=
          this.props.market.potatoPrice *
          this.props.market.currentFarmer.myFarm.potato.total;
        this.props.market.currentFarmer.myFarm.potato.total = 0;
        break;

      case "pumpkin":
        this.props.market.currentFarmer.budget +=
          this.props.market.pumpkinPrice *
          this.props.market.currentFarmer.myFarm.pumpkin.total;
        this.props.market.currentFarmer.myFarm.pumpkins.total = 0;
        break;

      case "rapeseed":
        this.props.market.currentFarmer.budget +=
          this.props.market.rapeseedPrice *
          this.props.market.currentFarmer.myFarm.rapeseed.total;
        this.props.market.currentFarmer.myFarm.rapeseeds.total = 0;
        break;

      case "sugarbeet":
        this.props.market.currentFarmer.budget +=
          this.props.market.sugarbeetPrice *
          this.props.market.currentFarmer.myFarm.sugarbeet.total;
        this.props.market.currentFarmer.myFarm.sugarbeets.total = 0;
        break;

      case "wheat":
        this.props.market.currentFarmer.budget +=
          this.props.market.wheatPrice *
          this.props.market.currentFarmer.myFarm.wheat.total;
        this.props.market.currentFarmer.myFarm.wheat.total = 0;
        break;

      default:
    }
  }

  sellMisc(misc) {
    switch (misc) {
      case "wool":
        this.props.market.currentFarmer.budget +=
          this.props.market.woolPrice *
          this.props.market.currentFarmer.myFarm.wool.total;
        this.props.market.currentFarmer.myFarm.wool.total = 0;
        break;

      case "llamaWool":
        this.props.market.currentFarmer.budget +=
          this.props.market.llamaWoolPrice *
          this.props.market.currentFarmer.myFarm.llamaWool.total;
        this.props.market.currentFarmer.myFarm.llamaWool.total = 0;
        break;

      case "greenGas":
        this.props.market.currentFarmer.budget +=
          this.props.market.greenGasPrice *
          this.props.market.currentFarmer.myFarm.greenGas.total;
        this.props.market.currentFarmer.myFarm.greenGas.total = 0;
        break;

      case "solarPower":
        this.props.market.currentFarmer.budget +=
          this.props.market.solarPowerPrice *
          this.props.market.currentFarmer.myFarm.solarPower.total;
        this.props.market.currentFarmer.myFarm.solarPower.total = 0;
        break;

      case "gasGenerators":
        this.props.market.currentFarmer.budget +=
          this.props.market.gasGeneratorResalePrice *
          this.props.market.currentFarmer.myFarm.gasGenerators.total;
        this.props.market.currentFarmer.myFarm.gasGenerators.total = 0;
        break;

      case "solarPanels":
        this.props.market.currentFarmer.budget +=
          this.props.market.solarPanelResalePrice *
          this.props.market.currentFarmer.myFarm.solarPanels.total;
        this.props.market.currentFarmer.myFarm.solarPanels.total = 0;
        break;

      default:
    }
  }

  render() {
    return (
      <>
        <div className="MarketButton">
          <Button
            variant="primary"
            onClick={this.handleShow}
            style={{ margin: "0.8rem", marginLeft: "4rem" }}
          >
            Visit the Farmers Market
          </Button>
        </div>

        <Modal
          backdrop="static"
          show={this.state.show}
          aria-labelledby="market-modal"
        >
          <Modal.Header>
            <Modal.Title id="market-modal">
              <span role="img" aria-label="Tractor">
                🚜
              </span>{" "}
              Welcome to the Farmers Market{" "}
              <span role="img" aria-label="Tractor">
                🚜
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="MarketDashboard">
              <Tabs
                defaultActiveKey="buy animals"
                transition={false}
                id="buy-sell-tabs"
              >
                <Tab eventKey="buy animals" title="Buy Animals">
                  <dl className="market-list">
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("cow")}>
                          Buy cow for {this.props.market.pricePerCow}
                          <img src="img/twtr/1f404.png" alt="cow" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("sheep")}>
                          Buy sheep for {this.props.market.pricePerSheep}
                          <img src="img/twtr/1f411.png" alt="sheep" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("chicken")}>
                          Buy chicken for {this.props.market.pricePerChicken}
                          <img src="/img/twtr/1f414.png" alt="chicken" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("pig")}>
                          Buy pig for {this.props.market.pricePerPig}
                          <img src="/img/twtr/1f416.png" alt="pig" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("crocodile")}>
                          Buy crocodile for{" "}
                          {this.props.market.pricePerCrocodile}
                          <img src="/img/twtr/1f40a.png" alt="crocodile" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("ostrich")}>
                          Buy ostrich for {this.props.market.pricePerOstrich}
                          <img src="/img/twtr/1f426.png" alt="ostrich" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("salmon")}>
                          Buy salmon for {this.props.market.pricePerSalmon}
                          <img src="/img/twtr/1f41f.png" alt="salmon" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("duck")}>
                          Buy duck for {this.props.market.pricePerDuck}
                          <img src="/img/twtr/1f986.png" alt="duck" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("goose")}>
                          Buy goose for {this.props.market.pricePerGoose}
                          <img src="/img/twtr/1f9a2.png" alt="goose" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Animal">
                      <dd>
                        <Button onClick={() => this.buyAnimal("llama")}>
                          Buy llama for {this.props.market.pricePerLlama}
                          <img src="/img/twtr/1f999.png" alt="llama" />
                        </Button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="buy feed" title="Buy Feed">
                  <dl className="market-list">
                    <div className="Feed">
                      <dd>
                        <Button onClick={() => this.buyFeed("straw")}>
                          Buy straw for {this.props.market.strawPrice}
                          <img src="/img/twtr/straw.png" alt="straw" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Feed">
                      <dd>
                        <Button onClick={() => this.buyFeed("corn")}>
                          Buy corn for {this.props.market.cornPrice}
                          <img src="/img/twtr/1f37f.png" alt="corn" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Feed">
                      <dd>
                        <Button onClick={() => this.buyFeed("fish")}>
                          Buy fish for {this.props.market.fishPrice}
                          <img src="/img/twtr/1f41f.png" alt="fish" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Feed">
                      <dd>
                        <Button onClick={() => this.buyFeed("fishFood")}>
                          Buy fish food for {this.props.market.fishFoodPrice}
                          <img src="/img/twtr/fishfood.png" alt="fishFood" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Feed">
                      <dd>
                        <Button onClick={() => this.buyFeed("seeds")}>
                          Buy seeds for {this.props.market.grassSeedPrice}
                          <img src="/img/twtr/seeds.png" alt="seeds" />
                        </Button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="buy seeds" title="Buy Seeds">
                  <dl className="market-list">
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("cabbageSeeds")}>
                          Buy cabbageSeed for{" "}
                          {this.props.market.cabbageSeedPrice}
                          <img
                            src="/img/twtr/cabbageseed.png"
                            alt="cabbageseed"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("carrotSeeds")}>
                          Buy carrotSeed for {this.props.market.carrotSeedPrice}
                          <img
                            src="/img/twtr/carrotseed.png"
                            alt="carrotseed"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("kaleSeeds")}>
                          Buy kaleSeed for {this.props.market.kaleSeedPrice}
                          <img src="/img/twtr/kaleseed.png" alt="kaleseed" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("lettuceSeeds")}>
                          Buy lettuceSeed for{" "}
                          {this.props.market.lettuceSeedPrice}
                          <img
                            src="/img/twtr/lettuceseed.png"
                            alt="lettuceseed"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("peaSeeds")}>
                          Buy peaSeed for {this.props.market.peaSeedPrice}
                          <img src="/img/twtr/peaseed.png" alt="peaseed" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("potatoSeeds")}>
                          Buy potatoSeed for {this.props.market.potatoSeedPrice}
                          <img
                            src="/img/twtr/potatoseed.png"
                            alt="potatoseed"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("pumpkinSeeds")}>
                          Buy pumpkinSeed for{" "}
                          {this.props.market.pumpkinSeedPrice}
                          <img
                            src="/img/twtr/pumpkinseed.png"
                            alt="pumpkinseed"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("rapeseedSeeds")}>
                          Buy rapeseedSeed for{" "}
                          {this.props.market.rapeseedSeedPrice}
                          <img
                            src="/img/twtr/rapeseedseed.png"
                            alt="rapeseedseed"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("sugarbeetSeeds")}>
                          Buy sugarbeetSeed for{" "}
                          {this.props.market.sugarbeetSeedPrice}
                          <img
                            src="/img/twtr/sugarbeetseed.png"
                            alt="sugarbeetseed"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Seed">
                      <dd>
                        <Button onClick={() => this.buySeeds("wheatSeeds")}>
                          Buy wheatSeed for {this.props.market.wheatSeedPrice}
                          <img src="/img/twtr/wheatseed.png" alt="wheatseed" />
                        </Button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="buy tech" title="Buy Tech">
                  <dl className="market-list">
                    <div className="Tech">
                      <dd>
                        <Button onClick={() => this.buyTech("gasGenerators")}>
                          Buy generator for{" "}
                          {this.props.market.gasGeneratorPrice}
                          <img
                            src="/img/twtr/gasgenerator.png"
                            alt="gasgenerator"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Tech">
                      <dd>
                        <Button onClick={() => this.buyTech("solarPanels")}>
                          Buy solar panels for{" "}
                          {this.props.market.solarPanelPrice}
                          <img
                            src="/img/twtr/solarpanel.png"
                            alt="solarpanel"
                          />
                        </Button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="sell meat" title="Sell Meat">
                  <dl className="market-list">
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("beef")}>
                          Sell beef for {this.props.market.beefPrice}
                          <img src="/img/twtr/1f969.png" alt="pork" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("lamb")}>
                          Sell lamb for {this.props.market.lambPrice}
                          <img src="/img/twtr/1f356.png" alt="lamb" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("chicken")}>
                          Sell chicken for {this.props.market.chickenPrice}
                          <img src="/img/twtr/1f357.png" alt="chicken" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("pork")}>
                          Sell pork for {this.props.market.porkPrice}
                          <img src="/img/twtr/1f953.png" alt="pork" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("crocodile")}>
                          Sell crocodile for {this.props.market.crocodilePrice}
                          <img src="/img/twtr/1f969.png" alt="crocodile" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("ostrich")}>
                          Sell ostrich for {this.props.market.ostrichPrice}
                          <img src="/img/twtr/1f357.png" alt="ostrich" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("salmon")}>
                          Sell salmon for {this.props.market.salmonPrice}
                          <img src="/img/twtr/1f363.png" alt="salmon" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("duck")}>
                          Sell duck for {this.props.market.duckPrice}
                          <img src="/img/twtr/1f357.png" alt="duck" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("goose")}>
                          Sell goose for {this.props.market.salmonPrice}
                          <img src="/img/twtr/1f357.png" alt="goose" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Meat">
                      <dd>
                        <Button onClick={() => this.sellMeat("llama")}>
                          Sell llama for {this.props.market.llamaPrice}
                          <img src="/img/twtr/1f969.png" alt="llama" />
                        </Button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="sell dairy" title="Sell Dairy">
                  <dl className="market-list">
                    <div className="Dairy">
                      <dd>
                        <Button onClick={() => this.sellDairy("milk")}>
                          Sell milk for {this.props.market.milkPrice}
                          <img src="/img/twtr/1f95b.png" alt="milk" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dd>
                        <Button onClick={() => this.sellDairy("eggs")}>
                          Sell eggs for {this.props.market.eggsPrice}
                          <img src="/img/twtr/1f95a.png" alt="eggs" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dd>
                        <Button onClick={() => this.sellDairy("crocEggs")}>
                          Sell croc eggs for {this.props.market.crocEggsPrice}
                          <img src="/img/twtr/1f95a.png" alt="crocEggs" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dd>
                        <Button onClick={() => this.sellDairy("ostrichEggs")}>
                          Sell ostrich eggs for{" "}
                          {this.props.market.ostrichEggsPrice}
                          <img src="/img/twtr/1f95a.png" alt="ostrichEggs" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dd>
                        <Button onClick={() => this.sellDairy("duckEggs")}>
                          Sell duck eggs for {this.props.market.duckEggsPrice}
                          <img src="/img/twtr/1f95a.png" alt="duckEggs" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Dairy">
                      <dd>
                        <Button onClick={() => this.sellDairy("gooseEggs")}>
                          Sell goose eggs for {this.props.market.gooseEggsPrice}
                          <img src="/img/twtr/1f95a.png" alt="gooseEggs" />
                        </Button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="sell crops" title="Sell Crops">
                  <dl className="market-list">
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("cabbage")}>
                          Sell cabbage for {this.props.market.cabbagePrice}
                          <img src="/img/twtr/cabbage.png" alt="cabbage" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("carrot")}>
                          Sell carrot for {this.props.market.carrotPrice}
                          <img src="/img/twtr/carrot.png" alt="carrot" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("kale")}>
                          Sell kale for {this.props.market.kalePrice}
                          <img src="/img/twtr/kale.png" alt="kale" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("lettuce")}>
                          Sell lettuce for {this.props.market.lettucePrice}
                          <img src="/img/twtr/lettuce.png" alt="lettuce" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("pea")}>
                          Sell pea for {this.props.market.peaPrice}
                          <img src="/img/twtr/pea.png" alt="pea" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("potato")}>
                          Sell potato for {this.props.market.potatoPrice}
                          <img src="/img/twtr/potato.png" alt="potato" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("pumpkin")}>
                          Sell pumpkin for {this.props.market.pumpkinPrice}
                          <img src="/img/twtr/pumpkin.png" alt="pumpkin" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("rapeseed")}>
                          Sell rapeseed for {this.props.market.rapeseedPrice}
                          <img src="/img/twtr/rapeseed.png" alt="rapeseed" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellCrop("sugarbeet")}>
                          Sell sugarbeet for {this.props.market.sugarbeetPrice}
                          <img src="/img/twtr/sugarbeet.png" alt="sugarbeet" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Crop">
                      <dd>
                        <Button onClick={() => this.sellMisc("wheat")}>
                          Sell wheat for {this.props.market.wheatPrice}
                          <img src="/img/twtr/wheat.png" alt="wheat" />
                        </Button>
                      </dd>
                    </div>
                  </dl>
                </Tab>

                <Tab eventKey="sell misc" title="Sell Misc">
                  <dl className="market-list">
                    <div className="Misc">
                      <dd>
                        <Button onClick={() => this.sellMisc("wool")}>
                          Sell wool for {this.props.market.woolPrice}
                          <img src="/img/twtr/wool.png" alt="wool" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Misc">
                      <dd>
                        <Button onClick={() => this.sellMisc("llamaWool")}>
                          Sell llama wool for {this.props.market.llamaWoolPrice}
                          <img src="/img/twtr/wool.png" alt="llamaWool" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Misc">
                      <dd>
                        <Button onClick={() => this.sellMisc("greenGas")}>
                          Sell green gas for {this.props.market.greenGasPrice}
                          <img src="/img/twtr/greengas.png" alt="greengas" />
                        </Button>
                      </dd>
                    </div>
                    <div className="Misc">
                      <dd>
                        <Button onClick={() => this.sellMisc("solarPower")}>
                          Sell solar power for{" "}
                          {this.props.market.solarPowerPrice}
                          <img
                            src="/img/twtr/solarpower.png"
                            alt="solarpower"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Misc">
                      <dd>
                        <Button onClick={() => this.sellMisc("gasGenerators")}>
                          Sell generator for{" "}
                          {this.props.market.gasGeneratorResalePrice}
                          <img
                            src="/img/twtr/gasgenerator.png"
                            alt="gasgenerator"
                          />
                        </Button>
                      </dd>
                    </div>
                    <div className="Misc">
                      <dd>
                        <Button onClick={() => this.sellMisc("solarPanels")}>
                          Sell panels for{" "}
                          {this.props.market.solarPanelResalePrice}
                          <img
                            src="/img/twtr/solarpanel.png"
                            alt="solarpanel"
                          />
                        </Button>
                      </dd>
                    </div>
                  </dl>
                </Tab>
                <Tab eventKey="cryptoex" title="CryptoEx">
                  <div className="CardContainer">
                    <h2>Crypto Currency Exchange</h2>
                    <div className="CardDisplay">
                      <div className="CryptoCard">
                        <CryptoCard
                          name={bitcoinData.name}
                          symbol={bitcoinData.symbol}
                          logo={bitcoinData.image}
                        />
                      </div>
                      <div className="CryptoCard">
                        <CryptoCard
                          name={bitcoincashData.name}
                          symbol={bitcoincashData.symbol}
                          logo={bitcoincashData.image}
                        />
                      </div>
                      <div className="CryptoCard">
                        <CryptoCard
                          name={ethereumData.name}
                          symbol={ethereumData.symbol}
                          logo={ethereumData.image}
                        />
                      </div>
                      <div className="CryptoCard">
                        <CryptoCard
                          name={dashData.name}
                          symbol={dashData.symbol}
                          logo={dashData.image}
                        />
                      </div>
                      <div className="CryptoCard">
                        <CryptoCard
                          name={litecoinData.name}
                          symbol={litecoinData.symbol}
                          logo={litecoinData.image}
                        />
                      </div>
                      <div className="CryptoCard">
                        <CryptoCard
                          name={bitcoinsvData.name}
                          symbol={bitcoinsvData.symbol}
                          logo={bitcoinsvData.image}
                        />
                      </div>
                      <div className="CryptoCard">
                        <CryptoCard
                          name={moneroData.name}
                          symbol={moneroData.symbol}
                          logo={moneroData.image}
                        />
                      </div>
                      <div className="CryptoCard">
                        <CryptoCard
                          name={zcashData.name}
                          symbol={zcashData.symbol}
                          logo={zcashData.image}
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab style={{ display: "none" }}>
                  <div style={{ height: "100px", width: "100px" }}>
                    <Player ref="player" autoPlay loop>
                      <source src={Song} />
                      <ControlBar disableDefaultControls={true} />
                    </Player>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.handleClose}
              style={{ marginTop: "2rem", backgroundColor: "#37474f" }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={this.handleClose}
              style={{
                marginTop: "2rem",
                marginLeft: "2rem",
                backgroundColor: "#37474f",
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default MarketDashboard;
