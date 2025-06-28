import { useEffect } from "react"

export const useTitle = (title) => {

useEffect(()=>{
window.document.title = `Emotion Tracker | ${title}  `
},[title])

 return null
}
