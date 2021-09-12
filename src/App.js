// Library
import React, { useEffect } from 'react';

// Components
import SearchBar from './components/layout/SearchBar';

import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import Logs from './components/logs/Logs';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

// Styles
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  // lifecycles
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </>
  );
};

export default App;
