import React from 'react'
import About_me from '../components/UI/About/About_me'
import About_mission from '../components/UI/About/About_mission'
import About_Our_Values from '../components/UI/About/About_Our_Values'
import AboutOurTeams from '../components/UI/About/AboutOurTeams'
import AboutJoinOurTeam from '../components/UI/About/AboutJoinOurTeam'


const About: React.FC = () => {
  return (
    <div className=' mx-2' >
      <About_me/>
      <About_mission/>
      <About_Our_Values/>
      {/* <AboutTrust/> */}
      <AboutOurTeams/>
      <AboutJoinOurTeam/>
    </div>
  )
}

export default About