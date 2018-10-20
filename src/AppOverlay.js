import React, { Component } from "react";
import './AppOverlay.css';

class AppOverlay extends Component {
	render() {
        return <div><div className="AppOverlayContainer"><div className="AppOverlay"><div className="OverlayContainer"><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div></div></div><div class="hide_while_loading">{this.props.children}</div></div>;
	}
}

export default AppOverlay;