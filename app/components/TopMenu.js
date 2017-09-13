import React, { Component } from 'react';

class TopMenu extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		if (this.props.handleLogin) {
			this.props.handleLogin();
		}
	}

	render() {
		return (
			<div className='ui fixed inverted top menu'>
				<a id='buttonLeftMenu' className='item'>Features</a>
				<div id='buttonUserInfo' className='ui dropdown item' style={{ display: 'none' }}>
					UserInfo
					<i className='dropdown icon' />
					<div className='menu'>
						<a id='userUsername' className='item' />
						<a id='userLevel' className='item' />
						<a id='userEmail' className='item' />
						<a id='buttonLogOut' className='item'>Log out</a>
					</div>
				</div>
				<a id='buttonSignIn' className='item' onClick={this.handleLogin}>Login</a>
				<a id='buttonRegister' className='item' style={{ display: 'none' }}>Register</a>
				<a id='buttonRefresh' className='item'>
					<i className='refresh icon' />
				</a>
				<a id='statusBar' className='item' style={{ display: 'none' }}>Идёт запрос к серверу</a>
			</div>
		);
	}
}

export default TopMenu;
