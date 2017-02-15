import expect from 'expect';
import viewModalReducer from '../../src/reducers/viewModalReducer';
import * as modalAction  from '../../src/actions/wooModalActions';
import * as types from '../../src/actions/actionTypes';

describe('View Modal Reducer', () => {
  it('should Open View Modal when passed VIEW_MODAL_OPEN', () => {
    const initialState = {
      visible: false,
      resourceId: -1
    };
    const action = modalAction.openViewModal(123);
    const actual = viewModalReducer(initialState, action);
    expect(actual.visible).toEqual(true);
    expect(actual.resourceId).toEqual(123);
  });

  it('should Close View Modal when passed VIEW_MODAL_CLOSE', () => {
    const initialState = {
      visible: true,
      resourceId: 982
    };
    const action = modalAction.closeViewModal();
    const actual = viewModalReducer(initialState, action);
    expect(actual.visible).toEqual(false);
    expect(actual.resourceId).toEqual(-1);
    expect(actual.item).toEqual({});    
  });

  it('should Load View Modal Information when passed VIEW_MODAL_INFO_LOAD', () => {
    const initialState = {
      visible: false,
      resourceId: 982
    };
    const expected = {resourceId:123, item:{}};
    const action = {type: types.VIEW_MODAL_ACTION.LOAD, resource: expected};
    const actual = viewModalReducer(initialState, action);
    expect(actual.visible).toEqual(true);
    expect(actual.resourceId).toEqual(expected.resourceId);
    expect(actual.item).toEqual(expected.item);
  });  

  it ('should return default state when passing invalid action', () => {
    const initialState = {
      someInfo: "test"
    };
    const action = {type: "DUMMY_ACTTION"};
    const actual = viewModalReducer(initialState, action);
    expect(actual).toEqual(initialState);
  });
});