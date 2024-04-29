import { useEffect, useState } from "react";
import { useResultContext } from "../contexts/ResultContextProvider";

const useSearchVideos = () => {  
    const [videos, setVideos] = useState([]);
    const {setIsLoading, searchTerm} = useResultContext()

    const fetchVideos = async () => {
        try {
            setIsLoading(true);   
            const response = await fetch("https://google-api31.p.rapidapi.com/videosearch", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'f478a75d6cmsh72f4a08427fc4cfp17e3dbjsn27ae32f698f4',
                    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                body: JSON.stringify({
                    "text":`${searchTerm}`,
                    "safesearch": "off",
                    "timelimit": "",
                    "duration": "",
                    "resolution": "",
                    "region": "wt-wt",
                    "max_results": 15
                })
            }
        );
            const jsonData = await response.json();
            setVideos(jsonData.result);
            setIsLoading(false); 
        } catch (error) {
            console.error("Failed to fetch the images",error);
            setIsLoading(false); 
    
        }
    }
        
    useEffect(() => {
        fetchVideos();
    }, [searchTerm]);

    return videos;
    
}
export default useSearchVideos;