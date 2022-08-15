import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import HomeBottom from '../components/HomeBottom'
import { HELLO } from '../graphql/query'

const Home = () => {
    const { data, error } = useQuery(HELLO)
    useEffect(() => {
        if (error) console.log("error", error)
        if (data) console.log("data", data)

    }, [data, error])
    return (
        <HomeBottom />
    )
}

export default Home