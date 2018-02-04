import Component from '@ember/component';

export default Component.extend({
	classNameBindings: ['isEditing:cherry-input--editing'],

	actions: {
		editLeaf() {
			this.set('isEditing', true);
		},
		stopEditing() {
			this.set('isEditing', false);
		}
	}
});
