import { useEffect, useRef } from "react";

const useScrollOnShow = (isVisible, block = "start") => {
    const elementRef = useRef(null);

    useEffect(() => {
        if (isVisible && elementRef.current) {
            elementRef.current.scrollIntoView({
                behavior: "smooth",
                block: block,
            });
        }
    }, [isVisible, block]);

    return elementRef;
};

export default useScrollOnShow;
