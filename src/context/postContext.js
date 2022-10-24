import {createContext, useState} from 'react'
export const postContext =createContext (null)


function Post ({children}){
    const [postdetails,setPostdetails] = useState()

    return(
        <postContext.Provider value={{postdetails,setPostdetails}}>
            {children}
        </postContext.Provider>
    )
}
export default Post