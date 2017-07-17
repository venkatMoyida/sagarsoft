import React from 'react';
import SearchResultsRow from './SearchResultRow';
/*
    Results array loop start here 
*/
class SearchResults extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.searchData.map((searchData) => {
            return (
             
              <SearchResultsRow
                key={searchData.firstName} 
                firstName ={searchData.firstName}
                userId={searchData.userId}
                lastName={searchData.lastName}
                emailAddress={searchData.emailAddress}
              />
            
            );
          })
        }
      </div>
    );
  }
}
SearchResults.propTypes = {
  searchData: React.PropTypes.array,
};
export default SearchResults;
