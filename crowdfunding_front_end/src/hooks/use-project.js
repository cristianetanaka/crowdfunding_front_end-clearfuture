import { useState, useEffect } from "react";
import getProject from "../api/get-project";

export default function useProject(projectid) {
    const [project, setProject] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getProject(projectid)
            .then((project) => {
                setProject(project);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [projectid]);
    
     return {project, isLoading, error};
}
