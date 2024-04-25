import { useState } from "react"

export const useGetAllBooks = () => {
    const [isloading, setIsLoading] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const getAllBooks = async () => {
        try {
            setIsLoading(true)
            const data = await fetch("/api/books/getAllBooks")
            const AllBooks = await data.json()
            if (!AllBooks.length) setIsEmpty(true)
            if (AllBooks.error) throw new Error(AllBooks.error)
            return AllBooks
        } catch (error) {
            console.error("Something went wrong")
            console.error(error.message)
        }
        finally {
            setIsLoading(false)
        }


    }
    return { isloading, isEmpty, getAllBooks }
}