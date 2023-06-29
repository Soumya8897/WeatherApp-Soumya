import axios from 'axios';
import 'tailwindcss/tailwind.css'
import {Inter} from 'next/font/google'
import Head from 'next/head';
import Image from 'next/image';
import {useState} from 'react';
import {BsSearch} from 'react-icons/bs';


export default function Home() {

  const [location,setlocation]=useState('')
  const [weather,setWeather]=useState('')

  const getWeather=async()=>{
  const api_key='215c3bc4af924cebbd6105353232906'
  const api_url=' http://api.weatherapi.com/v1/current.json?key='+api_key+'&q='+location

  if(location){
    try{
      const res = await fetch(api_url)
      const data = await res.json()
    
      if (data && res.status!=400 ) {
        const api_data = {
          country: data.location.country,
          city: data.location.name,
          temp: data.current.temp_f,
          humidity: data.current.humidity,
          wind: data.current.wind_mph,
          gust: data.current.gust_mph,
          visibility: data.current.vis_miles,
          condition: data.current.condition.text,
          img: data.current.condition.icon
        }
       
        setWeather(<>
          <div className="text-center text-2xl p-2">{api_data.city}</div>
          <div className="flex justify-center">
            <div className="flow-root">
              <div className="float-left"><img src={api_data.img} width="80" height="80" alt="Condition" /></div>
              <div className="float-left text-6xl degrees">{api_data.temp}</div>
            </div>
          </div>
          <div className="text-center text-gray-600">{api_data.condition}</div>
          <div className="flow-root p-2">
            <div className="float-left text-gray-600">Humidity: {api_data.humidity} %</div>
            <div className="float-right text-gray-600">Wind: {api_data.wind} <span className="">mph</span></div>
            <div className="float-left text-gray-600">Visibility: {api_data.visibility} mi</div>
            <div className="float-right text-gray-600">Gust: {api_data.gust} mph</div>
          </div>
        </>)

        setlocation('')

        console.log(data);
      }else{
        setWeather(
          <>
          
                
                <font color="red">Invalid Entry Please enter a valid location</font>
                
          </>
        )
      }
      
    }catch(error){
      console.log(error);

     
    }
  }else{
    //
  }
 
}
const handleKeyUp = (key) => {
  if (key === "Enter") {
    getWeather()
  }
}
    return (
      <>
      <nav className='flex items-center justify-center py-4 bg-gray-100 w-full m-0 opacity-90'>
      <Image src='https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' 
       
       className='object-cover -z-0' layout='fill'/>
        <div className='relative flex'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/><path d="M9 4H7v3H4v2h3v3h2V9h3V7H9V4z"/></svg>
        </div>
       
        <input className='block bg-slate-700 text-white rounded-lg opacity-70 pl-10 p-2 '
        type="text" 
        id="location"
        value={location}
        onChange={(e) => setlocation(e.target.value)} 
        onKeyUp={(e) => handleKeyUp(e.key)}
        placeholder="Location {ie,Paris}"/>
        
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 p-2.5 rounded-lg' id="search" onClick={getWeather}> 
        GO  
        </button>
      </div>

        </nav>
       
       
          
       
    {  weather &&
        <div className="flex w-full p-20 justify-center">
          <div className="w-full max-w-xs">
            <div className="mb-4">
              <div className="bg-white shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4 opacity-80">
                {weather}
                 </div>
              </div>
            </div>
          </div>
   }
      
        
      
     
   </>
    )
  }