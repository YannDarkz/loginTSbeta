
import { useAuth } from "../../context/AuthProvider/useAuth"
import {ReactNode} from 'react'

export const ProtectedLayout = ({children}: {children: ReactNode}) => {
    const auth = useAuth()

    if(!auth.email) {
        return (
            <h1>Você não tem Permissão de Acesso!</h1>
        )
    }

    return <>{children}</>
}