import expect from 'expect';
import * as sut from '../../src/actions/wooResourceActions';

describe('Woo Resource Actions', () => {
    describe("Load Woo Resource", () => {
      it('should dispatch Load List Success for a Woo Resource Item', () => {
        const expectedAction = {
          type: "PRODUCT_LIST_SUCCESS", 
          resourceId:1
        };
        debugger;        
        const action = sut.loadWooResource(1, 1)();
        expect(expectedAction).toEqual(action);
      });
    });
});