import expect from 'expect';
import * as sut from '../../../src/components/Common/Helper';

describe("Commom Helper tests", () => {

  it("Should return true when passing empty object", () =>{
    const expected = true;
    const actual = sut.isEmptyObject({});
    expect(actual).toEqual(expected);
  });

  it("Should return false when passing non empty object", () =>{
    const expected = false;
    const actual = sut.isEmptyObject({a:1});
    expect(actual).toEqual(expected);
  });

});


