import React from 'react';
import StarRating from '../StarRating';



const MovieCard = (props) =>(
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top " src={props.movie.imageUrl} alt="images"/>
            <div className="card-body">
                <h4 className="card-title">{props.movie.title}</h4>
                <h6 className="card-sub mb-2 text-muted">{props.movie.subtitle}</h6>
                <p className="text-justify" style={{fontSize:'14px'}}>{props.movie.description}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <StarRating rating={props.movie.rating}/>
                    </div>
                    <div className="card-footer-badge float-right badge-primary badge-pill">{props.movie.rating}</div>
                </div>
            </div>

        </div>

    </div>
)


export default MovieCard;