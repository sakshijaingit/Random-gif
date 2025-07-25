import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;




const useGif = (tag) => {

       const [gif, setGif] = useState("car");
    const [loading, setLoading] = useState(false)

    const tagMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const randomMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
     
    console.log(API_KEY);
    async function fetchData(tag) {
        setLoading(true);
        const {data} = await axios.get(tag? tagMemeUrl : randomMemeUrl);
        // console.log(output);
        const imageSource= data.data.images.downsized_large.url;
        // console.log(imageSource)
        setGif(imageSource);
        setLoading(false);
    }


// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
       fetchData('car');
    }, [])

    return({gif ,  loading , fetchData})

}

export default useGif