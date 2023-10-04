import { useEffect, useState } from "react";
import { PiBookmarkSimple } from "react-icons/pi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

const News = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div >
        <h1 className="text-xl font-semibold text-center md:text-left">Dragon News</h1>
      {allNews.map((news) => (
        <div key={news.id}>
          <div className="card w-full bg-base-100 shadow-xl mt-5">
            <div className="bg-base-300 p-5 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <img src={news.author.img} className="w-10 rounded-full" alt="avatar" />
                </div>
                <div><h1 className="text-xl">{news.author.name}</h1>
                <p>{news.author.published_date}</p></div>
              </div>
              <div className="flex items-center text-xl gap-3">
                <PiBookmarkSimple></PiBookmarkSimple>
                <AiOutlineShareAlt></AiOutlineShareAlt>
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                {news.title}
              </h2>
              <figure>
                <img className="w-full" src={news.image_url} alt="Shoes" />
              </figure>
              <p className="text-gray-500 ml-4">
                {news.details.slice(0,300)}
              </p>
              <p className="ml-4 text-orange-400"><Link to={`/details/${news._id}`}>Read more....</Link></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
