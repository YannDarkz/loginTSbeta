import { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { IAuthProvider, IContext, IUser } from './types';
import { LoginRequest, LoginReq, getUserLocalStorage, setUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()
    const navigate = useNavigate()

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, [])

    function authenticateI(email: string, password: string) {

        if (LoginReq(email, password)) {

            const payload = { email, token: "tokenDef" }

            setUser(payload)

            setUserLocalStorage(payload)

        } else {

            console.log('sem dados')
        }

    }

    // async function authenticate(email: string, password: string) {
    //     const response = await LoginRequest(email, password)

    //     const payload = { token: response.token, email}

    //     setUser(payload)

    //     setUserLocalStorage(payload)

    // }

    function logout() {
        setUser(null)
        setUserLocalStorage(null)

        navigate('/login')


    }

    return (
        <AuthContext.Provider value={{ ...user, authenticateI, logout }}>
            <button onClick={logout}>Sair</button>
            {children}
        </AuthContext.Provider>
    )

}