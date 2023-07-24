import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `LearnLair-${title}`
    },[title]);
}
export default useTitle;