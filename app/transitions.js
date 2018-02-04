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
			use: ['wait', 500, { then: ['crossFade'] }]
		})
	);
}
