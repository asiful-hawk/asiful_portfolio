import React from "react";
import { Text } from "@react-three/drei";

export function TextA(props) {
    return (

        <Text
            castShadow
            receiveShadow
            fontSize={2}
            color={"#0c6090"}>Asiful Haque
        </Text>
    );
}

export function TextB(props) {
    return (

        <Text
            castShadow
            receiveShadow
            fontSize={2}
            color={"#0c6090"}>Software Developer
        </Text>
    );
}
