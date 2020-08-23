import React from 'react';
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
        };
    }

    render() {
        const { selectedDate } = this.state;
        return (
        <div>
        <div className="home-search-container">
          <img className="home-search-background" src={window.mainBackground} />
          <h1 className="home-search-text">Find your Omakase for any occation</h1>
          <div className="home-search-inputs">
            <select>
                <option value={2}>2 people</option>
                <option value={3}>3 people</option>
                <option value={4}>4 people</option>
                <option value={5}>5 people</option>
                <option value={6}>6 people</option>
                <option value={7}>7 people</option>
            </select>
            <input type="date" />
            <select>
                <option value="1630">16 : 30</option>
                <option value="1700">17 : 00</option>
                <option value="1730">17 : 30</option>
                <option value="1800">18 : 00</option>
                <option value="1830">18 : 30</option>
                <option value="1900">19 : 00</option>
                <option value="1930">19 : 30</option>
                <option value="2000">20 : 00</option>
                <option value="2030">20 : 30</option>
                <option value="2100">21 : 00</option>
            </select>
            <Link to="/restaurants"><button className="search-lets-omakase">Let's Omakase</button></Link>
          </div>
        </div>
        <div className="home-section-wrapper">
        <h3 className="home-section-title">Starring this week</h3>
        <div className="home-section-content">
            <div className="home-section">
                <img src={window.wabisabi} />
                <h3 className="home-section-text">Wabi Sabi By Shuji</h3>
            </div>
            <div className="home-section">
                <img src={window.tempuraendo} />
                <h3 className="home-section-text">Tempura Endo</h3>
            </div>
            <div className="home-section">
                <img src={window.hiden} />
                <h3 className="home-section-text">Hiden</h3>
            </div>
            <div className="home-section">
                <img src={window.hashiri} />
                <h3 className="home-section-text">Hashiri</h3>
            </div>
            <div className="home-section">
                <img src={window.sushisho} />
                <h3 className="home-section-text">Sushi Sho</h3>
            </div>
        </div>
        <h3 className="home-section-title">Dreamy desination</h3>
        <div className="home-section-content">
            <div className="home-section">
                <Link to={`cities/1`}>
                    <img src={window.la} />
                    <h3 className="home-section-text">Los Angeles</h3>
                </Link>
            </div>
            <div className="home-section">
                <Link to={`cities/2`}>
                    <img src={window.sf} />
                    <h3 className="home-section-text">San Francisco</h3>
                </Link>
            </div>
            <div className="home-section">
                <Link to={`cities/3`}>
                    <img src={window.mia} />
                    <h3 className="home-section-text">Miami</h3>
                </Link>
            </div>
            <div className="home-section">
                <Link to={`cities/4`}>
                    <img src={window.nyc} />
                    <h3 className="home-section-text">New York City</h3>
                </Link>
            </div>
            <div className="home-section">
                <Link to={`cities/5`}>
                    <img src={window.hnl} />
                    <h3 className="home-section-text">Honolulu</h3>
                </Link>
            </div>
        </div>
        <h3 className="home-section-title">Take out now</h3>
        <div className="home-section-content">
            <div className="home-section">
                <Link to={`restaurants/1`}>
                    <img src={window.yamakase} />
                    <h3 className="home-section-text">Yamakase</h3>
                </Link>
            </div>
            <div className="home-section">
                <img src={window.azabu} />
                <h3 className="home-section-text">Azabu</h3>
            </div>
            <div className="home-section">
                <img src={window.masa} />
                <h3 className="home-section-text">Masa</h3>
            </div>
            <div className="home-section">
                <img src={window.maruyama} />
                <h3 className="home-section-text">Sushi Maruyama</h3>
            </div>
            <div className="home-section">
                <img src={window.kusakabe} />
                <h3 className="home-section-text">Kusakabe</h3>
            </div>
        </div>
        </div>
        </div>
        );
    }
}

export default HomePage;