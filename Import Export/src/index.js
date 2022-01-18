import React from 'react';
import ReactDOM from 'react-dom';
import myfav, { program, favactor, favactress } from './App';

ReactDOM.render(
    <>
        <ol>
            <li>{myfav}</li>
            <li>{program}</li>
            <li>{favactor()}</li>
            <li>{favactress()}</li>
        </ol>
        
        
    </>
    , document.getElementById("root")
);