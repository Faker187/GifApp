import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState("")

  const onChangeInput = ({ target }) => {
    setInputValue( target.value);
  }

  const onSubmitCategory = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ ( event ) => onSubmitCategory(event) } >
        <input 
            type="text"
            placeholder="Buscar Gif"
            value={ inputValue }
            onChange={ onChangeInput }
        />
    </form>
  )
}
