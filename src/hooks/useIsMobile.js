import React, {useEffect, useState} from 'react';

const media = matchMedia('(max-width: 767px)');

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(media.matches);

    useEffect(() => {
        const onMediaChange = (event) => {
            setIsMobile(event.matches)
        }
        media.addEventListener('change',onMediaChange);
        return () => {
            media.removeEventListener('change', onMediaChange)
        }
    }, []);
    return isMobile;
};

export default useIsMobile;