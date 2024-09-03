import React from "react";
import ReactDOM from "react-dom";

class classReact {
    constructor() {

    }

    makeElement() {
        ReactDOM.render(
            React.createElement('header', null, 'Moja pierwsza strona z klasą React'),
            rootParent
            );
    }    
}

const rootParent = document.querySelector('#root')
const HeaderCl = new classReact

console.log(Math.random())
if (Math.random() > 0.5) {
    HeaderFn()
}
else {
    HeaderCl.makeElement()
}

function HeaderFn() {
    ReactDOM.render(
        React.createElement('header', null, 'Moja pierwsza strona z funkcją React'),
        rootParent
        );
}
