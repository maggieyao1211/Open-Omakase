import React from 'react';
import { Link } from "react-router-dom";

class CityShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId);
    }

    render() {
        if (!this.props.city) return null; 
        const {city} = this.props;
        return (<div>
            <h1>{city.name}</h1>
            <h1>{city.state}</h1>
            <Link to={`/`}>Back</Link>
        </div>);
    }
}

export default CityShow;