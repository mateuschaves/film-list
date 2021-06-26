import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import styles from './styles';

interface FilmProps {
    title: string;
    onPress: any;
    onLongPress: any;
}

export default function Film({title, onPress, onLongPress}: FilmProps) {
  return (<TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      onLongPress={onLongPress}
    >
    <View style={styles.info}>
        <Feather
            name="film" 
            color="#E32929"
            size={24}
        />
        <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>);
}
