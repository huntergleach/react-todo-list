import React, { useState, useEffect, useRef } from 'react'

const TaskForm = (props) => {
    const [ input, setInput ] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(()=> {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 500),
            text: input,
        });
        setInput('')
    };
    
 
    return (
        <form onSubmit={ handleSubmit } className='task-form'>
          { props.edit ? (
            <>
              <input
                placeholder=' edit task '
                value={ input }
                onChange={ handleChange } 
                name='text'
                ref={ inputRef }
                className='task-input edit'
              />
              <button onClick={ handleSubmit } className='task-button edit'>
                update
              </button>
            </>):
     
            (<>
              <input
                placeholder='new task'
                value={ input }
                onChange={ handleChange }
                name='text'
                className='task-input'
                ref={inputRef}
              />
              <button onClick={ handleSubmit } className='task-button'>
                add
              </button>
            </>
          )}
        </form>
      );
    }

export default TaskForm;
