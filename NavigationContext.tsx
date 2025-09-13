"use client"

import {createContext, useContext} from "react"
import {useRouter} from "next/navigation"

type NavigationContextType={
    navigate:(path:string)=>void
    replace:(path:string)=>void
}

const NavigationContext=createContext<NavigationContextType |null>(null)

export function NavigationProvider({children}:{children:React.ReactNode}){
    const router= useRouter()

    const navigate=(path:string)=>router.push(path)
    const replace= (path:string)=>router.replace(path)

    return(
        <NavigationContext.Provider value={{navigate,replace}}>
            {children}
        </NavigationContext.Provider>
    )
}
export function useNavigation(){
     const context = useContext(NavigationContext)
    if(!context){
        throw new Error("useNavigation must be used within navigationProvider")
    }
    return context as NavigationContextType
}