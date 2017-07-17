import list from './employees.json';
/* filtering data from RRy loop 
 */
export default function filterSearch(searchText, maxResults) {
  return list.filter((list) => {
    if (list.userId.includes(searchText)) {
      return true;
    }
    if (list.firstName.includes(searchText)) {
      return true;
    }
    if (list.lastName.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}
