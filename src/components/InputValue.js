	import React from 'react';
	
	const InputValue =({item,handleOnChange,handleSubmit,editItem})=>{
		
			return (
				<React.Fragment>
				<div className='card card-body my-3'>
				 <form onSubmit={handleSubmit}>
				   <div className='input-group'>
				    <div className='input-group-prepend'>
				     <div className='input-group-text bg-primary text-white'>
				      <i className='fas fa-book'></i>
				      </div>
				     </div>
						<input type='text' 
						placeholder='enter the item name'
						className='form-control text-capitalize'
						value={item}
                        onChange={handleOnChange}
						/>
				 </div>
				   <button 
				   type='submit'
				    className={
				    	editItem ?'btn btn-block btn-success text-uppercase mt-3':
                                  'btn btn-block btn-primary text-uppercase mt-3'
                              }>
				     {editItem ?'edit item':'add item'}

				    </button>
				 </form>
				</div>
				</React.Fragment>
			);
		}
	
export default InputValue;