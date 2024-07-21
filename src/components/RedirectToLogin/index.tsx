import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RedirectToLogin = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/login')

    }, [navigate])

    return null

}

export default RedirectToLogin