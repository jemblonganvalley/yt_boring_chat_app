import React, {useState} from "react";
import {CgMenuGridO} from "react-icons/cg"
import {AiOutlineLogout, AiOutlineSetting} from "react-icons/ai"
import moment from "moment";

function ChatMenu(){
    return (
        <div className="w-[30%] flex flex-col fixed top-[70px] right-2 bg-white shadow-lg">
            <div className="flex h-10 w-full justify-between px-3 items-center">
                <AiOutlineSetting /> Setting
            </div>
            <div className="flex h-10 w-full justify-between px-3 items-center">
                <AiOutlineLogout /> Logout
            </div>
        </div>
    )
}


export default function Chat(){

    //state
    const [showMenu,setShowMenu] = useState(false)
    const [message, setMessage] = useState([])
    const [signedUser,setSignedUser] = useState(JSON.parse(localStorage.getItem("boring_chat_user")))

    // toggle menu
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }

    const handleMessage = (e)=>{
        e.preventDefault()
        let msg = e.target.message.value
        let user = JSON.parse(localStorage.getItem("boring_chat_user"))
        e.target.message.value = ""
        setMessage([...message, {
            id : Date.now(),
            message : msg,
            createdAt : Date.now(),
            user : user
        }])
    }

    return (
        <main className="w-screen h-screen flex flex-col">
            <header className="w-full h-16 px-6 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-700 fixed top-0 left-0">
                <div className="flex gap-2 text-white items-center">
                    <img src={signedUser.avatar} alt="avatar"
                        className="w-10 h-10"
                    />
                    <h1>@{signedUser.username}</h1>
                </div>

                <CgMenuGridO className="text-2xl text-white" onClick={toggleMenu} />
            </header>

            {showMenu && <ChatMenu />}

            <div className="w-full mt-auto flex flex-col py-[80px] px-3 gap-2">
                {message.map((e)=>{
                    return (
                        <div className="w-auto p-4 bg-white flex flex-col rounded-lg shadow-md max-w-[40%] ml-auto" key={e.id}>
                            <p className="text-right">{e.message}</p>

                            <div className="mt-4 flex gap-2 items-center">
                                <img src={e.user.avatar} alt="" className="w-5 h-5" />
                                <div className="flex flex-col text-gray-400">
                                    <small className="text-[8px]">{e.user.username}</small>
                                    <small className="text-[8px]">{moment(e.createdAt).format("dddd DD/MM/YYYY hh:mm")}</small>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <form className="w-full h-16 flex px-6 items-center bg-gradient-to-r from-orange-500 to-orange-700 fixed bottom-0 left-0 gap-1" onSubmit={handleMessage}>
                <input type="text" className="rounded-full px-4 bg-white h-10 flex-1" id="message" />
                <button className="h-10 w-10 bg-blue-500 text-white rounded-full">
                    {">"}
                </button>
            </form>
        </main>
    )
}