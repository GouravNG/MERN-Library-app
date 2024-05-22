import { useState } from "react"

export const useViewAll = () => {
    const [isLoading, setIsLoading] = useState(false)
    const getViewAll = async () => {
        try {
            setIsLoading(true)
            const data = await fetch("/api/user/viewfullprofile")
            const viewAllData = await data?.json()
            if (viewAllData?.error) throw new Error(viewAllData.error)
            return viewAllData
        }
        catch (error) {
            console.log("Error in useViewAll", error.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { isLoading, getViewAll }
}