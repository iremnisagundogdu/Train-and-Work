import React,{useState} from 'react'

function Todolist() {

 const [todo, setTodo] = useState([])
 const [newTodo, setNewTodo] = useState("")
 
 
 const Ekle=()=>{
  
  setTodo([...todo,newTodo])
  setNewTodo("")

 }
  return (

    <div>
       {todo.map((e)=>{
        return (<ul class="list-group"><li class="list-group-item">{e}</li></ul>)
       })}

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Görev Giriniz."  aria-label="Recipient's username" aria-describedby="button-addon2"value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}></input>
        <div class="input-group-append">
         <button className="btn btn-outline-secondary" type="button" onClick={Ekle}>Ekle</button>
        </div>
      </div>
    </div>
  )
}

export default Todolist