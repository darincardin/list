import React from 'react';
import ReactDOM from 'react-dom';

import OrderAPI from './js/orderAPI.js'
import List from './List/List.jsx'

import 'bootstrap/dist/css/bootstrap.css';

class Main extends React.Component {
	
	state = { data:[] }

	getData = (page, sort, amount)=>{
		
		return OrderAPI.list(page, sort, amount).then(res=>{
			this.setState({ data:res.data })
			return res;
		})
	}
	
	edit = selected => {	
		this.props.setSelected(selected);
	}



	remove = (id) => {
		if(confirm(`Delete order ${id}?`)) {	
			return OrderAPI.delete(id);
		}		
	}	
	  
	render = ()=>{
		return <List data={this.state.data} getData={this.getData}   />	
	}
}

ReactDOM.render( <Main />, document.getElementById('app'));
