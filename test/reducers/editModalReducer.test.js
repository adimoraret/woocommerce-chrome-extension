import expect from 'expect';
import editModalReducer from '../../src/reducers/editModalReducer';
import * as modalAction  from '../../src/actions/wooModalActions';
import * as types from '../../src/actions/actionTypes';

describe('Edit Modal Reducer', () => {
  it('should Open Edit Modal when passed OPEN_EDIT_MODAL', () => {
    const initialState = {
      visible: false,
      resourceId: -1
    };
    const action = modalAction.openEditModal(123);
    const actual = editModalReducer(initialState, action);
    expect(actual.visible).toEqual(true);
    expect(actual.resourceId).toEqual(123);
  });

  it('should close Edit Modal when passed CLOSE_EDIT_MODAL', () => {
    const initialState = {
      visible: true,
      resourceId: 982
    };
    const action = modalAction.closeEditModal();
    const actual = editModalReducer(initialState, action);
    expect(actual.visible).toEqual(false);
    expect(actual.resourceId).toEqual(-1);
    expect(actual.item).toEqual({});
  });

  it('should Load Edit Modal Information when passed EDIT_MODAL_INFO_LOAD', () => {
    const initialState = {
      visible: false,
      resourceId: 982
    };
    const expected = {resourceId:123, item:{}};
    const action = {type: types.EDIT_MODAL_ACTION.LOAD, resource: expected};
    const actual = editModalReducer(initialState, action);
    expect(actual.visible).toEqual(true);
    expect(actual.resourceId).toEqual(expected.resourceId);
    expect(actual.item).toEqual(expected.item);
  });  

  it ('should return default state when passing invalid action', () => {
    const initialState = {
      someInfo: "test"
    };
    const action = {type: "DUMMY_ACTTION"};
    const actual = editModalReducer(initialState, action);
    expect(actual).toEqual(initialState);
  });
});