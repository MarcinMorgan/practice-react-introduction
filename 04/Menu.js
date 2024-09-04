import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    render() {
        return <ul>
        <MenuItem text="home" url="/"/>
        <MenuItem text="kontakt" url="/contact"/></ul>
        }
}

export default Menu;