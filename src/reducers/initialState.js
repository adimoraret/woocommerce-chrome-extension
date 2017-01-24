import config from '../config/config';

export default {
  resources: generateResources(),
  modal: {
      visible: false,
      resourceId: -1
  }
};

function buildResourceItem(item){
  let newItem = Object.assign({}, item);
  newItem.list.items = [];
  newItem.list.visibleLoader = true;
  newItem.list.total = 0;
  newItem.list.page = 1;
  newItem.list.appliedFilter = {filterType: null, filterValue: null, searchText: null};
  newItem.list.appliedSort = {sortBy: null, direction: 0};
  newItem.view.item = {};
  newItem.view.visibleLoader = true;  
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