import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect, Switch, Route, Link,NavLink,  withRouter} from "react-router-dom";
import OrderAPI from './js/orderAPI.js'
import List from './List/List.jsx'

import 'bootstrap/dist/css/bootstrap.css';

window._react = null;

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

	dummy = (obj)=>{
		alert(Object.entries(obj).join('  '))
	}
	
	remove = (id) => {
		if(confirm(`Delete order ${id}?`)) {	
			return OrderAPI.delete(id);
		}		
	}	
	  
	render = ()=>{
		return (
			<Router>	
				<Switch>
					<Route path="/list" >
						<List labels={this.labels} data={this.state.data} getData={this.getData}  action={this.dummy} >	
							<NavLink to="/detail">Detail</NavLink>
								&nbsp;|&nbsp; 
							<a onClick={this.dummy}>Alert</a> 
						</List>
					</Route>
					
					<Route path="/detail">
						<div>detail</div>
					</Route>
					
					<Redirect from="/" to="/list" />	
				</Switch>
			</Router>
					
		)			
	}
}

ReactDOM.render( <Main />, document.getElementById('app'));
