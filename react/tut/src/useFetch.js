import {useEffect,useState} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error('could not fetch the data')
                }
                return response.json()

            })
            .then((data) => {
                setData(data)
                setIsPending(false)
            })
            .catch((e) => {setError(e.message);setIsPending(false);})

        },3000)

    },[])

    return{data,isPending,error}
}

export default useFetch