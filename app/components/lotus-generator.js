import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
	classNames: ['lotus-generator'],
	classNameBindings: ['coloredCellName'],
	tagName: 'table',

	coloredCellName: computed('center.color', function() {
		return `lotus-cell--${this.get('center.color')}`;
	})
});
