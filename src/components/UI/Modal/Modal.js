import React, {Component} from "react";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Aux>
                <div 
                style = {{
                    transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: this.props.show ? 1 : 0   
                }}
                className = {classes.Modal}>
                    {this.props.children}
                </div>
                <Backdrop show = {this.props.show} clicked = {this.props.modalClosed} />
            </Aux>
        );
    }
}

export default Modal;