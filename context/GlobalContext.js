import { useState, useContext, useEffect, createContext } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoading, setisLoading] = useState(true);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [user, setUser] = useState(null);

    

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setIsLogedIn(true);
                    setUser(res);
                } else {
                    setIsLogedIn(false);
                    setUser(null);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setisLoading(false);
            });
    }, []);

    return (
        <GlobalContext.Provider value={{ isLoading, isLogedIn, setIsLogedIn, user, setUser }}>
            {children}
        </GlobalContext.Provider>
        
    );
};

export default GlobalProvider;
