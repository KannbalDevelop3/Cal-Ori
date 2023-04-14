import React from 'react'

const VideoEf = ({ src, stilovideo, height, width}) => {
    return (
        <video controls  width={width} height={height} preload="auto" className={`${stilovideo}`} >
            <source src={src} type="video/mp4" />
            Your browser does not support HTML video.
        </video>
    )
}

export default VideoEf