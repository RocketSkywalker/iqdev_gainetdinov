import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-neutral-800 h-screen flex justify-center items-center">
        <div className="flex flex-col">
            <div className="flex mb-4">
                <button className="w-40 h-14 bg-green-600 rounded-md text-white text-lg font-semibold">TEST TASK</button>
            </div>
            <p className="text-white text-xs font-extralight opacity-40 mb-1">by Ruslan Gainetdinov</p>
            <div className="flex mb-8 h-24 w-[512px] rounded-md bg-white justify-center items-center font-bold text-5xl text-neutral-700">JUNIOR FRONTEND</div>
            <div className="flex justify-end">
                <Link to="/Calendar" className="flex items-center justify-center w-40 h-14 bg-sky-500 rounded-md text-white text-lg font-semibold">CALENDAR</Link>
            </div>
        </div>
    </div>
  )
}

export default Home