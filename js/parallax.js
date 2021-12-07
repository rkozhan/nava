/*--------------------PARALLAX------------------------------------*/
window.onload = function () {
	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const layer1 = document.querySelector('.images-parallax__first');
		const layer2 = document.querySelector('.images-parallax__second');
		const layer3 = document.querySelector('.images-parallax__third');

		// Coefficientes
		const forLayer1 = 40;
		const forLayer2 = 20;
		const forLayer3 = 10;

		//animation speed
		const speed = 0.15;

		let posX = 0, posY = 0;
		let coordXpercent = 0, coordYpercent = 0;


		function setMouseParallaxStyle() {
			const distX = coordXpercent - posX;
			const distY = coordYpercent - posY;

			posX = posX + (distX * speed);
			posY = posY + (distY * speed);

			//set styles
			layer1.style.cssText = `transform: translate(${posX / forLayer1}%,${posY / forLayer1}%);`;
			layer2.style.cssText = `transform: translate(${posX / forLayer2}%,${posY / forLayer2}%);`;
			layer3.style.cssText = `transform: translate(${posX / forLayer3}%,${posY / forLayer3}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener('mousemove', function (e) {
			// получение ширины и высоты блока
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			// ноль посередине
			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			// получить проценты
			coordXpercent = coordX / parallaxWidth * 100;
			coordYpercent = coordY / parallaxHeight * 100;
		});



		/*------------ПАРАЛЛАКС ПРИ СКРОЛЛЕ-----------------------------------------------*/
		const content = document.querySelector('.parallax__container');

		let thresholdSets = [];
		for (let i = 0; i <= 1.0; i += 0.005) {
			thresholdSets.push(i);
		}
		const callback = function (entries, observer) {
			const scrollTopPercent = window.pageYOffset / parallax.offsetHeight * 100;
			setParallaxItemsStyle(scrollTopPercent);
		};
		const observer = new IntersectionObserver(callback, {
			threshold: thresholdSets
		});

		observer.observe(document.querySelector('.parallax'));

		function setParallaxItemsStyle(scrollTopPercent) {
			content.style.cssText = `transform: translate(0%, -${scrollTopPercent / 9}%);`;
			layer2.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 6}%);`;
			layer3.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 3}%);`;
		}



		//---------------After parallax margin correction
		const parallaxAfter = document.querySelector('.parallax-after-wrapper');
		const parallaxContainer = document.querySelector('.parallax__container');

		if (parallax.offsetHeight - parallaxContainer.offsetHeight) {
			const margin = parallaxContainer.offsetHeight - parallax.offsetHeight + 70 + 'px';
			console.log(margin);	//-------------------------------------------------------------------------------log
			parallaxAfter.style.marginTop = margin;
		}


	}  //end if
};  //end onload
