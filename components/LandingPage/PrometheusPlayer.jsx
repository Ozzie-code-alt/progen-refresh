"use client"
import React from "react";
import ReactPlayer from "react-player";

const PrometheusPlayer = () => {
  return (
    <div className="flex items-center justify-center player-wrapper">
      <ReactPlayer
        url={
          "https://www.facebook.com/watch/?v=208857277659564&paipv=0&eav=AfZnkXw8Agx0_8SofVSoaVrc6iLN64-s3su8ZL3G7KX70DYIXT4HnIHtHRzSxNQNs8A&ref=embed_video&_rdr"
        }
        playIcon={true}
        playing={true}
        controls
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default PrometheusPlayer;
