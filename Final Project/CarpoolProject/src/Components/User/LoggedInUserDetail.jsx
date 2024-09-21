import axios from "axios";
import React, { useEffect, useState } from "react";

const GetUsers = async () => {
    
  const [UserData, setUserData] = useState();
  try {
    const response = await axios.get(`http://localhost:8000/Users`);
     setUserData(response.data.filter((e) => e.UID == user.uid));
  } catch (error) {
    console.log(error);
  }
};

export default UserData;