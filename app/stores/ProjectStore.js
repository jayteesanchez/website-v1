import alt from '../alt';
import ProjectActions from '../actions/ProjectActions';

class ProjectStore {
  constructor() {
    this.bindActions(ProjectActions);
  }
}

export default alt.createStore(ProjectStore);
