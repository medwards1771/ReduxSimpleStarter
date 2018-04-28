import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// Anything returned from this function will end up
// as props on the BookList container
function mapStateToProps(state) {
  // Whenever selectBook is called, the result should
  // be passed to all of our reducers
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  // because of the selectBook key below, we will be able
  // to call this.props.selectBook on our BookList container
  // this.props.selectBook will call our action creator
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container -- it need to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
