import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface FormProps {
   onSubmit: Function;
}


export default function Form({ onSubmit }: FormProps) {
    const [film, setFilm] = useState('');

    function addFilm() {
        onSubmit(film);
        setFilm('');
    }
    return (
        <View style={styles.form}> 
            <TextInput 
                placeholder="Qual filme você viu hoje ?"
                value={film}
                onChangeText={setFilm}
                style={styles.input}
            />
            <TouchableOpacity 
                onPress={addFilm} 
                style={styles.button}
            >
                <Text style={styles.textButton}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}
