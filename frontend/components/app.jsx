import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import ModalContainer from './modal_container';
import HomePage from './home_page';
import CityShowContainer from './city_show_container';
import RestaurantIndexContainer from './restaurant_index_container';
import RestaurantShowContainer from './restaurant_show_container';
import UserShowContainer from './user_show_container';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const App = () => (
    <div>
        <div className="page-container">
            <header>
                <GreetingContainer />
            </header>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/cities/:cityId" component={CityShowContainer} />
                <Route exact path="/restaurants/" component={RestaurantIndexContainer} />
                <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
                <Route exact path="/users/" component={UserShowContainer} />
            </Switch>
        </div>
            <footer className="page-footer">
                <span className="page-footer-text">inspired by OpenTable</span>
                <a href="https://github.com/maggieyao1211" target="_blank">
                    <FaGithub className="page-footer-github" />
                </a>
                <a href="https://www.linkedin.com/in/maggie-y-3860641b7" target="_blank">
                    <FaLinkedin className="page-footer-linkedin" />
                </a>
            </footer>
        <ModalContainer />
    </div>
);

export default App;
