import React, { useRef } from 'react'
import { Fog } from 'three'

const Fog_Outside = ({ color, near, far }) => {

    return (
        <>
            <Fog color={0xffffff} near={1} far={5} />
        </>
    )
}

export default Fog_Outside