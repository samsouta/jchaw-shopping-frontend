import React from 'react'
import Index from './routes/Index';
import NavbarH from './components/layout/navbar/NavbarH';
import Footer from './components/layout/footer/Footer';


const App: React.FC = () => {
  return (
    <div>
      <NavbarH/>
      <Index/>
      <div className=' mt-[100px]' ><Footer/></div> 
    </div>
  )
}

export default App;