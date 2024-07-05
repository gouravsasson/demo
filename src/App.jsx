import React, { useEffect } from "react";
import vid1 from "./assets/8_Accessible_on_all_platforms.mp4";
import vid2 from "./assets/2_Location.mp4";
import vid3 from "./assets/3_Exterior (1).mp4";
import vid4 from "./assets/4_360.mp4";
import { gsap } from "gsap";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "./assets/portfolio/1.webp";
import img2 from "./assets/portfolio/2.webp";
import img3 from "./assets/portfolio/3.webp";
import img4 from "./assets/portfolio/4.webp";
import img5 from "./assets/portfolio/5.webp";
import img6 from "./assets/portfolio/6.webp";
import img7 from "./assets/portfolio/7.webp";
import img8 from "./assets/portfolio/8.webp";
import img9 from "./assets/portfolio/9.webp";
import img10 from "./assets/portfolio/10.webp";
import img11 from "./assets/portfolio/11.webp";
import img12 from "./assets/portfolio/12.webp";
import img13 from "./assets/portfolio/13.webp";
import img14 from "./assets/portfolio/14.webp";
import img15 from "./assets/portfolio/15.webp";
import img16 from "./assets/portfolio/16.webp";
import img17 from "./assets/portfolio/17.webp";
import img18 from "./assets/portfolio/18.webp";
import img19 from "./assets/portfolio/19.webp";
import img20 from "./assets/portfolio/20.webp";
import img21 from "./assets/portfolio/21.webp";
import img22 from "./assets/portfolio/22.webp";
import img23 from "./assets/portfolio/23.webp";
import img24 from "./assets/portfolio/24.webp";
import img25 from "./assets/portfolio/25.webp";
import img26 from "./assets/portfolio/26.webp";
import img27 from "./assets/portfolio/27.webp";
import { UilArrowCircleLeft } from "@iconscout/react-unicons";
import { UilArrowCircleRight } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";
import './work.css'


