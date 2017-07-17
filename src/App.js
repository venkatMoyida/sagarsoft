import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import filterSearch from './filterSearch';
/* 
   display employee data here
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredSearch: filterSearch('', 20),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredSearch: filterSearch(event.target.value, 20),
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchInput
          textChange={this.handleSearchChange}
        />
        <SearchResults
          searchData={this.state.filteredSearch}
        />
      </div>
    );
  }
}
export default App;
