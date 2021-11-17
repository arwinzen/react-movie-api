import React from 'react';
import {connect} from 'react-redux';

import classes from './home.module.css';
import MovieCard from '../../components/MovieCard/moviecard';
import { fetchMovie } from '../../actions';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieList: [],
        }
    }

    componentDidMount() {
        const { movieData } = this.props;
        // if(movieData){
        //     this.setState({ movieList: movieData.data.Search });
        // }
    }
    
    componentDidUpdate(prevProps) {
        const {movieData} = this.props;
        if(prevProps.movieData.isLoading && !movieData.isLoading){
            this.setState({ movieList: movieData.data.Search });
            // this.props.onFetchMovie(movieData.data.Search);
        }
    }

    movieSubmit(){
        let inputVal = this._inputEl.value;
        if(inputVal !== ''){
            this.props.onFetchMovie(inputVal);
            this._inputEl.value = '';
        }
    }

    render(){
        return(
            <div>
                <header>
                    <input type="text" placeholder="Movie Name" ref={(a) => (this._inputEl = a)} />
                    <button onClick={() => this.movieSubmit()}>Search</button>
                </header>

                <div>
                    {
                        this.state.movieList.map(list => (
                            <MovieCard 
                              title = {list.Title}
                              year = {list.Year}
                              type = {list.Type}
                              poster = {list.Poster}
                              id = {list.imdbID}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movieData: state.movie,
})

const mapDispatchToProps = {
    onFetchMovie: fetchMovie,
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);