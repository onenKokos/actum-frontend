import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth < 1440) {
            setIsMobile(true);
        }
    }, [isMobile]);

    return {
        isMobile,
    };
};
