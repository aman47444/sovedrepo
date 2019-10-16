import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../action/index';
import {bindActionCreators} from 'redux';
class BookList extends Component{
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title} 
				onClick= {() =>this.props.selectBook(book)}
				className ="list-group-item ">{book.title}</li>
				);

		});
	}
render(){
	return (
	<center>
    <div className="text-center"><h1>Select a book to get started.</h1></div>
    <ul className="list-group text-center col-sm-4">
	{
        this.renderList()
	}
	</ul></center>
	)
}
}

function mapStateToProps(state){
	return{
		books:state.books
	};

}


function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);