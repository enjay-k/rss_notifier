//Adapted from https://github.com/plahteenlahti/HelloClock
import React, { useState } from 'react';
import Svg from 'react-native-svg';
import { Dimensions, View, Text } from 'react-native';
import ClockMarkings from './clockMarkings';
import Hand from './hand';
import { getTime } from './time';
import { styles } from '../styles';

//Declarations of clock ui constants
const { width } = Dimensions.get('window');
const clockDiameter = width / 2;;
const centre = width / 2;
const clockRadius = clockDiameter / 2
const hourStickCount = 12;
const minuteStickCount = 12 * 6;

const Clock = () => {
    let [time, setTime] = useState(getTime);

    //setTime(getTime); //Review when the time is updated.

    return (
        <View>
            <Text style={styles.normal}>
                You will be notified at {time.hours}:{time.minutes}
            </Text>
            <Svg style={styles.clock} height={width - 190} width={width}>
                <ClockMarkings
                    minutes={minuteStickCount}
                    hours={hourStickCount}
                    radius={clockRadius}
                    centre={centre}
                />
                <Hand
                    //Minutes hand
                    angle={time.minutesInDeg}
                    centre={centre}
                    radius={clockRadius - 30}
                    stroke='purple'
                    strokeWidth='3'
                />
                <Hand
                    //Hours hand
                    angle={time.hoursInDeg}
                    centre={centre}
                    radius={clockRadius - 50}
                    stroke='purple'
                    strokeWidth='5'
                />
                
            </Svg>
            
        </View>
    );


}

export default Clock;