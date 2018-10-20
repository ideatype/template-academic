import React, { Component } from "react";
import './AppOverlay.css';

class AppOverlay extends Component {
	render() {
        return <div><div className="AppOverlayContainer"><div className="AppOverlay"><div className="OverlayContainer"><div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div></div></div></div><div class="hide_while_loading">{this.props.children}</div></div>;
	}
}

export default AppOverlay;