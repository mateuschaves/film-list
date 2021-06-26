import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import animation from '../../assets/empty.json';

import styles from './styles';

const EmptyAnimation: React.FC = () => {
  return (
        <View style={styles.container}> 
            <LottieView 
                source={animation}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    )
  ;
}

export default EmptyAnimation;