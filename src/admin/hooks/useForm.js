import { useState } from 'react'

const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    let upper = value.toUpperCase();
    setFormState({
      ...formState,
      [name]: upper
    })
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}

export default useForm