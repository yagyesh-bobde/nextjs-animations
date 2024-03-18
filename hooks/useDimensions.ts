import { useEffect, useState } from "react";

const useDimensions = () => {
    const [dimensions, setDimensions] = useState({ width : 0, height: 0 });

    const updateDimensions = () => {
        const { innerWidth, innerHeight } = window;
        setDimensions({ width: innerWidth, height: innerHeight });
    }

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);    
        }
    }, [])


    return dimensions;
}


export default useDimensions;