import Delhi from '../../assets/delhi.jpg'
import Berlin from '../../assets/berlin.jpg'
import Paris from '../../assets/paris.jpg'
import Dubai from '../../assets/dubai.jpg'
import React from 'react'

const PopularLocations = () =>{

  const data = [
    {
      image : Delhi,
      city : "Delhi",
      numOfPlaces : 73,
      
    },
    {
      image : Berlin,
      city : "Berlin",
      numOfPlaces : 34,
    },
    {
      image : Paris,
      city : "Paris",
      numOfPlaces : 52,
    },
    {
      image : Dubai,
      city : "Dubai",
      numOfPlaces : 27,
    }
  ]

  return (
    <div className='h-full w-full my-36'>
      <div className='h-full w-5/6 mx-auto flex flex-col justify-start'>
      <h5 className='text-[20px] bg-blue-500 text-white rounded-full p-4 w-max'>
        Explor Top
      </h5>
        <h2 className='text-4xl text-slate-800 font-bold mt-6 mb-12'>
          Popular locations
        </h2>
        <div>
          {data?.map((place,idx)=>(
            <Card
            key ={idx}
            place = {place}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularLocations
