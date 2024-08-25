"use client"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function Home() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handelEdit = () => {

  }

  const handelDelete = () => {

  }

  const handelAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isComplated: false }])
    setTodo("")
    console.log(todos)
    console.log(todos)
  }
  const handelChange = (e) => {
    setTodo(e.target.value)
  }

  const handelChakebox = (e) => {
    console.log(e, e.target)
    let id = e.target.name;
    console.log(`This id is ${id}`)
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    console.log(index)
    let newTodos = [...todos]
    newTodos[index].isComplated = !newTodos[index].isComplated;
    setTodos(newTodos)
    console.log(newTodos, todos)
  }


  return (
    <>
      <div className="flex flex-col mt-20 items-center h-screen w-screen">
        <div className=" border  h-[60vh] w-[40vw] p-6 rounded-lg shadow-lg bg-slate-500">
          <div>
            <h1 className="font-bold text-2xl text-white text-center">TO DO List</h1>
            <input onChange={handelChange} value={todo} type="text" className=" mt-8 w-4/5 rounded-md" />
            <button onClick={handelAdd} className=" bg-violet-800 hover:bg-violet-950 p-2 py-0.5 text-white rounded-md mx-3 font-bold">Add Task</button>
          </div>
          <h1 className=" text-center font-bold text-white mt-2">Your Todo</h1>
          {todos.map(item => {
            return (
              <>
                <div key={item.id} className=" todo flex w-1/ my-3 justify-between">
                  <input name={item.id} onChange={handelChakebox} type="checkbox" value={item.isComplated} id="" />
                  <div className={item.isComplated ? "line-through" : ""}>{item.todo}</div>
                  <section className="space-x-3">
                    <button onClick={handelEdit} className=" bg-violet-800 px-3 py-0.5 hover:bg-violet-950 text-white rounded-md font-bold">Edit</button>
                    <button onClick={handelDelete} className=" px-2 py-0.5 bg-violet-800 hover:bg-violet-950 text-white rounded-md font-bold">Delete</button>
                  </section>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}





{/* <div className="flex flex-col mt-20 items-center h-screen w-screen">
        <div className=" border border-blue-500 h-[50vh] w-[40vw] p-6 rounded-lg shadow-lg bg-slate-500">
          <h1 className="font-bold text-2xl text-white text-center">TO DO List</h1>
          <input onChange={handelChange} value={todo} type="text" className=" mt-8 w-4/5 rounded-md" />
          <button onClick={handelAdd} className=" bg-violet-800 hover:bg-violet-950 p-2 py-0.5 text-white rounded-md mx-3 font-bold">Add Task</button>
          <div>
          <h2>Your todo</h2>
          <div className="todo">
            {todos.map(item => {


              <div className=" todo flex mt-3">
                <div className={item.isComplated ? "" : "line-through"}>{item.todo}</div>
                <div className="buttons">
                  <button onClick={handelEdit} className=" bg-violet-800 hover:bg-violet-950 p-2 py-0.5 text-white rounded-md mx-2 font-bold">Edit</button>
                  <button onClick={handelDelete} className=" bg-violet-800 hover:bg-violet-950 p-2 py-0.5 text-white rounded-md mx-2 font-bold">Delete</button>
                </div>
              </div>
            })}
          </div>
        </div> */}

// <section className="w-[26vw] whitespace-nowrap overflow-hidden">
//       <p>{todo}</p>
//     </section>

// <div className="w-[26vw] whitespace-nowrap overflow-hidden">{item.todo}</div>