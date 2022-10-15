import React, {useState} from "react";
import {CgMenuGridO} from "react-icons/cg"
import {AiOutlineLogout, AiOutlineSetting} from "react-icons/ai"

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

    // toggle menu
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }

    return (
        <main className="w-screen h-screen flex flex-col">
            <header className="w-full h-16 px-6 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-700 fixed top-0 left-0">
                <div className="flex gap-2 text-white items-center">
                    <img src="https://api.multiavatar.com/asdfasdf.svg" alt="avatar"
                        className="w-10 h-10"
                    />
                    <h1>@fadliselaz</h1>
                </div>

                <CgMenuGridO className="text-2xl text-white" onClick={toggleMenu} />
            </header>

            {showMenu && <ChatMenu />}

            <div className="w-full flex flex-col-reverse bg-gray-100 py-[70px] flex-1 px-3 gap-2">
                <div className="w-auto p-4 bg-white flex flex-col rounded-lg shadow-md">
                    <p>Hello ini saya lho</p>
                </div>

                <div className="w-auto p-4 bg-white flex flex-col rounded-lg shadow-md">
                    <p>Hello ini saya lagi lho</p>
                </div>

                <div className="w-auto p-4 bg-white flex flex-col rounded-lg shadow-md">
                    <p>Hello ini saya lagi lho</p>
                </div>

                <div className="w-auto p-4 bg-white flex flex-col rounded-lg shadow-md">
                    <p>Hello ini saya lagi lho</p>
                </div>
            </div>

            <form className="w-full h-16 flex px-6 items-center bg-gradient-to-r from-orange-500 to-orange-700 fixed bottom-0 left-0 gap-1">
                <input type="text" className="rounded-full px-4 bg-white h-10 flex-1" />
                <button className="h-10 w-10 bg-blue-500 text-white rounded-full">
                    {">"}
                </button>
            </form>
        </main>
    )
}