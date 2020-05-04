import React from 'react';
import {ListHeader ,ListBody, ListFooter, ListLoader} from './';
import PropTypes from 'prop-types';


//import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './list.scss';

const INITIAL_STATE = {page:0, total:0, loading:false, sort:{by:"id", dir:"ASC"}}
const ROW_SIZE = 40;

class List extends React.Component {
	AMOUNT = 0;   
	state = {...INITIAL_STATE}

	constructor(props){
		super(props)
		
		this.ref = React.createRef()
		
	}


	generateAmount = () => {
		
		var height = this.ref.current.parentElement.offsetHeight;
		this.AMOUNT = Math.floor((height/ROW_SIZE) - 2);	
		
		this.ref.current.style.height =  ((this.AMOUNT + 2) * ROW_SIZE) + "px" ;
	}
	
	componentDidMount = ()=>{

		if(this.props.amount) this.AMOUNT = this.props.amount;
		else {
			this.generateAmount();
			window.addEventListener('resize', this.handleEvent);
		}
			
		this.getOrders();
		if(this.props.action) this.showActions = true;
	}
	
	handleEvent = () => {
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 
			this.generateAmount();
			this.getOrders() 
		}, 300);
	}
	
	getOrders = (page = this.state.page, sort = this.state.sort) => {
	
		this.setState({loading:true})
		
		this.props.getData(page, sort, this.AMOUNT).then(res=>{
			this.setState({ page, total:res.total,  sort:sort,  loading:false })	
		})
		.catch( err =>{
			this.setState({...INITIAL_STATE})
		})	
	}	
	
	action = id=>{
		this.setState({loading:true})

		this.props.action(id).then(res =>{
			this.getOrders()
		})
		.catch( err =>{
			this.setState({...INITIAL_STATE})
		})	
	}
	
	render = () => {
	    return  (
			<div ref={this.ref} className="list"> 
				<ListLoader show={this.state.loading} />
				<table>
					<ListHeader update={this.getOrders} sort={this.state.sort} action={this.props.action}  />
					<ListBody data={this.props.data} edit={this.edit} action={this.props.action && this.action}      />
				</table>
				<ListFooter update={this.getOrders} page={this.state.page} max={this.state.total} />
			</ div>
		)
	}
}		

List.propTypes = {
    data: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired,
	action: PropTypes.func,
	amount: PropTypes.number,
};



export default List;





