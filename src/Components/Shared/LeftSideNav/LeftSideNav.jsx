import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BsCalendar4} from"react-icons/bs"
import card1 from '../../../assets/1.png'
import card2 from '../../../assets/2.png'
import card3 from '../../../assets/3.png'

const LeftSideNav = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h1 className="text-2xl">All Caterogy</h1>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className="text-xl font-semibold ml-4 mt-5 active:bg-base-300 p-3 rounded-md"
          >
            <Link>{category.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <div>
          <div className="md:md:w-80 w-full bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full"
                src={card1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup!
              </h2>
              <div className="flex justify-center items-center gap-5">
                <h3>Sports</h3>
                <p className="flex items-center gap-2 text-gray-400"><span><BsCalendar4></BsCalendar4></span>Jan 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-80 w-full bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full"
                src={card2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup!
              </h2>
              <div className="flex justify-center items-center gap-5">
                <h3>Sports</h3>
                <p className="flex items-center gap-2 text-gray-400"><span><BsCalendar4></BsCalendar4></span>Jan 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-80 w-full bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full"
                src={card3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup!
              </h2>
              <div className="flex justify-center items-center gap-5">
                <h3>Sports</h3>
                <p className="flex items-center gap-2 text-gray-400"><span><BsCalendar4></BsCalendar4></span>Jan 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
