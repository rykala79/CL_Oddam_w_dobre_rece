import React from "react";
import WwhView from "./WwhView";

const locals = [
    {
        name: 'Zbiórka “Lorem Ipsum 1”',
        goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        items: 'Egestas, sed, tempus'
    },
    {
        name: 'Zbiórka “Lorem Ipsum 2”',
        goal: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
        items: 'Ut, aliquam, purus, sit, amet'
    },
    {
        name: 'Zbiórka “Lorem Ipsum 3”',
        goal: 'Scelerisque in dictum non consectetur a erat nam.',
        items: 'Mi, quis, hendrerit, dolor'
    },

]

export default function Locals() {
    return (
        <WwhView institutions={locals}/>
    )
}