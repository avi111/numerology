import React from "react";
import {MemoryRouter} from "react-router-dom";


const RouterHelper = ({children}: {children: any}) => {
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
    );
}

export default RouterHelper;