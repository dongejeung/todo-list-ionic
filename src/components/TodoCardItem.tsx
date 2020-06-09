import { IonInput, IonCard, IonCardHeader, IonItem, IonCheckbox, IonCardTitle, IonButton} from '@ionic/react'
import React, { useState } from 'react'

import { onEnterPress } from '../hooks/use-enter'
import { useStore } from '../hooks/use-store'
import TodoItemClass from '../stores/example/todo-item-store'
import { attachProps } from '@ionic/react/dist/types/components/utils'

interface Props {
  todo: TodoItemClass
}

export const TodoCardItem = ({todo}: Props) => {
  const { todoList } = useStore()
  const [newText, setText] = useState('')
  const [isEditing, setEdit] = useState(false)

  const saveText = () => {
    todo.updateText(newText)
    setEdit(false)
    setText('')
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <IonCard>
            <IonCardHeader>
              <IonItem>
                {console.log("todo.isDone" + todo.isDone + "\ntodo.toggleIsDone" + todo.toggleIsDone)}
                <IonCheckbox checked={todo.isDone} onClick={todo.toggleIsDone}></IonCheckbox>
                <IonCardTitle>
                <IonInput
                  type='text'
                  placeholder={todo.text}
                  onIonChange={(e) => setText(e.detail.value ?? '')}
                />
                </IonCardTitle>
                <IonButton onClick={saveText}>save</IonButton>
                <IonButton fill="outline" slot="end" color="danger" onClick={() => todoList.removeTodo(todo)}>X</IonButton>
              </IonItem>                
            </IonCardHeader>
          </IonCard>
        </div>
      ) : (
        <div>
          <IonCard>
            <IonCardHeader>
              <IonItem>
                {console.log("todo.isDone" + todo.isDone + "\ntodo.toggleIsDone" + todo.toggleIsDone)}
                <IonCheckbox checked={todo.isDone} onClick={todo.toggleIsDone}></IonCheckbox>
                <IonCardTitle>
                  {todo.text}
                </IonCardTitle>
                <IonButton onClick={() => setEdit(true)}>edit</IonButton>
                <IonButton fill="outline" slot="end" color="danger" onClick={() => todoList.removeTodo(todo)}>X</IonButton>
              </IonItem>                
            </IonCardHeader>
          </IonCard>
        </div>
      )}
    </div>
  )
}
