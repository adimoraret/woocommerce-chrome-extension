import * as types from '../actions/actionTypes';
const SITE_URL = 'https://www.codetrest.com';
const CONSUMER_KEY = 'ck_d2cd82f86b0852282d360c94ae3e12d66b0bce74';
const CONSUMER_SECRET = 'cs_3025632669cf186f6e6e56884d4e352612540440';
const AUTHENTICATION_PARAMS = `?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

export function getListFullUrl(resource){
  return `${SITE_URL}${resource.list.url}${AUTHENTICATION_PARAMS}`;
}

export function getInfoFullUrl(resource, id){
  return `${SITE_URL}${resource.view.url}${AUTHENTICATION_PARAMS}`.replace(":id", id);
}