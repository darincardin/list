import React from 'react';
import ReactDOM from 'react-dom';


var Href = props => { 

	var className = (props.sort.by == props.name) ? props.sort.dir:"";
		
	var onClick = ()=>{

		var sort = {
			by:props.name, 
			dir:className=="ASC" ? "DESC" : "ASC"
		}
		
		props.update( null, sort )
	}
		
	return <a className={className} name={props.name} onClick={onClick}>{props.children}</a>
}


var ListHeader = props => {

		return (	
			<thead>
				<tr>
					<td><Href {...props} name="id" >ID</Href></td>
					<td><Href {...props} name="firstname" >First Name</Href></td>
					<td><Href {...props} name="lastname" >Last Name</Href></td>
					<td><Href {...props} name="quantity" >Qty</Href></td>
					{props.action &&
						<td>Actions</td>
					}
				</tr>
			</thead>
		)
}

export default ListHeader;


/*

var ListHeader = props =>{

	var Href = props => { 



		var onClick = (e) =>{
			var newDir = e.target.className=="ASC" ? "DESC" : "ASC";
			props.props.update(undefined, e.target.name, newDir);
		}
	
		var className = []
		
		if(props.name == props.props.sortBy) className.push(props.props.sortDir);
	
		return <a className={className} name={props.name} onClick={onClick}>{props.children}</a>
	}

	return (	
		<thead>
			<tr>
				<td><Href name="id" props={props} >ID</Href></td>
				<td><Href name="firstname" props={props} >First Name</Href></td>
				<td><Href name="lastname" props={props} >Last Name</Href></td>
				<td><Href name="quantity" props={props} >Quantity</Href></td>
				<td><Href name="phone" props={props} >Phone</Href></td>
			</tr>
		</thead>
	)
}
*/