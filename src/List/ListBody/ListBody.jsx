import React from 'react';

var ListBody = props =>{

	
	return (
		<tbody>
			{props.data  && props.data.map( r =>  
				<tr key={r.id}>
					<td>{r.id}</td>
					<td>{r.fName}</td>
					<td>{r.lName}</td>
					<td>{r.quantity}</td>
					{props.action &&
						<td>
						
							<a onClick={()=>props.action(r.id)} >Delete</a>
						</td>
					}
				</tr>  
			)}
		</tbody>
	)
}

export default ListBody;


/*


*/