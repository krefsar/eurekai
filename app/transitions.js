export default function(){
	this.transition(
		this.fromRoute('index'),
		this.toRoute('tools'),
		this.use('explode', {
			pickOld: '.login__button',
			use: ['toDown', { duration: 1000 }]
		}, {
			pickOld: '.login__logo',
			use: ['toUp', { duration: 1000 }]
		}, {
			pickNew: '.slides__container',
			use: ['wait', 1000, { then: ['toLeft']}]
		}, {
			use: ['wait', 500, { then: ['crossFade'] }]
		})
	);

	this.transition(
		this.fromRoute('tools.index'),
		this.toRoute('tools.lotus-blossom'),
		this.use('toUp'),
		this.reverse('toDown')
	);

	this.transition(
		this.hasClass('split-pane'),
		this.use('toLeft')
	);

	this.transition(
		this.hasClass('stepswipe'),
		this.use('toLeft')
	);
}
