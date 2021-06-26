import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface HeaderProps {
    greeting: string;
    firstName: string;
    avatar: string;
}


export default function Header({greeting, firstName, avatar}: HeaderProps) {
    return (
        <View style={styles.header}> 
            <Text style={styles.greeting}>
                {`${greeting}\n`}
                <Text style={styles.firstName}>
                    {firstName}
                </Text>
            </Text>

            <Image
                style={styles.avatar}
                source={{
                    uri: avatar
                }}
            />
        </View>
    );
}
