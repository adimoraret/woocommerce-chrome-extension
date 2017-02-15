import expect from 'expect';
import moxios from 'moxios';
import sinon from 'sinon';
import * as types from '../../src/actions/actionTypes';
import * as sut from '../../src/actions/wooModalActions';
import * as mother from './mother';

describe('View Modal Actions ->', () => {
    it('should create a VIEW_MODAL_OPEN action for a resourceId', () => {
      const expectedAction = {
        type: types.VIEW_MODAL_ACTION.OPEN, 
        resourceId:1
      };
      const actual = sut.openViewModal(1);
      expect(actual).toEqual(expectedAction);        
    });
    it('should create a VIEW_MODAL_CLOSE action', () => {
      const expectedAction = {
        type: types.VIEW_MODAL_ACTION.CLOSE 
      };
      const actual = sut.closeViewModal();
      expect(actual).toEqual(expectedAction);        
    });
});

describe('Edit Modal Actions ->', () => {
    it('should create a EDIT_MODAL_OPEN action for a resourceId', () => {
      const expectedAction = {
        type: types.EDIT_MODAL_ACTION.OPEN, 
        resourceId:1
      };
      const actual = sut.openEditModal(1);
      expect(actual).toEqual(expectedAction);        
    });
    it('should create a EDIT_MODAL_CLOSE action', () => {
      const expectedAction = {
        type: types.EDIT_MODAL_ACTION.CLOSE 
      };
      const actual = sut.closeEditModal();
      expect(actual).toEqual(expectedAction);        
    });
});

describe("Load Woo Resource View Modal ->", () => {

  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });

  it('should throw exception for invalid resource', (done) => {
    expect(()=>sut.loadWooResourceViewModal(-100,1)).toThrow("Invalid resource");
    done();
  });
  
  it('should throw 404 error message if the Load Resource Item endpoint is not found', (done) => {
    moxios.stubRequest(mother.PRODUCT_ITEM_URL, {
        status: 404
      });
    const errorThrown = sinon.spy();
    const dispatch = sinon.spy();
    sut.loadWooResourceViewModal(1,1)(dispatch)
      .catch(errorThrown);

    moxios.wait(function(){
      const actual = errorThrown.getCall(0).args[0].message;
      expect(actual).toEqual("Request failed with status code 404");
      expect(false).toEqual(dispatch.called);
      done();          
    });
  });

  it('should dispatch Load WooResource View Modal Success when loading Woo Resource item', (done) => {
    moxios.stubRequest(mother.PRODUCT_ITEM_URL, {
      status: 200,
      response: {}
    });
    const expected ={
      actionType : "VIEW_MODAL_INFO_LOAD",
      resource: {item: {}}
    };
    const dispatch = sinon.spy();
    
    sut.loadWooResourceViewModal(1,1)(dispatch);
    
    moxios.wait(function(){
      const actual = dispatch.getCall(0).args[0];
      expect(actual.type).toEqual(expected.actionType);
      expect(actual.resource.item).toEqual(expected.resource.item);
      done();
    });
  });

});


