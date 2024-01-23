"use client";
import React, { useEffect } from "react";
const BootstrapProvider = ({ children }) => {
  
  //useEffect ClientSide da calısır, serverSide da calısmaz// Hooklar hep client'side calısır .
  //import'u aşağıda kullanmak için require

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <>{children}</>;
};
export default BootstrapProvider;
