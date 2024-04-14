import { useState } from "react"

export const useLogiing = () => {
    const [isLoading, SetisLoading] = useState(false)
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
            console.log(responce)
        }
        catch (err) {
            console.err(`Somethin went wrong`, err.message)
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