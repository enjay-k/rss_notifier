//Adapted from https://github.com/plahteenlahti/HelloClock

import React from "react";
import { Line, Circle } from "react-native-svg";
import polarToCartesian from "./polarConversion";
import { View } from "react-native";

const Hand = (props) => {
    const { angle, centre, radius, stroke, strokeWidth } = props;
    const yCentre = centre - 100;
    const { x, y } = polarToCartesian(centre, yCentre, radius, angle);

    return (
        <View>
            <Line
                x1={centre}
                y1={yCentre}
                x2={x}
                y2={y}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                stroke={stroke}
            />
            <Circle
                cx={centre}
                cy={yCentre}
                r={3}
                stroke='black'
                strokeWidth='1'
                fill='black'
            />
        </View>
    );
};

export default Hand;