import Controller from '@ember/controller';

export default Controller.extend({
	aiOpen: false,
	modalOpen: true,

	actions: {
		closeModal() {
			this.set('modalOpen', false);
		}
	}
});
