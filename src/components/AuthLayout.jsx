import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Container} from './index'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate('/all-posts')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <div className="w-full py-8 mt-4 text-center">
        <Container>
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Loading...
                    </h1>
                </div>
            </div>
        </Container>
    </div> : <>{children};</>
}

