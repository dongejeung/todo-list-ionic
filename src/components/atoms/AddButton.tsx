import { IonButton, IonInput } from '@ionic/react'
import React, { useState } from 'react'

import { onEnterPress } from '../../hooks/use-enter'
import { useStore } from '../../hooks/use-store'

export const AddButton = () => {

    const [newTodo, setTodo] = useState('')
    const { todoList } = useStore()

    const addTodo = () => {
    todoList.addTodo(newTodo)
    setTodo('')
    }
    return(
        <div>
            <IonInput
                placeholder='입력'
                onKeyDown={onEnterPress(addTodo)}
                onIonChange={(e) => setTodo(e.detail.value ?? '')}
            />
            <IonButton onClick={addTodo}>추가</IonButton>
        </div>
    )
       
}