import expect from 'expect';
import viewModalReducer from '../../src/reducers/viewModalReducer';
import * as modalAction  from '../../src/actions/wooModalActions';

describe('Modal Reducer', () => {
  it('should Open View Modal when passed OPEN_VIEW_MODAL', () => {
    const initialState = {
      visible: false,
      resourceId: -1
    };
    const action = modalAction.openViewModal(123);
    const actual = viewModalReducer(initialState, action);
    expect(actual.visible).toEqual(true);
    expect(actual.resourceId).toEqual(123);
  });

  it('should Close Modal when passed CLOSE_VIEW_MODAL', () => {
    const initialState = {
      visible: true,
      resourceId: 982
    };
    const action = modalAction.closeViewModal();
    const actual = viewModalReducer(initialState, action);
    expect(actual.visible).toEqual(false);
    expect(actual.resourceId).toEqual(-1);
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