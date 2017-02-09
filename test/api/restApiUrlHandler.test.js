import expect from 'expect';
import * as sut from '../../src/api/restApiUrlHandler';
import * as config from '../../src/config/config';
import * as mother from './mother';

describe('Rest Api Url Handler tests', () => {

  const product = config.default.resources.find(r => r.id == 1);
  const filterType = 'status';
  const filterValue = 'any';
  const sortBy = 'name';
  const sortDirection = 'asc';  

  it('Should return product list first page REST url with no filter and no sort', () => {
    const expected = mother.PRODUCT_LIST_FULL_URL;
    const actual = sut.getListFullUrl(product.list.url, 1, config.default.grid.pagination.itemsPerPage);
    expect(actual).toEqual(expected);
  });

  it('Should return product list first page REST url with filter and no sort', () => {
    const expected = mother.PRODUCT_LIST_FULL_URL_WITH_FILTER;
    const actual = sut.getListFullUrl(product.list.url, 1, config.default.grid.pagination.itemsPerPage, filterType, filterValue);
    expect(actual).toEqual(expected);
  });

  it('Should return product list first page REST url with filter and sort', () =>{
    const expected = mother.PRODUCT_LIST_FULL_URL_WITH_FILTER_AND_SORT;
    const actual = sut.getListFullUrl(product.list.url, 1, config.default.grid.pagination.itemsPerPage, filterType, filterValue, sortBy, sortDirection);
    expect(actual).toEqual(expected);
  });

    it('Should return product list first page REST url with sort and no filter', () =>{
    const expected = mother.PRODUCT_LIST_FULL_URL_WITH_SORT;
    const actual = sut.getListFullUrl(product.list.url, 1, config.default.grid.pagination.itemsPerPage, null, null, sortBy, sortDirection);
    expect(actual).toEqual(expected);
  });
});