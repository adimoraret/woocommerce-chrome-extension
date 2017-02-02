import expect from 'expect';
import * as sut from '../../src/actions/wooResourceActions';
import moxios from 'moxios';
import sinon from 'sinon';
import * as mother from './mother';

describe('Woo Resource Actions', () => {

    beforeEach(function () {
      moxios.install()
    })

    afterEach(function () {
      moxios.uninstall()
    })

    it('should throw Invalid resource for invalid resource', (done) => {
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
        expect("Request failed with status code 404").toEqual(actual);
        expect(false).toEqual(dispatch.called);
      });
      done();
    });

    describe("Load Woo Resource", () => {
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
          var actual = dispatch.getCall(0).args[0];
          expect(expected.actionType).toEqual(actual.type);
          expect(expected.resource.page).toEqual(actual.resource.page);
          expect(expected.resource.total).toEqual(actual.resource.total);
          expect(expected.resource.rows).toEqual(actual.resource.rows);          
          done();
        });
      });



    });
});
