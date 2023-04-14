import ReactSlider from "react-slider";
import '../Slider/styles/Slider.css'
const Slider = ({ onChange, currentIndex }) => {
    return (
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            onChange={onChange}
            defaultValue={0}
            value={currentIndex}
            min={0}
            max={6}
            marks
            renderThumb={(props, state) => <div {...props}>Día {currentIndex + 1}</div>}
            renderMark={(props) => {
                if (props.key < currentIndex) {
                    props.className = "example-mark example-mark-completed";
                } else if (props.key === currentIndex) {
                    props.className = "example-mark example-mark-active";
                }
                return <span {...props} />;
            }}
            orientation="horizontal"
        />
    );
};

export default Slider;