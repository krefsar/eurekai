import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
	classNames: ['lotus-generator'],
	classNameBindings: ['coloredCellName'],
	tagName: 'table',
	isSelected: false,

	coloredCellName: computed('center.color', function() {
		return `lotus-cell--${this.get('center.color')}`;
	}),

	actions: {
		selectCell() {
			this.toggleProperty('isSelected');
		}
	}
});
