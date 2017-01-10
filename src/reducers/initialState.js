
import config from '../config/config';

export default {
  resources: generateResources(),
  modal: {
      visible: false,
      title: ""
  }
};

function buildResourceItem(item){
  let newItem = Object.assign({}, item);
  newItem.list.items = [];
  newItem.list.visibleLoader = true;
  return newItem;
}

function generateResources(){
  let resources = [];
  config.resources.forEach(function(item) {
    const resourceItem = buildResourceItem(item);
    resources.push(resourceItem);
  }, this);
  return resources;
}