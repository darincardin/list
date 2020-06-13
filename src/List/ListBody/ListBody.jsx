import React from 'react';

var ListBody = props =>{

	return (	
		<tbody>
			{props.data  && props.data.map( (obj,i) =>  
				<tr key={i}>
				{
					props.labels.map( (label,j) =>  (
						<td key={j}>{ obj[label.id]} </td>
					))
				}
				
				{React.Children &&
					<td>
						{React.Children.map(props.children, child => {
							if(child.props) return React.cloneElement(child, {onClick:()=>{ props.onClick(r, child.props.action)} }, child.props.children);
							else return React.cloneElement(<span/>, {}, child);
						})}
					</td>	
				}

				</tr>  
			)}
		</tbody>
	)
}

export default ListBody;

/*






			{props.data  && props.data.map( r =>  
				<tr key={r.id}>
				
				{
					Object.keys(r).map((v,i)=>(
					
						<td key={i}>{r[v]}</td>
					))
					
				}
				
				

				</tr>  








*/