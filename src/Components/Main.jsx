import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import AccidentJournal from './Content/AccidentContent/AccidentJournal';
import TechJournal from './Content/ObjectsContent/TechJournal';
import CurrentReply from './Content/RepliesContent/CurrentReply';
import CurrentWorks from './Content/SPORContent/CurrentWorks';
import CurrentSchedule from './Content/ScheduleContent/CurrentSchedule';
import OperationalSummary from './Content/ReportContent/OperationalSummary'
import DailyReport from './Content/ReportContent/DailyReport'
function Main() {
    return (
        <main className="page">
            <Navbar />
            <div className='content'>
                <Routes>
                    <Route path='/' Component={OperationalSummary}>
                    </Route>
                    <Route path='/reports' Component={OperationalSummary}>
                    </Route>
                    <Route path='/reports/dailyReport' Component={DailyReport}>
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