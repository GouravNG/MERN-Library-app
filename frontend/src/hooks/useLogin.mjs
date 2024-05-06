import { useState } from "react"
import { useAuthContext } from "../context/auth.context"

export const useLogiing = () => {
    const [isLoading, SetisLoading] = useState(false)
    const {setAuthUser}=useAuthContext()
    const handleLogin = async (requestBody) => {
        if (!clientSideValidation(requestBody)) return
        SetisLoading(true)
        try {
            const data = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody)
            })
            const responce = await data.json()
            if (responce.error) throw new Error(responce.error)
            localStorage.setItem("logged-user",JSON.stringify(responce))
            setAuthUser(JSON.parse(localStorage.getItem('logged-user'))||"")
        }
        catch (err) { 
            console.error(`Somethin went wrong`, err.message)
            console.log("Error in UseLogin hook\n", err.message)
        }
        finally {
            SetisLoading(false)
        }
    }
    return { isLoading, handleLogin }
}

const clientSideValidation = ({ email, password }) => {
    if (!email || !password) {
        console.error("Please Fill in all the fields")
        return false
    }
    return true
}