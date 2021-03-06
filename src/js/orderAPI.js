
var url = 'http://api.darincardin.com';
//var url = "";


export default class OrderAPI {
	

	static list(page, sort, amount){	
		return OrderAPI.get(`${url}/php/orders/list.php?amount=${amount}&page=${page}&sortBy=${sort.by}&sortDir=${sort.dir}`);
	}

	static create(data){
		return OrderAPI.post(`${url}/php/orders/create.php`, data).then(id =>{   
			return {...data, id}
		})
	}	
	
	static update(data){
		return OrderAPI.post(`${url}/php/orders/update.php?id=${data.id}`, data);	
	}	

	static delete(id){
		return OrderAPI.get(`${url}/php/orders/delete.php?id=${id}`);
	}
	
	static login(data){
		return OrderAPI.post(`${url}/php/login.php`, data ) 
	}	
	
	static logout(){
		return OrderAPI.get(`${url}/php/logout.php`)
	}	
	
	
	static get(url){
		return OrderAPI.request(url, 'get')
	}
		
	static post(url, data){
		return OrderAPI.request(url, 'post', data)
	}
	
	
	static request(url, method, data){

		var opts = {method}
		
		if(data) opts.body = JSON.stringify(data)
		
		return fetch(url, opts).then(res => res.json()).catch( err =>{
			alert('An error occurred. Please try again later.')	
			throw err;
		})	
	}
}









