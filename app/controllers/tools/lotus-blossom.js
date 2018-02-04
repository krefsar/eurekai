import Controller from '@ember/controller';

export default Controller.extend({
	aiOpen: false,
	modalOpen: true,
	step: 1,
	topLeft: {
		color: 'green',
		value: '',
		topLeft: '',
		top: '',
		topRight: '',
		left: '',
		right: '',
		bottomLeft: '',
		bottom: '',
		bottomRight: ''
	},
	top: {
		color: 'red',
		value: '',
		topLeft: '',
		top: '',
		topRight: '',
		left: '',
		right: '',
		bottomLeft: '',
		bottom: '',
		bottomRight: ''
	},
	topRight: {
		color: 'yellow',
		value: '',
		topLeft: '',
		top: '',
		topRight: '',
		left: '',
		right: '',
		bottomLeft: '',
		bottom: '',
		bottomRight: ''
	},
	left: {
		color: 'blue',
		value: '',
		topLeft: '',
		top: '',
		topRight: '',
		left: '',
		right: '',
		bottomLeft: '',
		bottom: '',
		bottomRight: ''
	},
	lotusCenter: {
		color: 'purple',
		value: '',
		topLeft: {
			value: '',
			color: 'green'
		},
		top: {
			value: '',
			color: 'red',
		},
		topRight: {
			value: '',
			color: 'yellow'
		},
		left: {
			value: '',
			color: 'blue'
		},
		right: {
			value: '',
			color: 'orange'
		},
		bottomLeft: {
			value: '',
			color: 'pink'
		},
		bottom: {
			value: '',
			color: 'brown'
		},
		bottomRight: {
			value: '',
			color: 'white'
		}
	},
	right: {
		color: 'orange',
		value: '',
		topLeft: '',
		top: '',
		topRight: '',
		left: '',
		right: '',
		bottomLeft: '',
		bottom: '',
		bottomRight: ''
	},
	bottomLeft: {
		color: 'pink',
		value: '',
		topLeft: '',
		top: '',
		topRight: '',
		left: '',
		right: '',
		bottomLeft: '',
		bottom: '',
		bottomRight: ''
	},
	bottom: {
		color: 'brown',
		value: '',
		topLeft: '',
		top: '',
		topRight: '',
		left: '',
		right: '',
		bottomLeft: '',
		bottom: '',
		bottomRight: ''
	},
	bottomRight: {
		color: 'white',
		value: '',
		topLeft: '',
		top: '',
		topRight: '',
		left: '',
		right: '',
		bottomLeft: '',
		bottom: '',
		bottomRight: ''
	},

	actions: {
		closeModal() {
			this.set('modalOpen', false);
		},
		enhance() {
			console.log('calling enhance');
			this.set('lotusCenter.topRight.value', 'sauce');
			this.set('lotusCenter.left.value', 'veggie');
			this.set('lotusCenter.right.value', 'hot');
			this.set('lotusCenter.bottomLeft.value', 'buns');
			this.set('lotusCenter.bottom.value', 'fries');
			this.set('lotusCenter.bottomRight.value', 'grill');
		},
		submitLotusCenter() {
			this.incrementProperty('step');
		}
	}
});
