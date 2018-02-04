import Component from '@ember/component';

export default Component.extend({
	classNames: ['lotus-cell'],
	tagName: 'td',
	isPowered: false,
	value: '',
	classNameBindings: ['isSelected:selected-cell'],
	isSelected: false
});
