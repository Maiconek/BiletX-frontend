import React, {createContext, useEffect, useState} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log(user)
    })

    const registerUser = async (userData) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if(!response.ok) {
                throw new Error('Response was not ok')
            }

            const responseData = await response.json()
            console.log(responseData)
            setUser(responseData.user.username)

        } catch (error) {
            console.error('Błąd podczas rejestracji:', error)
        }
    }

    const loginUser = async (userData) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if(!response.ok) {
                throw new Error('Response was not ok')
            }

            const responseData = await response.json()
            console.log(responseData)
            setUser(responseData.user.username)

        } catch (error) {
            console.error('Błąd podczas logowania:', error)
        }
    }

    return (
        <UserContext.Provider value={{user, registerUser, loginUser}}>
            {children}
        </UserContext.Provider>
    )
}