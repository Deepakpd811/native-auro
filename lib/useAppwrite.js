import { useEffect, useState } from "react";
import { Alert } from "react-native";


const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchdata = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
  
      setData(response.documents);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {

    fetchdata();
  }, []);

  const refetch =()=> fetchdata();

  return { data,isLoading,refetch };
};



export default useAppwrite;
