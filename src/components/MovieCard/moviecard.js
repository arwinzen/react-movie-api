import React from 'react';
import classes from './moviecard.module.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
    render(){
        const {title, poster, year, type, id} = this.props;
        return (
            <Link className={classes.card_holder} to={`details/${id}`}>
                <img src={poster} alt="" className={classes.img_holder}/>
                <div className={classes.details_holder}>
                    {/* {console.log(this.props)} */}
                    <h3>{title}</h3>
                    <p>{year}</p>
                    <p>{type}</p>
                </div>
            </Link>
        )
    }
}

export default MovieCard;