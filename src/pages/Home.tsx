import React from 'react'
import Home_1 from '../components/UI/home/Home_1'
import Home_2 from '../components/UI/home/Home_2'
import Home_3 from '../components/UI/home/Home_3'
import Home_4 from '../components/UI/home/Home_4'
import Home_5 from '../components/UI/home/Home_5'
import Home_6 from '../components/UI/home/Home_6'
import Home_7 from '../components/UI/home/Home_7'
import Home_8 from '../components/UI/home/Home_8'
import Home_9 from '../components/UI/home/Home_9'


const Home: React.FC = () => {
  return (
    <div className=' flex flex-col gap-y-28 px-2 mt-4' >
      <Home_1/>
      <Home_2/> 
      <Home_3/>
      <Home_4/>
      <Home_5/>
      <Home_6/>
      <Home_7/>
      <Home_8/>
      <Home_9/>
    </div>
  )
}

export default Home