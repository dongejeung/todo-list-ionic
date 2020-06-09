import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar, IonSearchbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Tab6.css";
import { Searchbar } from "../components/atoms/Searchbar";
import { Card } from "../components/atoms/Card";
import { InputBox } from "../components/atoms/InputBox";
import { AddButton } from "../components/atoms/AddButton";

import {TodoCardList} from '../components/TodoCardList'

const Tab6: React.FC = () => {

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

export default Tab6;
