import React from "react";

const Video = ({video,children}) => {
  return (
    <div className='relative h-screen' >
    <video className="w-full h-full object-fill" autoplay="autoplay" muted loop>
      <source  src={video} type="video/mp4"/>
    </video>
      {children}
    </div>
  );
};

export default Video;
