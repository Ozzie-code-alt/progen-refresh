"use client"
import React from "react";
import ReactPlayer from "react-player";

const PrometheusPlayer = () => {
  return (
    <div className="flex h-auto w-full py-10  overflow-hidden items-center justify-center ">
      <ReactPlayer
        url={
          "https://www.facebook.com/watch/?v=208857277659564&paipv=0&eav=AfZnkXw8Agx0_8SofVSoaVrc6iLN64-s3su8ZL3G7KX70DYIXT4HnIHtHRzSxNQNs8A&ref=embed_video&_rdr"
        }
        playIcon={true}
        playing={true}
        controls
        width="95%"
        height="90%"
      />
    </div>
  );
};

export default PrometheusPlayer;
