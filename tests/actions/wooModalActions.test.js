import expect from 'expect';
import * as types from '../../src/actions/actionTypes';
import * as sut from '../../src/actions/wooModalActions';

describe('Modal Actions', () => {
    describe("Open Modal", () => {
      it('should create a OPEN_MODAL action for a resourceId', () => {
        const expectedAction = {
          type: types.MODAL_ACTION.OPEN, 
          resourceId:1
        };
        const action = sut.openModal(1);
        expect(action).toEqual(expectedAction);        
      });
    });
    describe("Close Modal", () => {
      it('should create a CLOSE_MODAL action', () => {
        const expectedAction = {
          type: types.MODAL_ACTION.CLOSE 
        };
        const action = sut.closeModal();
        expect(action).toEqual(expectedAction);        
      });
    });    
});


