import {useWindowSizes} from 'react-use-window-sizes'
import Confetti from 'react-confetti'
const ConfettiGif = () => {
    const { width, height } = useWindowSizes()
    return (
        <Confetti
            width={width}
            height={height}
            style={{zIndex: '99'}}
        />
    )
}

export default ConfettiGif
