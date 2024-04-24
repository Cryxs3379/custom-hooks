import React, { useState } from 'react'

export const useform = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm)

    const onInputChange = ({target}) => {

    const { name, value} = target;

    setformState({
    ...formState,
    [name]: value
    });
    }
const onResetForm = () => {

    setformState(initialForm);
}

  return{
    
    ...formState,
formState,
onInputChange,
onResetForm,
  }
}
