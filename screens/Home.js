import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SubScreen from './Subscriptions';
import AboutScreen from './About';
import { Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import Clock from '../components/clock';
import { styles } from '../styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Clock/>
            </View>
        </View>
    );
};

export default HomeScreen;