import { useEffect, useState } from "react";

const CircularProgressIndicator = ({ progress }) => {

  return (
    <div className="rotating-container">
      <div className="rotating-box"></div>
    </div>
  );
};

export default  CircularProgressIndicator;
