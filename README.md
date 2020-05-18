# list
List created with React and Webpack

This library provides a dynamic list widget for use with your project. 

Library can be installed by adding this line to package.json dependancies:
```js
"list": "darincardin/list",
```

The widget can then be included in the project like this:

```jsx
import List from 'list'; 

state = { data:[] }

getData = (page, sort, amount)=>{	
  return OrderAPI.list(page, sort, amount).then(res=>{
	  this.setState({ data:res.data })
	  return res;
  })
}
  
<List data={this.state.data} getData={this.getData}   />	
```
