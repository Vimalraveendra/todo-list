	import React from 'react';
	import TodoItem from './TodoItem';

	
	const TodoList =({inputItems,clearItem,deleteItem,handleEditItem})=>{
		
			return (
				<React.Fragment>
				 <ul className='list-group'>
					<h3 className='text-capitalize text-center text-info'>todo list</h3>
					
						{  inputItems.map((item,index)=>{
							return<TodoItem 
							key={item.id}
							item={item.item}
							id={item.id}
							deleteItem={deleteItem}
							handleEditItem={handleEditItem}
							index={index}
							/>
						})
							
						}	
					
					<button 
					type='button'
					className='btn btn-block btn-danger mt-5 text-capitalize'
					onClick={clearItem}
					>clear
					</button>
				 </ul>
				</React.Fragment>
			);
		}
	
export default TodoList;