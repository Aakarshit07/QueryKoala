import ReactPlayer from "react-player";
import useSearchVideos from "../utils/useVideosSearch";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

const Videos = () => {
  const videos  = useSearchVideos();
  const { isLoading } = useResultContext();
  if(isLoading) return <Loading />;

  return (
    <div className="flex flex-wrap p-4 justify-center items-center gap-5">
      {videos && videos?.map(({image_token, title, content}) => (
        <div key={image_token} className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-52 w-56 hover:shadow-xl bg-white dark:bg-gray-700 hover:bg-slate-400/50 dark:hover:bg-slate-500" loading="lazy">
          <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg">
            <ReactPlayer url={content} controls width={"100%"} height={"100%"}/>
          </div>
          <div className="px-5 pt-2 flex flex-col">
            <h2 className="text-sm text-gray-700 dark:text-gray-300 overflow-hidden text-ellipsis line-clamp-2">{title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Videos;


// {
//   "content": "https://www.youtube.com/watch?v=Pyv0tMm5i_w",
//   "description": "️ Full Course 27 hours (Beginner + Advanced + ES6) with Certification: 👉 https://greatstack.dev/go/javascript-course ️ Beginner + Advance + ES6 + Notes ️ 30 Projects With Source Code ️ Course Completion certificate ️ Chat Support Complete JavaScript Fundamental Course For Beginners With 6 JavaScript Projects And JavaScript Notes # ...",
//   "duration": "7:39:45",
//   "embed_html": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/Pyv0tMm5i_w?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
//   "embed_url": "https://www.youtube.com/embed/Pyv0tMm5i_w?autoplay=1",
//   "image_token": "216959973cbd36f6deaf5ebc8569e0fa5f6ff87aadfd2f9e77e93588b65a9f1a",
//   "images": {
//       "large": "https://tse2.mm.bing.net/th?id=OVP.9XdLG309IblVOMSdqQ_N8QHgFo&pid=Api",
//       "medium": "https://tse2.mm.bing.net/th?id=OVP.9XdLG309IblVOMSdqQ_N8QHgFo&pid=Api",
//       "motion": "https://tse3.mm.bing.net/th?id=OM2.6v-qKAlBJEDhBA&pid=Api",
//       "small": "https://tse2.mm.bing.net/th?id=OVP.9XdLG309IblVOMSdqQ_N8QHgFo&pid=Api"
//   },
//   "provider": "Bing",
//   "published": "2024-01-15T13:30:09.0000000",
//   "publisher": "YouTube",
//   "statistics": {
//       "viewCount": 84054
//   },
//   "title": "JavaScript Full Course For Beginners With JavaScript Projects Tutorial And Notes 2024",
//   "uploader": "GreatStack"
// },



