import React from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../../actions';

class Details extends React.Component {
    constructor(props) {
        super(props);
        const urlParam = window.location.href;
        const urlSplit = urlParam.split("/");
        const id = urlSplit[urlSplit.length - 1];
        console.log(id);
        this.state = {
            movieId : id,
            data: {},
        }
    }

    componentDidUpdate(prevProps) {
        const {movieDetailsData} = this.props;

        if(prevProps.movieDetailsData.isLoading && !movieDetailsData.isLoading) {
            this.setState({ data: movieDetailsData.data });
        }
    }

    componentDidMount() {
        this.props.onFetchMovieDetails(this.state.movieId);
    }

    render(){
        return(
            <div>
                {console.log(this.state.data)}
                <h1>{this.state.data.Title}</h1>
                <img src={this.state.data.Poster} alt="" />
                <p>Director: {this.state.data.Director}</p>
                <p>Actors: {this.state.data.Actors}</p>
                <p>Plot: {this.state.data.Plot}</p>
                <p><small>Duration: {this.state.data.Runtime}</small></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movieDetailsData: state.movieDetails,
})

const mapDispatchToProps = {
    // self declare
    onFetchMovieDetails: fetchMovieDetails
}

export default connect(mapStateToProps, mapDispatchToProps) (Details);