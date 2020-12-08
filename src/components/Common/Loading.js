import React, { PureComponent } from "react";

import fadeIn from "../../javascript/FadeIn"

class Loading extends PureComponent {
    componentDidMount() {
        this.speed = fadeIn(this.$loading)
    }

    componentWillUnmount() {

    }

    render() {
        return (<div className="loader" ref={
            element => this.$loading = element
        } > {
            this.props.message || "Cargando..."
        }</div>)
    }
}

export default Loading
