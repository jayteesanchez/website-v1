import alt from '../alt';
import TechnologyActions from '../actions/TechnologyActions';

class TechnologyStore {
  constructor() {
    this.bindActions(TechnologyActions);
  }
}

export default alt.createStore(TechnologyStore);
