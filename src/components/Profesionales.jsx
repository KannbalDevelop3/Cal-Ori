import React, { useEffect, useState } from 'react'
import EbookStepPro from "./profesionales/EbookStepPro"
import errorImage from './assets/images/mobile-rotate-rotation-icon.png'
import ImageLoading from './Reutilizable/ImageLoading';
const Profesionales = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    return (
        <>
            {
                windowSize.innerWidth < 480 ?
                    (
                        <>
                            <div className="error-vertical__container">
                                <div className="error-vertical__grid">
                                    <ImageLoading src={errorImage} className='error-vertical__imagen-error pulsee' width='100%' />
                                    <h1 className="error-vertical__text ">
                                        Para poder ver el contenido de Cal-Ori por favor gira tu dispositivo de manera horizontal.
                                    </h1>
                                </div>
                            </div>
                        </>
                    )
                    :
                    <EbookStepPro />
            }
        </>
    )
}

export default Profesionales