import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTask } from '../../redux/reducer/todo/taskSlice';

const AddTodo = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}
    
        dispatch(
            addTask({
                task: value
            })
        )
        setValue('')

    }
  return (
    <div>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onSubmit} > save</button>
    </div>
  )
}

export default AddTodo