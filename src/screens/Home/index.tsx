import React, {useState} from 'react';
import { View, Text, Alert, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

import Header from '../../components/Header';
import Form from '../../components/Form';
import EmptyAnimation from '../../components/EmptyAnimation';
import Film from '../../components/Film';

import styles from './styles';

const AVATAR_URL = "https://avatars.githubusercontent.com/u/34848657?v=4";

export default function Home() {

  const [empty, setEmpty] = useState<boolean>(true);
  const [films, setFilms] = useState<string[]>([]);


  function addFilm(title: string): void {
    if (!title) 
      return Alert.alert('O filme não tem título ? 😲', 'Tenta lembrar antes de adicionar !');

    if (films.includes(title))
      return Alert.alert('Você já adiciou esse filme 🧐', 'Não precisa adicionar novamente se você assistiu duas vezes');

    setFilms([...films, title])

    setEmpty(false)
  }

  function removeFilm(title: string): void {
    Alert.alert('Você quer desver esse filme ?', '', [
      {
        style: 'cancel',
        text: 'Não'
      },
      {
        onPress: () => {
          const filmsAfterFilter = films.filter(film => film !== title);
          setFilms(filmsAfterFilter)
          if (filmsAfterFilter.length === 0) 
            setEmpty(true)
        },
        text: 'Sim'
      }
    ]);
       
  }

  function renderContent() {
    if(empty) {
      return <EmptyAnimation />
    } else {
      return (
        <>
          <Text style={styles.title}>Você já assistiu</Text>
          <FlatList
            data={films}
            renderItem={({item}) => <Film 
              title={item}
              onPress={() => {}}
              onLongPress={() => removeFilm(item)}
            />}
            keyExtractor={item => item}
          />
          
        </>
      )
    }
  }

  return <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <Header 
        firstName="Mateus"
        greeting="Olá"
        avatar={AVATAR_URL}
      />
      <Form
        onSubmit={addFilm}
      />
      {renderContent()}
  </KeyboardAvoidingView>;
}
