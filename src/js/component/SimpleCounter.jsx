import React from "react" ;
import PropTypes from "prop-types";
const SimpleCounter = (props) => {
    return (
        <div className= "bigDiv">
            <div><i class="far fa-clock"></i></div>
            <div>{Math.floor (props.number / 10000 % 10)}</div>
            <div>{Math.floor (props.number /1000 % 10)}</div>
            <div>{Math.floor (props.number /100 % 10)}</div>
            <div>{Math.floor (props.number /10 % 10)}</div>
            <div>{Math.floor (props.number /1 % 10)}</div>
        </div>
    );
};

SimpleCounter.propTypes = {
    number: PropTypes.number
};

SimpleCounter.defaultProps = {
    number:5
};



export default SimpleCounter;

