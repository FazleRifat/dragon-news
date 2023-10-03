import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategory] =useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    console.log(categories);
    return (
        <div>
            <h1 className="text-2xl">All Caterogy</h1>
            <ul>
            {
                categories.map(category =><li key={category.id} className="text-xl font-semibold ml-4 mt-5 active:bg-base-300 p-3 rounded-md"><Link>{category.name}</Link></li> )
            }
            </ul>
        </div>
    );
};

export default LeftSideNav;