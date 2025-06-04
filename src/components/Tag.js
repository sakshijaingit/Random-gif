// import React from 'react'
import './Tag.css';
// import axios from 'axios';
import { useState } from 'react';
// import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
        const [tag, setTag] = useState("");

    // const [gif, setGif] = useState("car");
    // const [loading, setLoading] = useState(false)
     
    // console.log(API_KEY);
    // async function fetchData() {
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

    const {gif , loading , fetchData} = useGif(tag);

    
    function clickHandler(){
      fetchData(tag);
    }

    function changeHandler(event) {
        setTag(event.target.value);
    }

  return (
    <div className='tag-component'>
        
        <h1 className='tag'>Random {tag} GIF</h1>

        {
            loading? (<Spinner />) : (  <img src={gif} alt='photo' className='gif_image'/>)
        }

        <input
        className='tag-input'
        onChange={changeHandler}
        value={tag}
         />
         
        <button onClick={clickHandler} className='random_btn'>GENERATE</button>

    </div>
  )
}

export default Tag