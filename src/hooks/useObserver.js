import {useRef, useEffect} from "react";

export const useObserver = (ref, canLoad, enabled, callback) => {
    const observer = useRef();
    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        if (!enabled) return;

        const cb = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        }

        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);

    }, [enabled])
}