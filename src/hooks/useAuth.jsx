import React, { useState } from 'react'

export const useAuth = () => {

    const [isRegister, setIsRegister] = useState(false)

    const onRegister = () =>{        
        setIsRegister(!isRegister)
    }

    return {
        isRegister,
        onRegister
    }
}
