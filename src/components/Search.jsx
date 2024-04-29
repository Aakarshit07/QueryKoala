import { useEffect, useState } from "react";
import { useResultContext } from "../contexts/ResultContextProvider";
import Links from "./Links";
import { useDebounce } from "use-debounce";


const Search = () => {
    
    const [text, setText] = useState("")
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 400)
    
    useEffect(() => {
        if(debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue])


    return (
        <div className="relative sm:ml-48 md:ml-72 sm:mt-10 mt-3">
            <div>
                <input 
                    className="p-2 w-full rounded-xl border-2 dark:text-white dark:bg-transparent hover:shadow-xl dark:placeholder:text-white outline-none border-neutral-500" 
                    type="text" 
                    placeholder="Search QueryKoala" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                /> 
                {!text && (
                    <button type="button" className="absolute top-1.5 right-4 text-md font-bold text-red-700" 
                    onClick={() => setText("")}
                    >
                     X   
                    </button>
                )}
            </div>
            <Links />
        </div>
    )
}

export default Search;

{/* <div className="flex justify-between items-center bg-black/75 border-neutral-300 p-1 w-1/2 m-1 rounded-md shadow-xl"> */}