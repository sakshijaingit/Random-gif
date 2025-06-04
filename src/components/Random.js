// import React from 'react'
import './Random.css';
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false)
     
    // console.log(API_KEY);
    // async function fetchData() {
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     // console.log(output);
    //     const imageSource= data.data.images.downsized_large.url;
    //     // console.log(imageSource)
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //    fetchData();
    // }, [])

    const {gif , loading , fetchData} = useGif();
    
    function clickHandler(){
      fetchData();
    }

  return (
    <div className='random-component'>
        
        <h1 className='random_heading'>A Random GIF</h1>

        {
            loading? (<Spinner />) : (  <img src={gif} alt='photo'  className='gif_image'/>)
        }

        {/* <img src={gif} width="450px"  /> */}

        <button onClick={clickHandler} className='random_btn'>GENERATE</button>

    </div>
  )
}

export default Random