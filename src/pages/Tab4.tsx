import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonIcon, IonImg} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab4.css';

import {TodoNew} from '../components/TodoNew'
import {TodoList} from '../components/TodoList'

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>샘플</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>샘플</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TodoNew />
        <TodoList />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
