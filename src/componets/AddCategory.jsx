
import React, { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
    //usamos el  hook de usestate
    const [inputValue, setInputValue] = useState('');

    //es obligario crear esta funcion para cambiar el estado
    const onInputChange = ({ target }) => {
        setInputValue(target.value);

    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        if( inputValue.trim().length <=1) return;

        onNewCategory (inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={(event)=> onSubmit(event)}>

            <input
                type='text'
                placeholder='Buscar Gif'
                value={inputValue}
                onChange={onInputChange}

            />

        </form>


    )
}

export default AddCategory
