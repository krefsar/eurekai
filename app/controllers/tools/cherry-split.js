import Controller from '@ember/controller';

export default Controller.extend({
	editing: null,
	modalOpen: true,
	step: 1,

	actions: {
		closeModal() {
			this.set('modalOpen', false);
		},

		finishEditing() {
		}
	}
});
