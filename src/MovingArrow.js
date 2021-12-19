import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltDown} from "@fortawesome/free-solid-svg-icons";

const easeOutExpo = (x) => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

class MovingArrow extends Component{
    constructor(props){
        super(props);
        this.state = {
            angle: 0
        }
    }

    async componentDidMount() {
        let angle = Math.floor(Math.random() * 360);
        let _angle = angle;
        let target = this.props.angle + 360 + (360-angle);
        let j = 60;
        for(let i = 0; i<j; i++){
            angle = _angle + target*easeOutExpo(i/j)
            await this.setState({angle: angle});
            await new Promise(resolve => setTimeout(resolve, 1000/60));
        }
    }

    render() {
        return (
            <div style={this.props.style || {}}>
                <FontAwesomeIcon icon={faLongArrowAltDown} style={{transform: `rotate(${this.state.angle}deg)`}}/>
            </div>
        );
    }
}

export default MovingArrow;