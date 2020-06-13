import React from 'react';
import ReactDOM from 'react-dom';

import OrderAPI from './js/orderAPI.js'
import List from './List/List.jsx'

import 'bootstrap/dist/css/bootstrap.css';

class Main extends React.Component {
	
	state = { data:[] }
	
	labels = [
		{name:'ID',id:'id'},
		{name:'First Name',id:'fName'},
		{name:'Last Name',id:'lName'},
		{name:'Qty',id:'quantity'},
		{name:'Phone',id:'phone'},
		{name:'Address',id:'address'}
	]
	

	getData = (page, sort, amount)=>{
		
		return OrderAPI.list(page, sort, amount).then(res=>{
			this.setState({ data:res.data })
			return res;
		})
	}
	
	edit = selected => {	
		this.props.setSelected(selected);
	}

	dummy = ()=>{}
	
	
	

	remove = (id) => {
		if(confirm(`Delete order ${id}?`)) {	
			return OrderAPI.delete(id);
		}		
	}	
	  
	render = ()=>{
		return (
		<List labels={this.labels} data={this.state.data} getData={this.getData}   >	
			<a action={this.dummy}>Edit</a> 
				&nbsp;|&nbsp; 
			<a action={this.dummy}>Delete</a> 
		</List>)
	}
}

ReactDOM.render( <Main />, document.getElementById('app'));
