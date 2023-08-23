import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../styles';

export default function AboutScreen() {
    return (
            <View style={styles.container}>
                <Text>This is the about screen.</Text>
            </View>
    );
}