import {createContext, useState} from "react";

export const AuthContext = createContext<AuthContextType | null>(null)
type AuthContextType = {
    user: string | null
    signIn:  (newUser: any, cb: () => void) => void
    signOut: (cb: () => void) => void
}

export const AuthProvider = (props: any) => {
    const {children} = props
    const [user, setUser] = useState<any>(null)
    const signIn = (newUser: any, cb: () => void) => {
        setUser(newUser)
        cb()
    }
    const signOut = (cb: () => void) => {
        setUser(null)
        cb()
    }

    const value: AuthContextType = {user, signIn, signOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
