import React from 'react';
/*
  handleChange event for search input data 
*/
class SearchInput extends React.Component {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div>
          <input
            onChange={this.handleChange}
          />
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: React.PropTypes.func,
};
export default SearchInput;
