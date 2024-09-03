import React from "react";
import ReactDOM from "react-dom/client";

class classReact {
    constructor() {

    }

    makeElement() {
        const element = React.createElement('header', null, 'Moja pierwsza strona z klasą React')
        rootParent.render(element)
    }    
}

const rootParent = ReactDOM.createRoot(document.querySelector('#root'))
const HeaderCl = new classReact

console.log(Math.random())
if (Math.random() > 0.5) {
    HeaderFn()
}
else {
    HeaderCl.makeElement()
}

function HeaderFn() {
    const element = React.createElement('header', null, 'Moja pierwsza strona z funkcją React')
    rootParent.render(element)
}
