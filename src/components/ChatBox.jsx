import React, { useState, useRef, useLayoutEffect } from 'react'
import { FiLogIn, FiSend, FiLogOut } from "react-icons/fi";
import { signInWithPopup, signOut } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { auth, provider, db } from '../../confic/firebase'
import BurgerMenu from './BurgerMenu';
import Cookies from 'js-cookie';



function ChatBox({ roomName, myMsg, setShowRoom }) {

  const input = useRef()
  const [userData, setUserData] = useState()

  const sendMsg = async () => {
    event.preventDefault()
    const message = input.current.value
    const messageRef = collection(db, "messages")
    if (message.trim() === "") return input.current.value = "";
    try {
      console.log(userData);
      await addDoc(messageRef, {
        msg: message,
        name: userData.userName,
        email: userData.email,
        profile: userData.profilePic,
        createdAt: serverTimestamp(),
        room: roomName
      })
      input.current.value = ""

    } catch (error) {
      console.log(error);
      input.current.value = ""
    }
  }




  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const { user } = res
      const userDetail = {
        userName: user.displayName,
        profilePic: user.photoURL,
        email: user.email
      }
      Cookies.set("user", JSON.stringify(userDetail))
      setUserData(JSON.parse(Cookies.get("user")))
    } catch (error) {
      console.log(error)
    }
  }

  const signout = () => {
    Cookies.remove("user")
    setUserData()
  
  }

  useLayoutEffect(() => {
    const user = Cookies.get("user")
    if (user) return setUserData(JSON.parse(user))
  }, [])
  return (
    <div className="divide-y-[3px] p-[10px] box-border">

      <header className="flex justify-between items-center h-[10vh] p-[10px]">
        <h1 className="text-[2rem] font-bold" >{userData ? userData.userName : "login please"}</h1>

        <div className="flex gap-3 justify-center">
          {userData ?
            <FiLogOut className='cursor-pointer' size={30} id='login' onClick={signout} /> :
            <FiLogIn className='cursor-pointer' size={30} id='login' onClick={signIn} />
          }
          <label htmlFor="login" className='hidden sm:block cursor-pointer'>
            {userData ?
              "Log Out" :
              "Login"
            }
          </label>
          <BurgerMenu setShowRoom={setShowRoom} />
        </div>
      </header>

      <main className=' h-[75vh] p-[10px] overflow-y-auto'>
        {userData&&myMsg.map((item) => userData.email === item.email ?
          <div className="my-[20px] text-right">
            <h1 style={{ maxWidth: '40%' }} className="inline p-[10px] text-[1.3rem] rounded-lg text-white bg-gradient-to-r from-[#FC4F4F] to-[#EF3333]">{item.msg}</h1>
          </div> :
          <div className="my-[20px] text-left">
            <p className="flex flex-col max-w-[40%]  p-[10px] rounded-lg bg-[#EBF4FB]">
              <label className="text-[.7rem] capitalize font-bold">{item.name}</label>
              <label className="text-[1.3rem]" >{item.msg}</label>
            </p>
          </div>
        )}
      </main>

      <form onSubmit={sendMsg} className='w-[100%] h-[13vh] p-[10px] flex items-center justify-center gap-[12px] box-border'>
        <input maxLength={60} type="text" className="basis-2/4 h-[100%] text-[1.6rem] outline-0" placeholder="enter your msg..." ref={input} />
        <button className="px-[12px] py-[10px] rounded-3xl bg-gradient-to-r from-[#FC4F4F] to-[#EF3333]  hover:from-cyan-500 hover:to-blue-500"><FiSend size={30} /></button>
      </form>

    </div>
  )
}

export default ChatBox