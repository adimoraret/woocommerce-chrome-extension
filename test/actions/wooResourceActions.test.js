import expect from 'expect';
import moxios from 'moxios';
import sinon from 'sinon';
import * as sut from '../../src/actions/wooResourceActions';
import * as mother from './mother';

describe('Woo Resource Actions', () => {

    beforeEach(function () {
      moxios.install()
    });

    afterEach(function () {
      moxios.uninstall()
    });

    describe("Load Woo Resource", () => {
 
      it('should throw exception for invalid resource', (done) => {
        expect(()=>sut.loadWooResource(-100,1)).toThrow("Invalid resource");
        done();
      });

      it('should throw 404 error message if the Load Resource Endpoint is not found', (done) => {
        moxios.stubRequest(mother.PRODUCT_LIST_URL, {
            status: 404
          });
        const errorThrown = sinon.spy();
        const dispatch = sinon.spy();
        sut.loadWooResource(1,1)(dispatch)
          .catch(errorThrown);

        moxios.wait(function(){
          const actual = errorThrown.getCall(0).args[0].message;
          expect(actual).toEqual("Request failed with status code 404");
          expect(false).toEqual(dispatch.called);
          done();          
        });
      });
  
      it('should dispatch Load List Success when loading Woo Resource item List', (done) => {
        moxios.stubRequest(mother.PRODUCT_LIST_URL, {
          status: 200,
          response: [],
          headers: {"x-wp-total": "2"}          
        });
        const expected ={
          actionType : "PRODUCT_LIST_SUCCESS",
          resource: {
            page: 1,
            total: 2,
            rows: []
          }
        };
        const dispatch = sinon.spy();
        
        sut.loadWooResource(1,1)(dispatch);
        
        moxios.wait(function(){
          const actual = dispatch.getCall(0).args[0];
          expect(actual.type).toEqual(expected.actionType);
          expect(actual.resource.page).toEqual(expected.resource.page);
          expect(actual.resource.total).toEqual(expected.resource.total);
          expect(actual.resource.rows).toEqual(expected.resource.rows);          
          done();
        });
      });

    });

});
