import React from 'react';

import Button from './Button';

import "./AddTask.css";
import { useState } from 'react';


const AddTask = ({ hendleTaskAddition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskLClick = () => {
        hendleTaskAddition(inputData)
        setInputData("");
    }

    return (
        <div className='add-task-container'>
            <input onChange={handleInputChange}
                value={inputData}
                className='add-task-input'
                type="text"
            />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskLClick}>Adicionar</Button>
            </div>
        </div>
    );
};


export default AddTask;