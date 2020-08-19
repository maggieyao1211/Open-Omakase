import React from 'react';
import GreetingContainer from './greeting_container';
import ModalContainer from './modal_container';

const App = () => (
    <div className="page-container">
        <header>
            <GreetingContainer />
        </header>
        <footer>
        </footer>
        <ModalContainer />
    </div>
);

export default App;
