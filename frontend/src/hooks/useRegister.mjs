import { useState } from "react"
import { useAuthContext } from "../context/auth.context"

export const useRegister = () => {
    const [isLoading, SetisLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const handleRegister = async (requestBody) => {
        if (!clientSideValidation(requestBody)) return
        SetisLoading(true)
        try {
            const data = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody)
            })
            const registerResponce = await data.json()
            console.log(registerResponce)
            if (registerResponce.error) throw new Error(registerResponce.error)
            localStorage.setItem("logged-user", JSON.stringify(registerResponce))
            setAuthUser(registerResponce)
        }
        catch (err) {
            console.error(err.message)
        }
        finally {
            SetisLoading(false)
        }
    }
    return { isLoading, handleRegister }
}
const clientSideValidation = ({ firstname, lastname, email, password, confirmPassword }) => {
    if (!firstname || !lastname || !email || !password || !password || !confirmPassword) {
        console.error("Please fillin all the fields")
        return false
    }
    if (password !== confirmPassword) {
        console.error("Password and Confirm Password aren't matching")
        return false
    }
    return true
}