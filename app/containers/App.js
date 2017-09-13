import React, { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import {
	localCreateFeature,
	localDeleteFeature,
	localUpdateFeature,
} from '../actions/PageActions';
import {
	authorize,
	getUserInfo,
} from '../actions/authorization';

import TopMenuComponent from '../components/TopMenu';
// import NavBar from '../components/navBar'
import { generateUUID } from '../libs/utilities';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleFeatureClick = this.handleFeatureClick.bind(this);
		this.handleFeatureCreate = this.handleFeatureCreate.bind(this);
		this.handleDeleteFeature = this.handleDeleteFeature.bind(this);
		this.handleUpdateFeature = this.handleUpdateFeature.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.state = {
			activeFeatureId: '',
			updateModalIsOpen: false,
		};
	}

	handleLogin() {
		// this.props.authorize('test', 'test');
		this.props.getUserInfo();
	}

	handleDeleteFeature(id) {
		const needToDelete = confirm(`Вы уверены, что хотите удалить фичу с ид = ${id}?`);
		if (!needToDelete) {
			return null;
		}
		this.props.localDeleteFeature(id);
		this.setState({
			activeFeatureId: '',
		});
	}

	handleUpdateFeature(id) {
		const features = this.props.features;
		const activeFeature = features.find(feature => feature.id === id);
		if (!activeFeature) {
			return null;
		}
		const {
			title,
			description,
			// image_url
		} = activeFeature;

		const newTitle = prompt('Введите название фичи', title);
		const newDescription = prompt('Введите описание фичи', description);
		// let newImage = prompt('Введите адрес картинки фичи', image_url);

		if (newTitle && newTitle !== title) {
			this.props.localUpdateFeature(id, 'title', newTitle);
		}
		if (newDescription && newDescription !== description) {
			this.props.localUpdateFeature(id, 'description', newDescription);
		}
		// if ( newImage && newImage !== image_url ) {
		//	this.props.localUpdateFeature(id, 'image_url', newImage);
		// }
	}

	handleFeatureCreate() {
		const id = +generateUUID();
		const title = prompt('Введите имя');
		const description = prompt('Введите описание');
		const newFeature = {
			id,
			title,
			description,
			image_url: 'http://lorempixel.com/640/480/?34574',
			level: 1,
		};
		this.props.localCreateFeature(Immutable.fromJS(newFeature));
	}

	handleFeatureClick(featureId) {
		console.log('click on id = ', featureId); // TODO Remove
		this.setState({
			activeFeatureId: featureId,
		});
	}

	render() {
		const { activeFeatureId, updateModalIsOpen } = this.state;
		const { features, quests, authorization } = this.props;
		console.log('authorization.toJS() = ', authorization.toJS()); // TODO Remove
		const activeFeature = features.find(feature => feature.id == this.state.activeFeatureId);

		const activeQuests = quests[activeFeatureId] || [];

		return (
			<div>

				<div className='ui segment'>
					{/* <ModalCreateFeature /> */}
					{
						(activeFeatureId && updateModalIsOpen) &&

						<ModalUpdateFeature
							id={activeFeature.id}
							title={activeFeature.title}
							level={activeFeature.level}
							image_url={activeFeature.image_url}
							description={activeFeature.description}
							handleDeleteFeature={this.handleDeleteFeature}
							handleUpdateFeature={this.handleUpdateFeature}
						/>
					}
					<div
						id='templateList'
						className='ui inverted vertical visible uncover icon ui left sidebar menu'
						style={{
							width: `${200}px !important`,
							whiteSpace: 'nowrap',
							padding: `${5}px`,
							border: 'solid 1px',
						}}
					>
						{
							features.filter(feature => feature.is_deleted !== 1).map(feature => (<FeatureItem
								key={`feature_${feature.id}`}
								isActive={activeFeatureId === feature.id}
								id={feature.id}
								title={feature.title}
								level={feature.level}
								image_url={feature.image_url}
								handleFeatureClick={this.handleFeatureClick}
							/>))
						}
						<a id='buttonCreateFeature' className='item' onClick={this.handleFeatureCreate}>
							<i className='plus icon' />Add new feature
						</a>
					</div>

					<div className='ui basic segment'>
						<br />
						<br />

						<div className='ui container'>
							<TopMenuComponent
								handleLogin={this.handleLogin}
							/>
							{
								activeFeatureId &&
								<div id='templateColumn' className='ui raised very padded container'>

									<TemplateContainerUpSegment
										id={activeFeature.id}
										title={activeFeature.title}
										level={activeFeature.level}
										image_url={activeFeature.image_url}
										description={activeFeature.description}
										handleDeleteFeature={this.handleDeleteFeature}
										handleUpdateFeature={this.handleUpdateFeature}
									>
										{
											activeQuests.map(quest => (<QuestCard
												key={`${quest.id}_${quest.title}`}
												id={quest.id}
												title={quest.title}
												description={quest.description}
												level={quest.level}
												max_level={quest.max_level}
											/>))

										}
									</TemplateContainerUpSegment>

								</div>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}


class FeatureItem extends Component {
	constructor(props) {
		super(props);
	}

	handleClick(id) {
		if (this.props.handleFeatureClick) {
			this.props.handleFeatureClick(id);
		}
	}

	render() {
		const {
			id,
			// image_url,
			level,
			title,
			isActive,
		} = this.props;

		return (
			<a
				className={`item ${isActive ? 'active' : ''}`}
				onClick={this.handleClick.bind(this, id)}
			>
				<div className='ui teal label'>{level}</div>
				<span>{title}</span>
			</a>
		);
	}
}


class TemplateContainerUpSegment extends Component {
	constructor(props) {
		super(props);
	}

	handleDeleteFeature(id) {
		if (this.props.handleDeleteFeature) {
			this.props.handleDeleteFeature(id);
		}
	}

	handleUpdateFeature(id) {
		if (this.props.handleUpdateFeature) {
			this.props.handleUpdateFeature(id);
		}
	}

	render() {
		const {
			id,
			image_url,
			level,
			title,
			description,
		} = this.props;

		return (
			<div
				id='containerFeature{{id}}'
				className='ui bottom attached tab container active'
				data-tab='{{id}}'
			>
				<div className='ui container'>
					<div className='ui items'>
						<div className='item'>
							<div className='ui tiny image'>
								<img id='imageContainerFeature{{id}}' src={image_url} />
							</div>
							<div className='content'>
								<a id='titleContainerFeature{{id}}' className='header'>{title}</a>

								<div className='meta'>
									<span id='levelContainerFeature{{id}}'>{`уровень ${level}`}</span>
								</div>
								<div className='description'>
									<p id='descriptionContainerFeature{{id}}'>{description}</p>
								</div>
								<div className='extra'>
									<button
										className='ui quest post compact green icon button'
										title='add quest'
									>
										<i className='plus icon' />
									</button>
									<button
										className='ui feature update compact yellow icon button'
										title='update feature'
										onClick={this.handleUpdateFeature.bind(this, id)}
									>
										<i className='write icon' />
									</button>
									<button
										className='ui feature delete compact red icon button'
										title='delete feature'
										onClick={this.handleDeleteFeature.bind(this, id)}
									>
										<i className='remove circle outline icon' />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						id='templateListQuests{{id}}'
						className='ui list quests'
						style={{ whiteSpace: 'nowrap', padding: `${5}px`, border: 'solid 1px white' }}
					>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

class QuestCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			id,
			title,
			description,
			level,
			max_level,

		} = this.props;

		return (
			<div id='itemQuest{id}' className='item quest'>
				<div className='content'>
					<div id='titleQuest{id}' className='header'>{title}</div>
					<div className='description'>
						<p id='descriptionQuest{id}'>{description}</p>
						<div
							id='steps{id}'
							className='ui small teal progress'
							data-value={level}
							data-total={max_level}
							style={{ width: `${300}px` }}
						>
							<div className='bar' />
							<div className='label'>{`шагов ${level} из ${max_level} выполнено`}</div>
						</div>
					</div>
					<div className='extra'>
						<div className='ui left floated quest update icon button' title='update quest'>
							<i className='write icon' />
						</div>
						<div className='ui left floated quest delete icon button' title='delete quest'>
							<i className='trash icon' />
						</div>
						<div className='ui left floated step down icon button' title='step down'>
							<i className='minus circle icon' />
						</div>
						<div className='ui left floated step up icon button' title='step up'>
							<i className='add circle icon' />
						</div>
					</div>

				</div>
			</div>

		);
	}
}

class ModalCreateFeature extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='ui dimmer modals page transition visible active' style={{ display: 'block !important' }}>
				<div
					id='modalAuthorization'
					className='ui small modal transition visible active'
					style={{ marginTop: `${-126.5}px`, display: 'block !important' }}
				>
					<div className='header'>
						Create feature
					</div>
					<div className='content'>
						<form className='ui form create feature'>
							<div className='field'>
								<label>Title</label>
								<input name='titleCreateFeature' title='title' type='text' value='' />
							</div>
							<div className='field'>
								<label>Description</label>
								<input name='descriptionCreateFeature' title='description' type='text' value='' />
							</div>
							<div className='field'>
								<label>Image</label>
								<input
									name='imageUrlCreateFeature'
									title='imageUrl'
									type='text'
									value='http://lorempixel.com/100/100/'
								/>
							</div>
							<div className='ui error message' />
						</form>
					</div>
					<div className='actions'>
						<div className='ui positive button'>
							Create
						</div>
						<div className='ui black deny button'>
							Exit
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class ModalUpdateFeature extends Component {
	constructor(props) {
		super(props);
	}

	toggleUpdateModal() {
		if (this.props.toggleUpdateModal) {
			this.props.toggleUpdateModal();
		}
	}

	render() {
		const { title, description, imageUrl } = this.props;

		return (
			<div className='ui dimmer modals page transition visible active' style={{ display: 'block !important' }}>
				<div
					id='modalUpdateFeature'
					className='ui small modal transition visible active'
					style={{ marginTop: `${-126.5}px`, display: 'block !important' }}
				>
					<div className='header'>
						Update feature
					</div>
					<div className='content'>
						<form className='ui form update feature'>
							<div className='field'>
								<label>Title</label>
								<input name='titleUpdateFeature' title='title' type='text' value='' />
							</div>
							<div className='field'>
								<label>Description</label>
								<input name='descriptionUpdateFeature' title='description' type='text' value='' />
							</div>
							<div className='field'>
								<label>Image</label>
								<input
									name='imageUrlUpdateFeature'
									title='imageUrl'
									type='text'
									value=''
								/>
							</div>
							<div className='disabled field' style={{ display: 'none' }}>
								<label>featureId</label>
								<input name='featureIdUpdateFeature' title='featureId' type='text' value='' />
							</div>
							<div className='ui error message' />
						</form>
					</div>
					<div className='actions'>
						<div className='ui positive button'>
							Update
						</div>
						<div className='ui black deny button' onClick={this.toggleUpdateModal}>
							Exit
						</div>
					</div>
				</div>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		features: state.app.get('features').toJS(),
		quests: state.app.get('quests').toJS(),
		authorization: state.authorization,
	};
}

export default connect(mapStateToProps, {
	localCreateFeature,
	localDeleteFeature,
	localUpdateFeature,
	authorize,
	getUserInfo,
})(App);