const itemData = [
  { img: img1, title: "Image 1", rows: 8, cols: 2, rows1: 2, cols1: 2 },
  { img: img24, title: "Image 24", rows: 6, cols: 2, rows1: 2, cols1: 2 },
  { img: img4, title: "Image 4", rows: 5, cols: 2, rows1: 2, cols1: 2 },
  
  
  { img: img3, title: "Image 3", rows: 7, cols: 2, rows1: 2, cols1: 2 },
  { img: img13, title: "Image 13", rows: 8, cols: 2, rows1: 2, cols1: 2 },
  { img: img11, title: "Image 11", rows: 4, cols: 2, rows1: 2, cols1: 2 },
  { img: img6, title: "Image 6", rows: 4, cols: 2, rows1: 2, cols1: 2 },
  
  { img: img10, title: "Image 10", rows: 5, cols: 2, rows1: 2, cols1: 2 },
  { img: img20, title: "Image 20", rows: 6, cols: 2, rows1: 2, cols1: 2 },
  { img: img25, title: "Image 25", rows: 10, cols: 2, rows1: 2, cols1: 2 },
  { img: img19, title: "Image 19", rows: 8, cols: 2, rows1: 2, cols1: 2 },
  { img: img15, title: "Image 15", rows: 7, cols: 2, rows1: 2, cols1: 2 },
  { img: img8, title: "Image 8", rows: 6, cols: 2, rows1: 2, cols1: 2 },
  
  { img: img21, title: "Image 21", rows: 7, cols: 2, rows1: 2, cols1: 2 },
  
  { img: img9, title: "Image 9", rows: 7, cols: 2, rows1: 2, cols1: 2 },
  { img: img22, title: "Image 22", rows: 5, cols: 2, rows1: 2, cols1: 2 },
  { img: img26, title: "Image 26", rows: 6, cols: 2, rows1: 2, cols1: 2 },
  { img: img23, title: "Image 23", rows: 4, cols: 2, rows1: 2, cols1: 2 },
  { img: img18, title: "Image 18", rows: 6, cols: 2, rows1: 2, cols1: 2 },
  { img: img7, title: "Image 7", rows: 8, cols: 2, rows1: 2, cols1: 2 },
  { img: img16, title: "Image 16", rows: 5, cols: 2, rows1: 2, cols1: 2 },
  { img: img17, title: "Image 17", rows: 4, cols: 2, rows1: 2, cols1: 2 },
  { img: img27, title: "Image 27", rows: 6, cols: 2, rows1: 2, cols1: 2 },
  { img: img5, title: "Image 5", rows: 6, cols: 2, rows1: 2, cols1: 2 },
  { img: img14, title: "Image 14", rows: 6, cols: 2, rows1: 2, cols1: 2 },
  
  { img: img12, title: "Image 12", rows: 10, cols: 2, rows1: 2, cols1: 2 },
  { img: img2, title: "Image 2", rows: 6, cols: 2, rows1: 2, cols1: 2 },
];


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function App() {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( itemData.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === itemData.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      ".paragraph",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div className="sticky top-0 left-0 right-0 h-[49px] bg-black bg-opacity-40 z-10">
          {/* Navbar content goes here */}
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            src={vid1}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          ></video>
          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h1 className="heading text-6xl font-inter font-medium text-white text-center">
            THE TOWER
          </h1>
          <p className="paragraph text-xl font-inter text-white text-center max-w-2xl">
            The S Tower represents a luxurious and aspirational undertaking that
            incorporates upscale elegance and refinement in every aspect of its
            design
          </p>
        </div>
      </div>

      <div className="py-[56px] flex items-start justify-center gap-32 bg-gradient-to-r from-[#4D4939] to-black">
        <div className="mt-10">
          <h1 className=" text-3xl font-inter font-medium text-white">
            Location
          </h1>

          <p className=" py-5 text-md font-inter text-[#cacaca]  max-w-xl">
            Designed map with the location of <br />
            the development.
          </p>

          <p className="  text-md font-inter text-[#cacaca]  max-w-xl">
            Get to know about the distance and <br /> traveling time from the
            development <br /> to the landmarks of the city.
          </p>
        </div>

        <div>
          <video src={vid2} className=" w-[800px]" autoPlay loop muted></video>
        </div>
      </div>

      <div className="py-[56px] flex items-start justify-center gap-32 bg-gradient-to-r from-[#635f4a] to-[#242424]">
        <div>
          <video src={vid3} className=" w-[800px]" autoPlay loop muted></video>
        </div>

        <div className="mt-10">
          <h1 className=" text-3xl font-inter font-medium text-white">
            Exterior
          </h1>

          <p className=" py-5 text-md font-inter text-[#cacaca]  max-w-xl">
            Explore the tower forma bird's-eye <br />
            view perspective.
          </p>

          <p className="  text-md font-inter text-[#cacaca]  max-w-xl">
            Filter units by type or views, select <br /> floors for walkthrough
            of the units. <br /> Availability is connected to the CRM <br />{" "}
            System, showing the most actual <br /> data in real time.
          </p>
        </div>
      </div>

      <div className="py-[56px] flex items-start justify-center gap-32 bg-gradient-to-r from-[#635f4a] to-[#242424]">
        <div className="mt-10">
          <h1 className=" text-3xl font-inter font-medium text-white">
            VR 360
          </h1>

          <p className=" py-5 text-md font-inter text-[#cacaca]  max-w-xl">
          Discover the project in stunning <br /> detail through 360 panoramic views <br />that can be viewed with VR <br />headsets.
          </p>

          
        </div>
        <div>
          <video src={vid4} className=" w-[800px]" autoPlay loop muted></video>
        </div>
      </div>


      <div className="py-[56px] flex items-start justify-center gap-32 bg-gradient-to-r from-[#4d4939] to-[#131313]">
        <div>
          <iframe className=" w-[800px] h-[450px] " src="https://kuula.co/share/5Tvq1/collection/7cLxN?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1" frameborder="0"></iframe>
        </div>

        <div className="mt-10">
          <h1 className=" text-3xl font-inter font-medium text-white">
          Explore <br /> Individual <br /> Apartments
          </h1>

          <p className=" py-5 text-md font-inter text-[#cacaca]  max-w-xl">
          Interactive 3D provides a detailed <br /> view of yet-unbuilt apartments.
          </p>

          <p className="  text-md font-inter text-[#cacaca]  max-w-xl">
            Filter units by type or views, select <br /> floors for walkthrough
            of the units. <br /> Availability is connected to the CRM <br />{" "}
            System, showing the most actual <br /> data in real time.
          </p>
        </div>
      </div>


      <div className="  bg-gradient-to-r from-[#4d4939] to-[#41403d]">
        <div className=" text-center">
          <h1 className=" pt-20 text-4xl font-inter font-medium text-white">Renders</h1>
          <p className=" my-5 text-center  text-md font-inter text-[#cacaca]">Visualization of a beautifully designed tower with exterior splendor views and interiors of apartments</p>
        </div>

        <div>
        <div>
  <div className="portfolio-container mx-10 bg-transparent">
    
    {openModal && (
      <div className="sliderWrap">
        <UilTimes className="btnClose" onClick={handleCloseModal} />
        <UilArrowCircleLeft className="btnPrev" onClick={prevSlide} />
        <UilArrowCircleRight className="btnNext" onClick={nextSlide} />
        <div className="fullScreenImage">
          <img src={itemData[slideNumber].img} alt="" />
        </div>
      </div>
    )}

    <ImageList
      sx={{ width: 1, height: 1, background: "transparent", padding: 2 }}
      variant="quilted"
      gap={20}
      cols={4}
      rowHeight={121}
      className="galleryWrap"
    >
      {itemData &&
        itemData.map((item, index) => (
          <ImageListItem
            className="single overflow-hidden"
            onClick={() => handleOpenModal(index)}
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              className="hover:scale-110 overflow-hidden cursor-pointer duration-700 ease-in-out"
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>
  </div>
</div>

  
  
  
  
        </div>
      </div>

      
    </>
  );
}

export default App;
