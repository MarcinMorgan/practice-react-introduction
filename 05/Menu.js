import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    render() {
        const elements = this.props.items.map(elem => {return <MenuItem {...elem}/>})
        return <ul>
            {elements}
        </ul>
        }
}

export default Menu;