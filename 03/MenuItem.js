import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector('#root'));
const element = React.createElement('header', null, 'test')

export default class ReactItem {
    constructor() {

    }

    test() {
        root.render(element)
    }    
}