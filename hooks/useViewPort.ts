import { useEffect, useState } from "react";
export const useViewport = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    useEffect(() => {
        const handleWindowResize = () =>
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { width: dimensions.width, height: dimensions.height };
};