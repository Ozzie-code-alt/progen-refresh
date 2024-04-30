"use client"
import { useState, useEffect } from "react";

const getDeviceType = () => {
  const userAgent =
    typeof window.navigator === "undefined" ? "" : navigator.userAgent;
  if (/Mobi/.test(userAgent) || /Android/i.test(userAgent)) {
    return "mobile";
  }
  return "desktop";
};

const useDeviceDetect = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile: deviceType === "mobile" };
};

export default useDeviceDetect;
