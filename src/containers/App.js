import React, { Component } from 'react';

import './App.css';
import InputValue from '../components/InputValue';
import TodoList from '../components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {

	state ={
		inputItems:[],
		id:uuid(),
		item:'',
		editItem:false
	}

	handleOnChange=(e)=>{
     this.setState({item:e.target.value})
	}

	handleSubmit =(e)=>{
		e.preventDefault();
		const newItem={
			id:this.state.id,
			item:this.state.item
		}
	
		const updatedItems=[...this.state.inputItems,newItem]
		this.setState({
			inputItems:updatedItems,
			item:'',
			id:uuid(),
			editItem:false
		})
	}


	clearItem=()=>{
      this.setState({inputItems:[] })
	}


	deleteItem = (id)=>{
		console.log(id)
       const filteredItems= this.state.inputItems.filter(item=>item.id !== id)
       console.log(filteredItems)
       this.setState({inputItems:filteredItems})
	}

	handleEditItem = (id)=>{
		const filteredItems= this.state.inputItems.filter(item=>item.id !== id)
		
		const selectedItem = this.state.inputItems.find(item=>item.id === id)
		console.log(selectedItem)
		 this.setState({
		 	inputItems:filteredItems,
		 	item:selectedItem.item,
		 	editItem:true,
		 	id:id,
		 	
		 })
	}

	render() {
     return (
     	 <div>
     	   <header className="App-header">
             <h1>todo App</h1>

           </header>
		    <div className='container mt-5'>
		      <div className="row">
		        <div className='col-10 mx-auto col-md-8 my-2'>
		         <h3 className='text-capitalize text-center'>
		          todo input
                 </h3>
   
		      <InputValue 
		      item ={this.state.item}
		      handleOnChange={this.handleOnChange}
		      handleSubmit={this.handleSubmit}
		       editItem={this.state.editItem}
		      />
		      
		      <TodoList 
		      inputItems={this.state.inputItems}
		      clearItem={this.clearItem}
		      deleteItem={this.deleteItem}
		      handleEditItem={this.handleEditItem}
   
		       />
		     </div>
		    </div>
		   </div> 
		  </div>
		  );
		}
		}
export default App;


  
