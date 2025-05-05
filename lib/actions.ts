"use server"

export const fetchMovie = async (id: string) => {
    try {
        const response = await fetch("http://localhost:3000/api/movie",
            {
                method: "POST",
                body: JSON.stringify({ id }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

export const fetchMovies = async () => {

    try {
        const response = await fetch("http://localhost:3000/api/movies",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}


export const fetchRandomMovie = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/randommovie",
            {
                method: "GET",
            }
        )
        const data = await response.json()
        return data

    } catch (error) {
        console.error(error)
        return null
    }
}