import * as resourceHelper from '../config/resourceHelper';

export default {
  resources: resourceHelper.createEmptyResources(),
  modal: {
    view: { 
      visible: false,
      resourceId: -1
    }
  }
};