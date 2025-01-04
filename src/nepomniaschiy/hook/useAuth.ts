import {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvider";

export function useAuth() {
    // return useContext(AuthContext)
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}