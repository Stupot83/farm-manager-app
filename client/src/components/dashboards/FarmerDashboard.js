import React, { Component } from 'react';
import './FarmerDashboard.css'

class FarmerDashboard extends Component {

  render() {
    return (
      <div className="FarmerDashboard">
        <dl>
          <dt>Budget</dt><dd>{this.props.farmer.budget}</dd>

          {this.props.farmer.myFarm && (<>
            <dt>Cows</dt><dd>{this.props.farmer.myFarm.cows.total} units</dd>
            <dt>Beef</dt><dd>{this.props.farmer.myFarm.beef.total} kg</dd>
            <dt>Milk</dt><dd>{this.props.farmer.myFarm.milk.total} pints</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Sheep</dt><dd>{this.props.farmer.myFarm.sheep.total} units</dd>
            <dt>Lamb</dt><dd>{this.props.farmer.myFarm.lamb.total} kg</dd>
            <dt>Wool</dt><dd>{this.props.farmer.myFarm.wool.total} bales</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Chickens</dt><dd>{this.props.farmer.myFarm.chickens.total} units</dd>
            <dt>Chicken</dt><dd>{this.props.farmer.myFarm.chicken.total} kg</dd>
            <dt>Eggs</dt><dd>{this.props.farmer.myFarm.eggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Pigs</dt><dd>{this.props.farmer.myFarm.pigs.total} units</dd>
            <dt>Pork</dt><dd>{this.props.farmer.myFarm.pork.total} kg</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Crocodiles</dt><dd>{this.props.farmer.myFarm.crocodiles.total} units</dd>
            <dt>Crocodile</dt><dd>{this.props.farmer.myFarm.crocodile.total} kg</dd>
            <dt>CrocEggs</dt><dd>{this.props.farmer.myFarm.crocEggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Ostriches</dt><dd>{this.props.farmer.myFarm.ostriches.total} units</dd>
            <dt>Ostrich</dt><dd>{this.props.farmer.myFarm.ostrich.total} kg</dd>
            <dt>OstrichEggs</dt><dd>{this.props.farmer.myFarm.ostrichEggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Salmons</dt><dd>{this.props.farmer.myFarm.salmons.total} units</dd>
            <dt>Salmon</dt><dd>{this.props.farmer.myFarm.salmon.total} kg</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Ducks</dt><dd>{this.props.farmer.myFarm.ducks.total} units</dd>
            <dt>Duck</dt><dd>{this.props.farmer.myFarm.duck.total} kg</dd>
            <dt>DuckEggs</dt><dd>{this.props.farmer.myFarm.duckEggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Geese</dt><dd>{this.props.farmer.myFarm.geese.total} units</dd>
            <dt>Goose</dt><dd>{this.props.farmer.myFarm.goose.total} kg</dd>
            <dt>GooseEggs</dt><dd>{this.props.farmer.myFarm.gooseEggs.total} boxes</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Llamas</dt><dd>{this.props.farmer.myFarm.llamas.total} units</dd>
            <dt>Llama</dt><dd>{this.props.farmer.myFarm.llama.total} kg</dd>
            <dt>LlamaWool</dt><dd>{this.props.farmer.myFarm.llamaWool.total} bales</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>Straw</dt><dd>{this.props.farmer.myFarm.straw.total} bales</dd>
            <dt>Corn</dt><dd>{this.props.farmer.myFarm.corn.total} bags</dd>
            <dt>Fish</dt><dd>{this.props.farmer.myFarm.fish.total} bags</dd>
            <dt>FishFood</dt><dd>{this.props.farmer.myFarm.fishFood.total} bags</dd>
            <dt>Seeds</dt><dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>
          </>
          )}

          {this.props.farmer.myFarm && (<>
            <dt>GreenGas</dt><dd>{this.props.farmer.myFarm.greenGas.total} units</dd>
            <dt>SolarPanels</dt><dd>{this.props.farmer.myFarm.solarPanels.total} kg</dd>
          </>
          )}
        </dl>
      </div>
    )
  }
}

export default FarmerDashboard;