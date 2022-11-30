import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import GlobalStyles from "./components/GlobalStyles/indexGlobalStyles";


createRoot(document.getElementById('root')).render(
    <GlobalStyles>
        <App />
    </GlobalStyles>
)
