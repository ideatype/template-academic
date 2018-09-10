import React, { Component } from "react";
import './AppOverlay.css';

class AppOverlay extends Component {
	render() {
        return <div className="AppOverlay"><div className="container"><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div></div>;
	}
}

export default AppOverlay;