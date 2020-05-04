import React from 'react';
import ReactDOM from 'react-dom';

class ListLoader extends React.Component {
		
	//state = {loading:false}
	
	/*
	show = ()=>{
		this.setState({loading:true})
	}
	
	hide = ()=>{
		this.setState({loading:false})
	}
	*/
	render() {
		return (
		<>
			{this.props.show && 
				<div className="table-loader">
					<div> <i className="glyphicon glyphicon-cog spin" ></i></div>
				</div>
			}
		</>		
		)	
	}
}		

export default ListLoader;
