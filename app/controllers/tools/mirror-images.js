import Controller from '@ember/controller';

export default Controller.extend({
	modalOpen: true,

	actions: {
		closeModal() {
			this.set('modalOpen', false);
		}
	}
});
