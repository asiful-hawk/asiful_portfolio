import React, { useRef } from "react";
import { Text } from "@react-three/drei";

export default function Model(props) {
    const group = useRef();
    return (
        <group ref={group} {...props} dispose={null}>
            <Text castShadow
                receiveShadow
                fontSize={2}
                color={"#0c6090"}>Asiful Haque</Text>
        </group>
    );
}