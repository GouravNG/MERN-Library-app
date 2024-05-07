import { useAuthContext } from "../context/auth.context"

export const useLogout = () => {
    const { setAuthUser } = useAuthContext()
    const handleLogout = async () => {
        const data = await fetch("/api/auth/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
        const responceMessage = await data.json()
        if (responceMessage.error) return console.error(responceMessage.error)
        setAuthUser()
        console.log(responceMessage.message)
    }
    return handleLogout
}