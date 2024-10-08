import { useEffect, useState } from "react";
import axios from "axios";
import { useUserAuth } from "../../../Context/UserAuthContext";
const FetchUserData=()=> {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useUserAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`http://localhost:8000/Users`);
        setData(response.filter((e)=>e.UID==user.uid));
        //console.log(data)
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [data]);
  return {
    data,
    loading,
  };
}

export default FetchUserData;
