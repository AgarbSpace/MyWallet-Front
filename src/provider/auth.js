import React, { useEffect, useState } from "react";


export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [token, setToken] = useState({
        token: ""
    })

    useEffect(() => {
        const tokenStorage = localStorage.getItem("token")

        if(tokenStorage){
            setToken(JSON.parse(tokenStorage));

        }else{
            setToken({
                token: ""
            });

        }

    }, [])


    return (
        <AuthContext.Provider value = {{token, setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useToken = () => React.useContext(AuthContext);