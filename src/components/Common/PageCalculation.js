export function getNumberOfPages(totalNumberOfItems, itemsPerPage){
  return Math.floor(totalNumberOfItems / itemsPerPage) 
        + Math.min(1, totalNumberOfItems % itemsPerPage);
}