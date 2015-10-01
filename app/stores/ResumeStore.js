import alt from '../alt';
import ResumeActions from '../actions/ResumeActions';

class ResumeStore {
  constructor() {
    this.bindActions(ResumeActions);
  }
}

export default alt.createStore(ResumeStore);
