import React from 'react';
import img1 from '../src/assets/1616132105_187.jpg'
import img2 from '../src/assets/floor-plan-of-a-house-with-a-pool.png'

function App() {
  return (
    <div className="">
      {/* First Compartment */}
      <div className="  h-screen  bg-gradient-to-r from-[#4c4838] to-black flex  items-center justify-center text-white ">
        
        <div className=' flex gap-20'>
        <div className=' flex flex-col gap-6 mt-5'>
        <h1 className=" font-inter font-bold text-4xl ">Exterior</h1>
        
        <p className="font-inter font-normal text-[#d8d8d8] text-lg ">Filter units by type or views, select <br /> floors for walkthrough of the units.<br/> Availability is connected to the CRM <br /> System, showing the most actual <br /> data in real time.</p>

        </div>
        <img src={img1} alt="Bird’s-eye view of the tower" className="h-[485px] " />


        </div>
      </div>

      {/* Placeholder for the rest of the compartments */}
      <div className="  h-screen  bg-gradient-to-r from-[#3b382d] to-black flex  items-center justify-center text-white ">
        <div className=' flex gap-20'>
      <iframe
          src="https://kuula.co/share/collection/7Fjz9?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1"
          width="865"
          height="485"
          allowFullScreen
          className="border-none"
        ></iframe>
        
        <div className=' flex flex-col gap-6 mt-5'>
        <h1 className=" font-inter font-bold text-4xl ">VR 360</h1>
        <p className="font-inter font-normal text-[#d8d8d8] text-lg ">Discover the project in stunning <br /> detail through 360 panoramic views <br /> that can be viewed with VR <br /> headsets.</p>
        {/* <p className="font-inter font-normal text-[#d8d8d8] text-lg ">Filter units by type or views, select <br /> floors for walkthrough of the units.<br/> Availability is connected to the CRM <br /> System, showing the most actual <br /> data in real time.</p> */}

        </div>

        </div>
        
      </div>




      <div className="  h-screen  bg-gradient-to-r from-[#4c4838] to-black flex  items-center justify-around text-white p-52">
        
      <div className=' flex gap-20'>
        <div className=' flex flex-col gap-6 mt-5'>
        <h1 className=" font-inter font-bold text-4xl ">Explore <br />Individual <br /> Apartments</h1>
        <p className="font-inter font-normal text-[#d8d8d8] text-lg "> <br /> view perspective.</p>
        <p className="font-inter font-normal text-[#d8d8d8] text-lg ">Interactive 3D provides<br /> a  detailed view of yet-unbuilt apartments.</p>

        </div>
        <img src={img2} alt="Bird’s-eye view of the tower" className="h-[485px] " />
        </div>
      </div>
    </div>
  );
}

export default App;
