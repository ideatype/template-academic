import React, { Component } from "react";
import {
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import './TopMenu.css';

class TopMenu extends Component {
	render() {
		let passedEntries = this.props.entries;
		passedEntries.unshift({ title: "Home", value: "/" });
		let entries = passedEntries.map((entry) => {
			if (Array.isArray(entry.value)) {
				return (
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							{entry.title}
						</DropdownToggle>
						<DropdownMenu right>
							{entry.value.map((subentry) => {
								return <DropdownItem><NavLink href={subentry.value}>{subentry.title}</NavLink></DropdownItem>
							})}
						</DropdownMenu>
					</UncontrolledDropdown>
				)
			} else {
				return (<NavItem>
					<NavLink href={entry.value}>
						{entry.title}
					</NavLink>
				</NavItem>);
			}
		}
		);
		return <Nav className="justify-content-end TopMenu container">
				{entries}
			</Nav>;
	}
}

export default TopMenu;
