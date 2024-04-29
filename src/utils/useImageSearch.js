import { useEffect, useState } from "react";
import { useResultContext } from "../contexts/ResultContextProvider";

const useImageSearch = () => {  
    const [images, setImages] = useState([]);
    const {setIsLoading, searchTerm} = useResultContext()

    const fetcImages = async () => {
        try {
            setIsLoading(true);   
            const response = await fetch("https://google-api31.p.rapidapi.com/imagesearch", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                body: JSON.stringify({
                    "text":`${searchTerm}`,
                    "safesearch": "off",
                    "region": "wt-wt",
                    "color": "",
                    "size": "",
                    "type_image": "",
                    "layout": "",
                    "max_results": 15
                })
            });
            const jsonData = await response.json();
            setImages(jsonData.result);
            setIsLoading(false); 
        } catch (error) {
            console.error("Failed to fetch the images",error);
            setIsLoading(false); 
        }
    }
        
    useEffect(() => {
        if(searchTerm) fetcImages();
    }, [searchTerm]);

    return images;
    
}
export default useImageSearch;