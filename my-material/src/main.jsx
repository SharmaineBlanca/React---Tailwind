import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Content from './Carousel.jsx'
import SimpleFooter from "./Footer.jsx"
import ActivitiesTimeline from "./Timeline.jsx"
import CardWithLink from "./Card.jsx"
import About from "./About,.jsx"
import NavbarSimple from "./Navbar.jsx"
import "./index.css"; 

import { ThemeProvider } from "@material-tailwind/react";
import SimpleRegistrationForm from "./Form.jsx";



 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>

     <NavbarSimple />
      <SimpleRegistrationForm />
      <SimpleFooter />
      
    </ThemeProvider>
  </React.StrictMode>
);