import React, {useEffect, useState} from 'react';
import {select} from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";


const initState = {
    todoId: 0,
    title: '',
    writer: '',
    dueDate: '',
    complete: false
};

function ReadComponent({todoId}) {

    const [todo, setTodo] = useState(initState);

    const {moveToList, moveToModify} = useCustomMove();

    useEffect(() => {
        select(todoId).then(data => {
            console.log(data);
            setTodo(data);
        })
    }, [todoId]);

    return (
        <div className = "border-2 border-sky-200 mt-10 m-2 p-4 ">

            {makeDiv('Tno', todo.todoId)}
            {makeDiv('Writer', todo.writer)}
            {makeDiv('Title', todo.title)}
            {makeDiv('Due Date', todo.dueDate)}
            {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}

            <div className="flex justify-end p-4">
                <button type="button"
                        className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                        onClick={() => moveToList()}
                >
                List
                </button>

                <button type="button"
                        className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                        onClick={() => moveToModify(todo.todoId)}
                >
                    Modify
                </button>
            </div>
        </div>
    );
}

const makeDiv = (title,value) =>
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
                {value}
            </div>
        </div>
    </div>


export default ReadComponent;