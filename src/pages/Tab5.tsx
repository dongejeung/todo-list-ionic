import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar, IonSearchbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Tab5.css";
import { Searchbar } from "../components/atoms/Searchbar";
import { Card } from "../components/atoms/Card";
import { InputBox } from "../components/atoms/InputBox";
import { AddButton } from "../components/atoms/AddButton";

// To-Do  store 를 정의하고 import 해야함.
//import {TodoNew} from '../components/TodoNew'
//import {TodoList} from '../components/TodoList'
import {TodoCardList} from '../components/TodoCardList'

const Tab5: React.FC = () => {

  useEffect(() => {

  }, )

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list</IonTitle>
          <Searchbar></Searchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <TodoCardList></TodoCardList>
        <AddButton></AddButton>
      </IonContent>

    </IonPage>
  );
};

export default Tab5;
