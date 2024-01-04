import React from 'react';
import RepliesNavbar from './Navbars/RepliesNavbar';
import ScheduleNavbar from './Navbars/ScheduleNavbar';
import ReportsNavbar from './Navbars/ReportsNavbar';
import SPORNavbar from './Navbars/SPORNavbar';
import ObjectsNavbar from './Navbars/ObjectsNavbar';
import AccidentNavbar from './Navbars/AccidentNavbar';

import { Routes, Route } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <Routes>
                <Route path='/' Component={ScheduleNavbar}>
                </Route>
                <Route path='/schedule/*' Component={ScheduleNavbar}>
                </Route>
                <Route path='/reports/*' Component={ReportsNavbar}>
                </Route>
                <Route path='/SPOR/*' Component={SPORNavbar}>
                </Route>
                <Route path='/replies/*' Component={RepliesNavbar}>
                </Route>
                <Route path='/objects/*' Component={ObjectsNavbar}>
                </Route>
                <Route path='/accident/*' Component={AccidentNavbar}>
                </Route>
            </Routes>
        </div>)
}

export default Navbar;