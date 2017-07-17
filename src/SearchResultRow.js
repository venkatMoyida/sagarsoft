import React from 'react';
/*
  results view 
*/
class SearchResultsRow extends React.Component {
  render() {
  
    return (
      <table class="table table-striped">
       <thead>
        <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
          {this.props.userId}
          </td>
          <td>
          {this.props.firstName}
          </td>
          <td>
          {this.props.lastName}
          </td>
          <td>
          {this.props.emailAddress}
          </td>
        </tr>
        </tbody>
        </table>
    );
  }
}
SearchResultsRow.propTypes = {
  userId: React.PropTypes.string,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  emailAddress: React.PropTypes.string
};
export default SearchResultsRow;
