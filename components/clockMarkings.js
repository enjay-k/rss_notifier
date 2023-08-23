//Adapted from https://github.com/plahteenlahti/HelloClock

import React from 'react';
import { G, Line, Text, Circle } from 'react-native-svg';
import polarToCartesian from './polarConversion';

const ClockMarkings = (props) => {
    const { radius, centre, minutes, hours } = props;
    const yCentre = centre - 100;
    const minutesArray = new Array(minutes).fill(1);
    const hoursArray = new Array(hours).fill(1);

    const minuteSticks = minutesArray.map((minute, index) => {
        const start = polarToCartesian(centre, yCentre, radius, index * 5);
        const end = polarToCartesian(centre, yCentre, radius, index * 5);

        return (
            <Line
                stroke = 'black'
                strokeWidth={2}
                strokeLinecap='square'
                key={index}
                x1={start.x}
                x2={end.x}
                y1={start.y}
                y2={end.y}
            />
        );
    });

    const hourSticks = hoursArray.map((hour, index) => {
        const start = polarToCartesian(centre, yCentre, radius - 10, index * 30);
        const end = polarToCartesian(centre, yCentre, radius, index * 30)
        const timeHours = polarToCartesian(centre, yCentre, radius - 25, index * 30);

        return (
            <G key={index}>
                <Line
                    stroke = 'black'
                    strokeWidth={3}
                    strokeLinecap='square'
                    key={index}
                    x1={start.x}
                    x2={end.x}
                    y1={start.y}
                    y2={end.y}
                />
                <Text
                    textAnchor='middle'
                    fontSize='17'
                    fontWeight='bold'
                    fill='black'
                    alignmentBaseline='central'
                    x={timeHours.x}
                    y={timeHours.y}>
                        {index == 0 ? 12 : index}
                    </Text>
            </G>
        );
    });

    return (
        <G>
            {minuteSticks}
            {hourSticks}
        </G>
    );
};

export default ClockMarkings;