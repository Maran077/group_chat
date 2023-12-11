import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { MdMeetingRoom } from 'react-icons/md';

function Chatrooms({ setRoomName, getAllMsg }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const chatCard = `bg-[#EBF4FB]  h-[100px] text-[#ffffff] border-y-[3px] flex items-center gap-3 `;

  const joinRoom = (room) => {
    let user = Cookies.get("user")
    if (!user) return alert('login first');
    setRoomName(room);
    getAllMsg(room);
    setSelectedRoom(room);
  };

  return (
    <div className="flex flex-col w-1/1 divide-y-4 h-[100vh] bg-[#E2EEF7]">
      <div className="p-4 flex items-center gap-2">
        <MdMeetingRoom size={30} />
        <h1 className="text-3xl capitalize font-bold text-gradient-to-r from-[#FC4F4F] to-[#EF3333] ">
          joinroom
        </h1>
      </div>

      <div
        onClick={(e) => joinRoom('anime')}
        className={`${chatCard} ${selectedRoom === 'anime' ? 'bg-red-500' : 'hover:bg-[#ffffff]'}`}
      >
         <img src="https://i.pinimg.com/564x/0c/23/f4/0c23f49ee9e93683ec0770071702f078.jpg" alt="anime" className="w-1/3 h-[100%] bg-cover" />
         <div className='w-2/3 h-[100%]'>
            <h1 className={` font-bold text-[1.5rem]  text-black 1 ${selectedRoom === 'anime' ? 'text-white' : ''} `}>Anime</h1>
            <p className={`font-bold text-[.7rem] text-gray-500 ${selectedRoom === 'anime' ? 'text-white' : ''} `}>Enter a world of limitless imagination.</p>
            </div>
      </div>

      <div
        onClick={(e) => joinRoom('series')}
        className={`${chatCard} ${selectedRoom === 'series' ? 'bg-red-500' : 'hover:bg-[#ffffff]'}`}
      >
        <img src="https://i.pinimg.com/564x/07/c1/f3/07c1f305586ad8b33e2c39eeb19f928b.jpg" className="w-1/3 h-[100%]" />
        <div className='w-2/3 h-[100%]'>
            <h1 className={`font-bold text-[1.5rem]  text-black 1 ${selectedRoom === 'series' ? 'text-white' : ''} `}>Series</h1>
            <p className={`font-bold text-[.7rem] text-gray-500 ${selectedRoom === 'series' ? 'text-white' : ''} `}>Where every episode sparks a new story.</p>
            </div>
      </div>

      <div
        onClick={(e) => joinRoom('movies')}
        className={`${chatCard} ${selectedRoom === 'movies' ? 'bg-red-500' : 'hover:bg-[#ffffff]'}`}
      >
         <img src="https://i.pinimg.com/564x/14/91/54/149154a4ad038de0c18347d9e7c0d2e5.jpg" className="w-1/3 h-[100%]" />
         <div className='w-2/3 h-[100%]'>
            <h1 className={`font-bold text-[1.5rem]  text-black 1 ${selectedRoom === 'movies' ? 'text-white' : ''} `}>Movies</h1>
            <p className={`font-bold text-[.7rem] text-gray-500 ${selectedRoom === 'movies' ? 'text-white' : ''} `}>Where screens light up with endless adventures.</p>
            </div>
      </div>

      <div
        onClick={(e) => joinRoom('gaming')}
        className={`${chatCard} ${selectedRoom === 'gaming' ? 'bg-red-500' : 'hover:bg-[#ffffff]'}`}
      >
        <img src="https://i.pinimg.com/564x/5d/19/23/5d1923cf3e2a0fa90af95b8e48fb1494.jpg" className="w-1/3 h-[100%]" />
            <div className='w-2/3 h-[100%]'>
            <h1 className={`font-bold text-[1.5rem]  text-black 1 ${selectedRoom === 'gaming' ? 'text-white' : ''} `}>Gaming</h1>
            <p className={`font-bold text-[.7rem] text-gray-500 ${selectedRoom === 'gaming' ? 'text-white' : ''} `}>Unleash the player within, embark on endless quests.</p>
            </div>
      </div>
    </div>
  );
}

export default Chatrooms;
