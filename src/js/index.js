import React from 'react';
import {render} from 'react-dom';

// React components------------------------------------------------------------
import SimpleComponent from "./components/SimpleComponent";
//-----------------------------------------------------------------------------

// HTML files------------------------------------------------------------------
require('file?name=../[name].[ext]!../index.html');
//-----------------------------------------------------------------------------

render(<SimpleComponent />, document.getElementById('root'));