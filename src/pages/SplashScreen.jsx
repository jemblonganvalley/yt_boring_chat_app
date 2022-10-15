import React from "react";

export default function SplashScreen(){

    return (
        <main className="w-screen h-screen p-8 bg-gradient-to-t from-orange-700 to-orange-500 flex flex-col">
            <h1 className="text-[64px] text-white font-bold leading-10">
                Boring
                Chat App
            </h1>
       
            <p className="text-[16px] text-white font-semibold mt-4">
                Chat apapun yang kamu mau
                ke orang orang bosan
                diseluruh dunia..
            </p>

            <button className="w-full h-10 bg-black text-white mt-auto rounded-lg z-[100]">
                Login Now
            </button>

            <img src="https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=500" alt=""
                className="w-screen h-screen object-cover absolute opacity-25 top-0 left-0"
            />
        </main>
    )
}