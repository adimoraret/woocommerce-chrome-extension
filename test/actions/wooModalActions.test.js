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
        const actual = sut.openModal(1);
        expect(actual).toEqual(expectedAction);        
      });
    });
    describe("Close Modal", () => {
      it('should create a CLOSE_MODAL action', () => {
        const expectedAction = {
          type: types.MODAL_ACTION.CLOSE 
        };
        const actual = sut.closeModal();
        expect(actual).toEqual(expectedAction);        
      });
    });    
});


