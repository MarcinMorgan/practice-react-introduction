import React from "react";
import ReactDOM from "react-dom/client";

const rootParent = ReactDOM.createRoot(document.querySelector('#root'))

class HeaderCl extends React.Component {
    render() {
        return <header>Moja pierwsza strona z klasą React</header>
    }
}

console.log(Math.random())
if (Math.random() > 0.5) {
    HeaderFn()
}
else {
    rootParent.render(<div><HeaderCl /></div>)
}

function HeaderFn() {
    const element = React.createElement('header', null, 'Moja pierwsza strona z funkcją React')
    rootParent.render(element)
}