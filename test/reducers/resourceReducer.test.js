import expect from 'expect';
import resourceReducer from '../../src/reducers/resourceReducer';
import * as modalAction  from '../../src/actions/wooResourceActions';
import * as mother from './mother';

describe('Resource Reducer', () => {
  
  it('should return empty resource list properties when passed PRODUCT_LIST_CLEAR', () => {
    const action = {type: "PRODUCT_LIST_CLEAR", resource: {visible: true}};
    const newState = resourceReducer(mother.RESOURCE_INITIAL_STATE, action);
    expect(newState[0].list.visibleLoader).toEqual(true);
    expect(newState[0].list.total).toEqual(0);
    expect(newState[0].list.page).toEqual(1);
    expect(newState[0].list.items).toEqual([]);
  });

  it('should return list of resources when passed PRODUCT_LIST_SUCCESS', () => {
    const action = {type: "PRODUCT_LIST_SUCCESS", resource: {
      rows: [{},{},{}],
      total: 3,
      page: 3,
      appliedFilter: {appliedFilter: "aaa"},
      appliedSort: {appliedSort: "bbb"}
    }};
    const newState = resourceReducer(mother.RESOURCE_INITIAL_STATE, action);
    expect(newState[0].list.visibleLoader).toEqual(false);
    expect(newState[0].list.items).toEqual(action.resource.rows);    
    expect(newState[0].list.total).toEqual(action.resource.total);
    expect(newState[0].list.page).toEqual(action.resource.page);
    expect(newState[0].list.appliedFilter).toEqual(action.resource.appliedFilter);
    expect(newState[0].list.appliedSort).toEqual(action.resource.appliedSort);    
  });

  it('should return empty resource info when passed PRODUCT_INFO_CLEAR', () => {
    const action = {type: "PRODUCT_INFO_CLEAR", resource: null};
    const newState = resourceReducer(mother.RESOURCE_INITIAL_STATE, action);
    expect(newState[0].view.visibleLoader).toEqual(true);
    expect(newState[0].view.item).toEqual({});
  });

  it('should return resource item when passed PRODUCT_INFO_SUCCESS', () => {
    const action = {type: "PRODUCT_INFO_SUCCESS", resource: {
      item: {name: "Product1"},
    }};
    const newState = resourceReducer(mother.RESOURCE_INITIAL_STATE, action);
    expect(newState[0].view.visibleLoader).toEqual(false);
    expect(newState[0].view.item).toEqual({name: "Product1"});    
  });
 
});