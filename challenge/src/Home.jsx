import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/challenge2")}>Challenge 2</button>

      <button onClick={() => navigate("/challenge3")}>Challenge 3</button>
    </div>
  );
};

export default Home;
