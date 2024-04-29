import { useEffect } from "react";
import { useResultContext } from "../contexts/ResultContextProvider";
import {Loading} from "./Loading";


function Results() {
    const {getResults , results, isLoading, searchTerm} = useResultContext();

    useEffect(()=>{
        if(searchTerm) getResults();
    }, [searchTerm]);

    if(isLoading) return <Loading />;
    return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 px-4 py-6">
            {results && results?.map(({body, href, title}) => (
                <div key={title} className="md:w-9/12 w-full">
                    <a href={href} target="_blank" rel="noreferrer" >
                        <p className="text-xs">{href.length > 24 ? href.substring(0, 24) : href}</p>
                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
                        <p className="text-sm dark:text-gray-300 text-gray-700 text-ellipsis line-clamp-1 overflow-hidden">{body}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Results;