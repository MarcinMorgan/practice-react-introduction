import React from 'react';
import { createRoot } from 'react-dom/client';
import MenuItem from './MenuItem';

const root = createRoot(document.querySelector('#root'));
const App = () => <div><MenuItem text="kontakt" url="/kontakt"/></div>;

root.render(<App />);