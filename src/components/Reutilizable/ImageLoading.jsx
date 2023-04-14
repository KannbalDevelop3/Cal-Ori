import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ImageLoading = ({ src, width, height, className }) => {
    return (
        <LazyLoadImage src={src} effect="blur" width={width ? width : '100%'} height={height ? height : 'auto'} className={className} />
    )
}

export default ImageLoading