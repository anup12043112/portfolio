import { createContext } from "react";

export const ProjectContext = createContext()

export function ContextProvider({children}){
    return(
        <ProjectContext.Provider>
            {children}
        </ProjectContext.Provider>
    )
}