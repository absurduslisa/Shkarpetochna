import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        // npm i axios
        try {
            const { data } = await fetch ();
            setUser(data.result)
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const value = {
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError
    }
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
    const contex = useContext(AuthContext);
    if (!contex) {
        throw new Error ('useAuth must be used with an AuthProvider');
    }

    return contex;
}