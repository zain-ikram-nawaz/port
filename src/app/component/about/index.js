import React from 'react'
import { BsFillTelephoneFill,BsEnvelopeAtFill,BsGeoAltFill  } from "react-icons/bs";

export default function About() {
  return (
    <div className='about-bg'>
    <div className='about container mx-auto'>
        <div>
            <h1>Hey!!!</h1>
        </div>
        <div className='xl:flex'>
            <div className='more-about'>
                <h2>More About me</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet inventore, natus deleniti, voluptate maiores exercitationem sit pariatur nemo consequatur aperiam, quam laboriosam sunt. Mollitia tempore nisi doloremque officiis, sit voluptatum</p>
                <p ><i className='w-2'><BsGeoAltFill/></i>P-425 Block "S" North Nazimabad Karachi sindh, Pakistan</p>
               
                <p>  <i className='w-2'><BsEnvelopeAtFill
                /></i>zainikram704@gmail.com</p>
               
                <p>  <i className='w-2'><BsFillTelephoneFill /></i>0330-3042267</p>
            </div>
            <div className='drop'>
                <h2>Drop us a line</h2>
                <form action="mailto:zainikram704@gmail.com" method="POST">
                   <label>
                   <input type="text"  placeholder='Enter your name'/>
                   </label>
                   <label>
                   <input type="email" placeholder='Enter your email'/>
                   </label>
                   <label>
                   <textarea name="" id="" cols="40" rows="5" placeholder='Enter your message'>

</textarea>
                   </label>
                   
                    <button type='submit'> Let us know</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
