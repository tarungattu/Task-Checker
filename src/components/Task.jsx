import React from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
const Task = ({ id, tasktext, onDelete, onEdit, isCompleted, handleCheckbox }) => {

    return (
        <div className={`card flex items-center ${isCompleted? 'bg-purple-200':'bg-purple-300'}  rounded-2xl p-2 justify-between my-2 hover:shadow-2xl`}>
            <div className="taskinfo flex">

                <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    className='mx-3 w-6 accent-purple-600'
                    checked={isCompleted}
                    name = {id}
                />

                <div
                    className={`tasktext p-3 rounded-xl ${isCompleted ? 'line-through text-gray-500' : ''} ${isCompleted ? 'bg-gray-200' : 'bg-white'}` }>
                    {tasktext}
                </div>
            </div>
            <div className="buttons">
                <button onClick={(e)=>onEdit(e, id)} className='bg-white inset-shadow-sm hover:inset-shadow-purple-500 rounded-2xl p-3 cursor-pointer m-2 sm:m-4 sm:mx-3 lg:m-3 lg:mx-4'><MdModeEditOutline /></button>
                <button onClick={(e)=>onDelete(e, id)} className='bg-white inset-shadow-sm hover:inset-shadow-purple-500 rounded-2xl p-3 cursor-pointer m-2 sm:m-4 sm:mx-3 lg:m-3 lg:mx-4'> <RiDeleteBin5Fill /></button>
            </div>
        </div>
    )
}

export default Task
