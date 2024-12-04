import React from 'react'
import Index from './routes/Index';
import NavbarH from './components/layout/navbar/NavbarH';


const App: React.FC = () => {
  return (
    <div>
      <NavbarH/>
      <Index/>
    </div>
  )
}

export default App;