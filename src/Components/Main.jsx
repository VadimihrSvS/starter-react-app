import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import AccidentJournal from './Content/AccidentContent/AccidentJournal';
import TechJournal from './Content/ObjectsContent/TechJournal';
import CurrentReply from './Content/RepliesContent/CurrentReply';
import CurrentWorks from './Content/SPORContent/CurrentWorks';
import CurrentSchedule from './Content/ScheduleContent/CurrentSchedule';
import HourMumgReport from './Content/MUMG/HourMumgReport'
import DayMumgReport from './Content/MUMG/DayMumgReport'
import NoFound from './Content/NoFound';
function Main() {
    return (
        <main className="page">
            <Navbar />
            <div className='content'>
                <Routes>
                    <Route path='/' Component={NoFound}>
                    </Route>
                    <Route path='/mumg/hourMumgReport' Component={HourMumgReport}>
                    </Route>
                    <Route path='/mumg/dayMumgReport' Component={DayMumgReport}>
                    </Route>
                    <Route path='/SPOR' Component={CurrentWorks}>
                    </Route>
                    <Route path='/schedule' Component={CurrentSchedule}>
                    </Route>
                    <Route path='/replies' Component={CurrentReply}>
                    </Route>
                    <Route path='/objects' Component={TechJournal}>
                    </Route>
                    <Route path='/accident' Component={AccidentJournal}>
                    </Route>
                </Routes>
            </div>
        </main>);
}


export default Main;