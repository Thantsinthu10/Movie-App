/* eslint-disable no-undef */
import React, { useState } from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api";
import { fetchMovies } from "../redux/action/movies";
import { useDispatch } from "react-redux";

const Header = () => {
  const [movieName , setMovieName] = useState('')
  const dispatch = useDispatch();

  const searchMovie = async () => {

    if (movieName !== '') {
      const res = await api.get(`/search/movie?query=${movieName}&api_key=${api_key}`)
      dispatch(fetchMovies(res.data.results))
    }else{
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  }
  return (
    <div>
      <Navbar fluid rounded>
      <Link to='/'>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Code-lab Movie Channel
        </span>
        </Link>
      <div className="flex md:order-2 ">
        <form className="flex items-center justify-center me-1">
        <TextInput placeholder="Search..." value={movieName} onChange={(e)=> setMovieName(e.target.value)}/>
        <button type="button" onClick={()=> searchMovie()} className="bg-gray-900 text-white p-2 rounded-lg ms-1" >Search</button>
        </form>
      </div>
    </Navbar>
    </div>
  );
};

export default Header;
