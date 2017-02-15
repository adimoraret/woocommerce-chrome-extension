import expect from 'expect';
import resourceReducer from '../../src/reducers/resourceReducer';
import * as modalAction  from '../../src/actions/wooResourceActions';
import * as mother from './mother';

describe('Resource Reducer', () => {
  
  it('should return empty resource list properties when passed PRODUCT_LIST_CLEAR', () => {
    const action = {type: "PRODUCT_LIST_CLEAR", resource: {visible: true}};
    const actual = resourceReducer(mother.RESOURCE_INITIAL_STATE, action);
    expect(actual[0].list.visibleLoader).toEqual(true);
    expect(actual[0].list.total).toEqual(0);
    expect(actual[0].list.page).toEqual(1);
    expect(actual[0].list.items).toEqual([]);
  });

  it('should return list of resources when passed PRODUCT_LIST_SUCCESS', () => {
    const action = {type: "PRODUCT_LIST_SUCCESS", resource: {
      rows: [{},{},{}],
      total: 3,
      page: 3,
      appliedFilter: {appliedFilter: "aaa"},
      appliedSort: {appliedSort: "bbb"}
    }};
    const actual = resourceReducer(mother.RESOURCE_INITIAL_STATE, action);
    expect(actual[0].list.visibleLoader).toEqual(false);
    expect(actual[0].list.items).toEqual(action.resource.rows);    
    expect(actual[0].list.total).toEqual(action.resource.total);
    expect(actual[0].list.page).toEqual(action.resource.page);
    expect(actual[0].list.appliedFilter).toEqual(action.resource.appliedFilter);
    expect(actual[0].list.appliedSort).toEqual(action.resource.appliedSort);    
  });
 
});