import React from 'react'
import ContactBox from '../components/UI/contact/ContactBox'
import Address from '../components/UI/contact/Address'


const Contact: React.FC = () => {
  return (
    <div className=' mx-5' >
        <ContactBox/>
        <Address/>
    </div>
  )
}

export default Contact