import expect from 'expect';
import * as types from '../../src/actions/actionTypes';
import * as sut from '../../src/actions/wooModalActions';

describe('View Modal Actions', () => {
    describe("Open View Modal", () => {
      it('should create a OPEN_VIEW_MODAL action for a resourceId', () => {
        const expectedAction = {
          type: types.VIEW_MODAL_ACTION.OPEN, 
          resourceId:1
        };
        const actual = sut.openViewModal(1);
        expect(actual).toEqual(expectedAction);        
      });
    });
    describe("Close View Modal", () => {
      it('should create a CLOSE_VIEW_MODAL action', () => {
        const expectedAction = {
          type: types.VIEW_MODAL_ACTION.CLOSE 
        };
        const actual = sut.closeViewModal();
        expect(actual).toEqual(expectedAction);        
      });
    });
});

describe('Edit Modal Actions', () => {
    describe("Open Edit Modal", () => {
      it('should create a OPEN_EDIT_MODAL action for a resourceId', () => {
        const expectedAction = {
          type: types.EDIT_MODAL_ACTION.OPEN, 
          resourceId:1
        };
        const actual = sut.openEditModal(1);
        expect(actual).toEqual(expectedAction);        
      });
    });
    describe("Close Edit Modal", () => {
      it('should create a CLOSE_EDIT_MODAL action', () => {
        const expectedAction = {
          type: types.EDIT_MODAL_ACTION.CLOSE 
        };
        const actual = sut.closeEditModal();
        expect(actual).toEqual(expectedAction);        
      });
    });
});


