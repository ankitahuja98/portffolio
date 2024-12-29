import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import "./ImageLoading.css";

const ImageLoading = ({ src, hash }) => {
  const [imageLoaded, setimageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setimageLoaded(true);
    };
    img.src = src;
  });

  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "block" }}>
        <Blurhash className="blurDiv" hash={hash}></Blurhash>
      </div>
      <img
        src={src}
        alt="MainPic"
        style={{ display: imageLoaded ? "block" : "none" }}
      ></img>
    </>
  );
};

export default ImageLoading;
