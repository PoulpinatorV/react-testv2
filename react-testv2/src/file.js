import React from "react"
import Slider from "react-slick"

const fileTypes = [
    {
      id: 1,
      name: "Image",
    },
    {
      id: 2,
      name: "PDF",
    },
    {
      id: 3,
      name: "Vidéo youtube",
    },
  ];
  
  const files = [
    {
      id: 1,
      name: "Image 1",
      type: 1,
      file: "", //.jpg, .png, .pdf ou url youtube
    },
    {
      id: 2,
      name: "Image 2",
      type: 2,
      file: "", //.jpg, .png, .pdf ou url youtube
    },
    {
      id: 3,
      name: "Image 3",
      type: 3,
      file: "", //.jpg, .png, .pdf ou url youtube
    },
  ];
  
  const FilePreview = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <div>
        {/* { mettre un slider  */}
        <Slider {...settings}> 
        
        {files.map((file) => (
          <>{/* composant filePreview */}</>
        ))}
        </Slider>
      </div>
    );
  };
  
  export default FilePreview;