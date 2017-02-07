import expect from 'expect';
import modalReducer from '../../src/reducers/modalReducer';
import * as modalAction  from '../../src/actions/wooModalActions';

describe('Modal Reducer', () => {
  it('should Open Modal when passed OPEN_MODAL', () => {
    const initialState = {
      visible: false,
      resourceId: -1
    };
    const action = modalAction.openModal(123);
    const newState = modalReducer(initialState, action);
    expect(newState.visible).toEqual(true);
    expect(newState.resourceId).toEqual(123);
  });

  it('should Close Modal when passed CLOSE_MODAL', () => {
    const initialState = {
      visible: true,
      resourceId: 982
    };
    const action = modalAction.closeModal();
    const newState = modalReducer(initialState, action);
    expect(newState.visible).toEqual(false);
    expect(newState.resourceId).toEqual(-1);
  });

  it ('should return default state when passing invalid action', () => {
    const initialState = {
      someInfo: "test"
    };
    const action = {type: "DUMMY_ACTTION"};
    const newState = modalReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});