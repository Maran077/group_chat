import React, { useRef, useState } from 'react'
import ChatBox from './components/ChatBox'
import Chatrooms from './components/Chatrooms'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../confic/firebase'




function App() {
  const roomNameRef=useRef()

  const [roomName, setRoomName] = useState()
  const [myMsg, setMyMsg] = useState([])
  const [showRoom, setShowRoom] = useState(true)
 
  const getAllMsg = async (room) => {
    try {
      const messageRef = collection(db, "messages")
      const queryMsg = query(messageRef, where("room", "==", room))
      onSnapshot(queryMsg, (snapShot) => {
        setMyMsg(snapShot.docs.map(doc => doc.data()).sort((a, b) => a.createdAt - b.createdAt))
      })
      
    } catch (e) {
      console.log(e)
    }

  }
  addEventListener("resize",()=>{
    if(innerWidth>639)return roomNameRef.current.style.translate=0;
  })
  return (
    <div className=" flex ">
      <div ref={roomNameRef} style={{translate:`${showRoom?-220:0}px`, transition:".4s ease-in-out" }} className={`absolute sm:static w-[220px] sm:basis-1/4 sm:translate-x-0 sm:translate-y-0 `}>

        <Chatrooms setRoomName={setRoomName} getAllMsg={getAllMsg} />
      </div> 
      <div className=" w-[100dvw]  m-auto  sm:basis-3/4">

        <ChatBox roomName={roomName} myMsg={myMsg} setShowRoom={setShowRoom} />
      </div>
    </div>
  )
}

export default App
