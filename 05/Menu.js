import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    render() {
        return <ul>
            {this.props.items.map(elem => {return <MenuItem {...elem}/>})}
        </ul>
        }
}

export default Menu;