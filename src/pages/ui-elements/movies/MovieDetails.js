import React from "react";
import { useLocation } from "react-router-dom"
import { getFormattedReleaseDate, PosterUrl } from "../../../utils/commonUtils";
import "../../styles/movie-details.scss";

const MovieDetails = () => {

    let location = useLocation();

    return (
        <div className="movie-details-container">
            <section>
                <div className="container">
                    <div className="container-wrap">
                        <div className="row">
                            <div className="col-12">
                                <h3>{location.state.title} ({getFormattedReleaseDate(location.state.releaseDate)})</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={PosterUrl} alt="poster" />
                            </div>
                            <div className="col-md-6 text-center">
                                <h4>{location.state.title}</h4>
                                <p>{location.state.openingCrawl}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MovieDetails;
