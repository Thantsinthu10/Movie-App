/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Card, Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectMovie } from "../redux/action/movies";

const Details = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch();

  const movieDetails = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);
    dispatch(selectMovie(res.data));
  };

  useEffect(() => {
    if (movieId) {
      movieDetails();
    }
    return () => dispatch(removeSelectedMovie({}));
  }, []);

  let movie = useSelector((state) => state.movies.movie);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center ">
        {JSON.stringify(movie) == "{}" ? (
        <div className="text-center">
          <h1>
            <Spinner aria-label="Extra large spinner Example" size="xl" />
          </h1>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="">
           <div className="">
        <span className="my-2" onClick={() => navigate("/")}>
          <i class="fa-solid fa-arrow-left"></i>
          Back
        </span>
        </div>
          <Card
            className=" max-w-screen-md"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div>
              <span className="bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-star me-2 my-3"></i>
                {movie.vote_average}
              </span>
              <span className=" ms-3 bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-calendar-days me-2"></i>
                {movie.release_date}
              </span>
              <span className=" ms-3 bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-users me-2"></i>
                {movie.vote_count}
              </span>
              <span className=" ms-3 bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-earth-americas me-2"></i>
                {movie.production_countries[0].name}
              </span>
            </div>
          </Card>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default Details;
