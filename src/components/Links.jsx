import { NavLink } from "react-router-dom"

const links = [
    { url: "/", text: "🔎 Text" },
    { url: "/images", text: "📷 Images" },
    { url: "/videos", text: "📺 videos" },
]

function Links() {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-2">
        {links.map(({url, text}) => (
            <NavLink to={url} className="text-blue-700 dark:text-blue-300 border-b-2 border-blue-700 pb-2 m-2 mb-0" key={url}>
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Links;

{/* <NavLink to={url} ClassName={` ${isActive === url ? text-blue-700 : ""}`} key={url}/> */}
