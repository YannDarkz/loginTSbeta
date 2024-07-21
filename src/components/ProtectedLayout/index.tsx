
import { useAuth } from "../../context/AuthProvider/useAuth"
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ProtectedLayout = ({ children }: { children: ReactNode }) => {
    const auth = useAuth()
    const navigate = useNavigate()


    useEffect(() => {
        if (!auth.email) {
            const timeOut = setTimeout(() => {
                console.log('vai pro login');
                navigate('/login')

            }, 1500)

            return () => clearTimeout(timeOut)
        }

    }, [auth.email, navigate])

    if (!auth.email) {

        return (
            <h1>Você não tem Permissão de Acesso!</h1>
        )
    }

    return <>{children}</>
}

