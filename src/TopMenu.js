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
import { Link } from 'react-router-dom';
import LocaleManager from './LocaleManager.js';
import './TopMenu.css';

class TopMenu extends Component {
	constructor(props) {
		super(props);
		this.handleLangChange = this.handleLangChange.bind(this);
	}

	handleLangChange(c, langCode) {
		LocaleManager.setLocale(langCode);
		window.location.reload();
	}

	render() {
		let localeList = LocaleManager.getLocaleList();
		let currentLangCode = LocaleManager.getLocale();
		let currentLangName = LocaleManager.getLocaleNameFromCode(currentLangCode);
		let passedEntries = this.props.entries;
		if (passedEntries.length >= 1 && passedEntries[0].title != "Home") {
			passedEntries.unshift({ title: "Home", value: "/" });
		}
		let entries = passedEntries.map((entry) => {
			if (Array.isArray(entry.value)) {
				return (
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							{entry.title}
						</DropdownToggle>
						<DropdownMenu right>
							{entry.value.map((subentry) => {
								return <DropdownItem><NavLink tag={Link} to={subentry.value}>{subentry.title}</NavLink></DropdownItem>
							})}
						</DropdownMenu>
					</UncontrolledDropdown>
				)
			} else {
				return (<NavItem>
					<NavLink tag={Link} to={entry.value}>
						{entry.title}
					</NavLink>
				</NavItem>);
			}
		}
		);
		return <Nav className="justify-content-end TopMenu container">
			{entries}
			<NavItem>&nbsp;&nbsp;</NavItem>
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					{currentLangName}
				</DropdownToggle>
				<DropdownMenu right>
					{Object.keys(localeList).map((langCode) => {
						let langName = localeList[langCode];
						if (langCode === LocaleManager.getLocale()) {
							return;
						}
						return <DropdownItem><NavLink tag={Link} to="#" onClick={(e) => this.handleLangChange(e, langCode)}>{langName}</NavLink></DropdownItem>
					})}
				</DropdownMenu>
			</UncontrolledDropdown>
			</Nav>;
	}
}

export default TopMenu;
