import Controller from '@ember/controller';

export default Controller.extend({
	aiOpen: false,
	modalOpen: true,
	step: 1,

	actions: {
		closeModal() {
			this.set('modalOpen', false);
		},
		submitLotusCenter() {
			console.log('done');
		}
	}
});
