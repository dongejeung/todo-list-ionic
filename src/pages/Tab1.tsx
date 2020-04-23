import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar, IonTextarea, IonLabel } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./Tab1.css";

const saved = localStorage.getItem('savedList') ?? JSON.stringify([]);
const savedList = JSON.parse(saved);
interface TodoItem {
  cardNum: number;
  title: string;
  content: string;
  checked: boolean;
}

const Tab1: React.FC = () => {
  // react-hook

  const [cardNum, setCardNum] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [list, setList] = useState<TodoItem[]>(savedList);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    console.log('useEffect')
    console.log(list)
  }, [JSON.stringify(list)])


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {list.map((v : TodoItem, i: number) => (
          <IonCard key={i}>
            <IonCardHeader>
              <IonItem>
                <IonCheckbox checked={v.checked} onClick={() => { 
                  console.log('check ion change')
                  console.log(list)
                  const newList = list.map(item => {
                    return item.cardNum === v.cardNum
                    ? ({ ...item, checked: !v.checked }) 
                    : item

                  })
                  setList(newList)
                  localStorage.setItem('savedList', JSON.stringify(newList))
                }} />
                <IonCardTitle>{v.title}</IonCardTitle>
                <IonButton fill="outline" slot="end" color="danger" onClick={()=>{ 
                  const newList = list.filter((v, ii)=> ii !== i)
                  console.log(newList)
                  setList(newList)
                  localStorage.setItem('savedList', JSON.stringify(newList));
                  }}>Del</IonButton>
              </IonItem>
              <IonCardContent>
                {v.content}
              </IonCardContent>
            </IonCardHeader>
            
          </IonCard>
        ))}
        <IonLabel>Type Title</IonLabel>
        <IonInput
          placeholder="Enter title"
          onIonChange={e => setTitle(e.detail.value?? '')}
        ></IonInput>
        <IonLabel>Type content</IonLabel>
        <IonTextarea
          placeholder="Enter content"
          onIonChange={e => setContent(e.detail.value?? '')}
        ></IonTextarea>
        <IonButton onClick={()=>{
          const cardNumList: number[] = [];
          let maxNum = 0
          console.log(list)
          if(list.length !== 0) {
            list.forEach(Element => cardNumList.push(Element.cardNum))
            maxNum = Math.max.apply(null, cardNumList)+1
          }
          const newList = [{cardNum: maxNum, title, content, checked: false}, ...list]
          console.log(newList)
          setList(newList)
          console.log('add c omplete')
          localStorage.setItem('savedList', JSON.stringify(newList));
        }}>추가</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
