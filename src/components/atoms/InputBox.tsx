import { IonButton, IonInput } from '@ionic/react'
import React, { useState } from 'react'

import { onEnterPress } from '../../hooks/use-enter'
import { useStore } from '../../hooks/use-store'

export const InputBox = () => {
  const [newTodo, setTodo] = useState('')
  const { todoList } = useStore()

  const addTodo = () => {
    todoList.addTodo(newTodo)
    setTodo('')
  }

    return(
      <IonInput
      placeholder='입력'
      onKeyDown={onEnterPress(addTodo)}
      onIonChange={(e) => setTodo(e.detail.value ?? '')}
    />
       )
       
}
