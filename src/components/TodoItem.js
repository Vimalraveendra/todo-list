	import React from 'react';
	
	const TodoItem =({item,deleteItem,id,handleEditItem})=>{
		
			return (
				<React.Fragment>
				{
				item.length>0 &&
				<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				<h6>{item}</h6>
				<div className='todo-icon'>
				<span className='mx-2 text-success' 
				onClick={()=> handleEditItem(id)}
				> 
				<i className='fas fa-pen'></i></span>
				<span className='text-danger mx-2' 
				onClick={()=> deleteItem(id)}> 
				<i className='fas fa-trash'></i></span>
				</div>
				</li>
			}
				</React.Fragment>
			);
		}
	
export default TodoItem;