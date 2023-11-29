"use client"
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import { Providers } from "./GlobalRedux/provider";
import { io } from 'socket.io-client';
const inter = Inter({ subsets: ['latin'] });
const BASE_URL="http://192.168.43.29:7000"
const socket =io(BASE_URL)
// export const metadata = {
//   title: 'FOOD',
//   description: 'site for bachelors food',
// }

export default function RootLayout({ children }) {
  
  useEffect(()=>{
    if(socket){
      socket.on("order_recieved",(data)=>{
        console.log("data in socket received: " + JSON.stringify(data));
        let sound=new Audio("https://file-examples.com/storage/fe1134defc6538ed39b8efa/2017/11/file_example_MP3_700KB.mp3");
        sound.play();
        
      })
    }
  },[])
  return (
    <html lang="en">
      
      <body className={inter.className}><Providers>{children}</Providers>
      </body>
    </html>
  )
}
