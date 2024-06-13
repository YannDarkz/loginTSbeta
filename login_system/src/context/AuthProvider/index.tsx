import { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { IAuthProvider, IContext, IUser } from './types';
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from './util';

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



    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password)

        const payload = { token: response.token, email}

        setUser(payload)

        setUserLocalStorage(payload)

    }

    function logout() {
        setUser(null)
        setUserLocalStorage(null)

        navigate('/login')


    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            <button onClick={logout}>Sair</button>
            {children}
        </AuthContext.Provider>
    )

}