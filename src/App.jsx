import { useState, useEffect } from 'react';
import './global.css'
import Logo from '../src/assets/logoPurple.svg'

import { Plus } from "@phosphor-icons/react";

import { collection, onSnapshot, query, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
/* import TodoComponent from './components/TodoComponent' */

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  //create todo

  const createTodo = async () => {

    if (input === '') {
      alert('preencha o campo com alguma tarefa')
      return
    }

    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false
    })
    setInput('')
  }

  //read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase

  const toggleComplete = async (id, todo) => {
    await updateDoc(doc(db, 'todos', id), {
      completed: !todo.completed,

    });

  };


  //delete todo from firebase
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div className='min-h-screen bg-purple-900  '>
      <div className='flex items-center  min-h-screen flex-col pt-20 px-4  '>
        <div className='flex items-center justify-between w-full max-w-[395px] '>
          <h1 className='text-[32px] font-medium text-[#fff] '>Lista de tarefas</h1>
          <a target='_blank' href="https://myportfolio-omega-nine.vercel.app/"><img className='h-[50px] w-[50px]' src={Logo} alt="" /></a>
        </div>


        <div className='bg-gray-200 h-full w-full max-w-[400px] rounded-lg p-4 shadow-2xl shadow-gray-900 mt-4' >
          <div className='w-full flex items-center justify-between gap-4'>
            <input value={input} onChange={(e) => setInput(e.target.value)} className='h-[40px] w-full rounded-lg px-4 text-[1.2rem] font-normal outline-purple-800' type="text" placeholder='Insira a sua tarefa aqui' />
            <button onClick={createTodo} className='w-[50px] h-[40px] bg-purple-900 text-[#fff] flex items-center justify-center rounded-lg cursor-pointer' ><Plus size={32} /></button>
          </div>

          <ul className='mt-8' >


            {/* 
            {todos.map((todo) => {

              return (
                <Todo key={todo.id} todo={todo.text} completed={todo.completed} toggleComplete={() => toggleComplete(todo.id, todo)}
                  deleteTodo={() => deleteTodo(todo.id, todo)} />
              )

            })}
 */}
          </ul>

        </div>
      </div>


    </div>
  )
}

export default App
