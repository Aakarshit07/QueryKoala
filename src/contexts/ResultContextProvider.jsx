/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
const ResultContext = createContext();
export const ResultContextProvider  = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://google-api31.p.rapidapi.com/websearch", {
                method: 'POST',
                headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'f478a75d6cmsh72f4a08427fc4cfp17e3dbjsn27ae32f698f4',
                'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                body: JSON.stringify({
                text: `${searchTerm}`, 
                safesearch: 'off', 
                timelimit: '',
                region: 'wt-wt',
                max_results: 20
                })
            });
            
            const data = await response.json();
            console.log("data:", data);
            setResults(data.result);
            setIsLoading(false);
        } catch (error) {
          console.error("Failed to fetch data", error);
        } finally {
          setIsLoading(false);
        }
      };

    return (
      <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading, setIsLoading}}>
        {children}
      </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);