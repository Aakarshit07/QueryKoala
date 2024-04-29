import { useResultContext } from "../contexts/ResultContextProvider";
import useImageSearch from "../utils/useImageSearch";
import { Loading } from "./Loading";

function Images() {
    const  images = useImageSearch();
    const { isLoading } = useResultContext();
    if(isLoading) return <Loading />;
    return (
        <div className="p-4 flex flex-wrap justify-center items-center">
            {images && images?.map(({image, url, title, thumbnail}) => (
                <a className="p-3 md:p-5 w-56 h-64 m-2 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-2xl hover:bg-slate-400/50 dark:hover:bg-slate-500" href={url} key={thumbnail} target="_blank" rel="noreferrer">
                    <img className="w-full h-36 rounded-md overflow-hidden" src={image} alt={title} loading="lazy" />
                    <p className="w-36 break-words text-sm mt-2 text-ellipsis line-clamp-2 text-gray-700 dark:text-gray-300">
                        {title};
                    </p>
                </a>
            ))}
        </div>
    )
}
export default Images;