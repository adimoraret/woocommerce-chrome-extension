import config from '../config/config';

export function createEmptyResources(){
  let resources = [];
  config.resources.forEach(function(item) {
    const resourceItem = createEmptyResourceItem(item);
    resources.push(resourceItem);
  }, this);
  return resources;
}

export function createEmptyResourceList(){
  return {
    items: [],
    total: 0,
    page: 1,
    appliedFilter: {filterType: null, filterValue: null, searchText: null},
    appliedSort: {sortBy: null, direction: 0}
  };
}

export function createEmptyResourceView(){
  return {
    item: {}
  };
}

export function createEmptyResourceItem(item){
  let newItem = Object.assign({}, item);
  newItem.list = Object.assign({}, newItem.list, createEmptyResourceList());
  newItem.view = Object.assign({}, newItem.view, createEmptyResourceView());
  return newItem;
}