import React from 'react'
import { RiAddCircleFill } from "react-icons/ri";
const TaskSubmitBar = ({ todo, onChange, onAdd, showFinished, toggleFinised }) => {

  return (
    <div>
      <div className="bg-purple-800 mx-auto rounded-xl my-1.5 p-5 w-[90%] hover:shadow-2xl transition-all flex">
        <input
          placeholder='Enter a Task'
          onChange={onChange}
          value={todo}
          className="mx-1.5 w-2/3 focus:ring-purple-300 bg-purple-200 rounded-xl py-3 pl-4 text-sm sm:text-base lg:text-xl"
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && todo.length > 0) {
              onAdd();
            }
          }}
        />

        <button
          onClick={onAdd}
          className='bg-white inset-shadow-sm hover:inset-shadow-purple-500 rounded-2xl p-3 m-3 cursor-pointer disabled:bg-gray-400' disabled={todo.length <= 0}><RiAddCircleFill /></button>

        <div className={`showcompletedblock flex items-center ${showFinished? 'bg-purple-400':'bg-purple-200' } p-3 rounded-2xl`}>

          <input type="checkbox"
            checked={showFinished}
            onChange={toggleFinised}
            className={`mr-3 scale-175 accent-purple-600`}
          />
          <div className="text text-sm sm:text-base lg:text-xl">Show Checked</div>
        </div>
      </div>
    </div>
  )
}

export default TaskSubmitBar
