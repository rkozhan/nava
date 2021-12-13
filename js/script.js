"use strict";

//----------------------------------------------hide header on scroll
function getScrollDirection() {
	const header = document.querySelector('.header'),
		arr = [];
	let start = 0,
		i = 0,
		finish = document.documentElement.scrollTop,
		down,
		direction;
	if (finish > 200) header.classList.add('_hiddenPC');
	document.addEventListener('scroll', () => {
		finish = document.documentElement.scrollTop;
		if (finish >= 100 && finish > start) {
			down = true;
		} else down = false;
		start = finish;
		i += 1;

		if (i == 5) {
			i = 0
			arr.unshift(down);
			arr.length = 3;
		}

		if (arr[0] && arr[1] && arr[2]) {
			header.classList.add('_hidden');
			header.classList.add('_hiddenPC');

		} else if ((!arr[0] && !arr[1] && !arr[2]) || finish < 100) {
			header.classList.remove('_hidden');
		}
		if (finish < 200) header.classList.remove('_hiddenPC');

	});
}
getScrollDirection();

//----------------------------------------------buttons on click add class and attr
const destinations = document.querySelector('.destinations .chirpy-items__flexbox');
const buttons = document.querySelectorAll('.chirpy-items__btn');
const shownDestinations = [];//--all destinations database array
const allDestinations = [];

buttons.forEach(element => {
	element.addEventListener('click', (event) => {
		event.preventDefault;
		element.classList.add('_active');
		element.setAttribute("disabled", "disabled");

		setTimeout(askNewItem, 100);
		setTimeout(askNewItem, 200);
		setTimeout(askNewItem, 300);

		//------------------------------------------check shown destinations
		function askNewItem() {
			if (allDestinations.length > shownDestinations.length) {
				renderItem();
				setTimeout(removeActive, 600);  //------------------demo, remove it
			} else {
				element.innerHTML = 'All destinations are shown';
				element.classList.remove('_active');
			};
		}

		function removeActive() {
			element.removeAttribute("disabled");
			element.classList.remove('_active');
		}
	})
});

//-------------------------------------add destination to allDestinations
class destination {
	constructor(img, city, country, numberOfBoats) {
		this.img = img;
		this.city = city;
		this.country = country;
		this.numberOfBoats = numberOfBoats;
		this.addNewDestination;
	}
	addNewDestination() {
		allDestinations.push({ img: this.img, city: this.city, country: this.country, numberOfBoats: this.numberOfBoats });
	}
}
new destination(0, 'Figueira da Fox', 'Portugal', 730).addNewDestination();
new destination(1, 'Ibiza', 'Spain', 621).addNewDestination();
new destination(2, 'Palma de Mallorka', 'Spain', 543).addNewDestination();
new destination(3, 'Portofino', 'Italy', 730).addNewDestination();
new destination(4, 'Port Hercules', 'Monaco', 402).addNewDestination();
new destination(5, 'Saint Tropez', 'France', 812).addNewDestination();
new destination(6, 'Belfast', 'Ireland', 354).addNewDestination();
new destination(7, 'Marselle', 'France', 650).addNewDestination();
new destination(8, 'Istambul', 'Turkey', 591).addNewDestination();
new destination(9, 'New-York', 'USA', 1024).addNewDestination();
new destination(10, 'Honolulu', 'USA', 885).addNewDestination();

//-------------------------------------------------generate destination item


destinations.innerHTML = '';

function renderItem() {
	let i;
	function getRandom() {
		const max = allDestinations.length;
		i = Math.floor(Math.random() * max);
		if (shownDestinations.includes(i)) {
			getRandom();
		} else {
			shownDestinations.push(i);
			console.log(shownDestinations);
		}
	}
	getRandom();//-get random index for allDestinations, which is not include in shownDestinations

	const newItem = document.createElement('div');
	newItem.classList.add('chirpy-items__item');
	newItem.classList.add('item-chirpy');
	newItem.innerHTML = `<a href="#" class="item-chirpy__pic _ibg"><img src="https://rkozhan.github.io/nava/img/destinations/${i}.jpg"
		alt="${allDestinations[i].city}"></a>
		<div class="item-chirpy__descr">
		<div class="item-chirpy__title">${allDestinations[i].city}</div>
		<div class="item-chirpy__sub-title">${allDestinations[i].country}</div>
		</div>
		<div class="item-chirpy__label">${allDestinations[i].numberOfBoats}</div>`;
	destinations.append(newItem);
}
renderItem();
renderItem();
renderItem();
renderItem();
renderItem();

//--------------------------------------------------------------------



//-----------------------------------------------------------login
const signUp = document.querySelector('.menu__link[data-signup]');
const loginWindow = document.querySelector('.menu__login');

//---------------------------------------------------------show login

signUp.addEventListener('click', (event) => {
	event.preventDefault();
	if (!loginStatus) {
		toggleLoginWindow();
	} else {
		loginStatus = false;
		signUp.textContent = 'sign up';
	}
});

document.addEventListener('click', (e) => {
	if (loginWindow.classList.contains('_show')) {
		if (e.target === signUp) {
		} else if (e.target.closest('.menu__login')) {
		} else {
			console.log('click2');
			toggleLoginWindow();
		}
	}
});

document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape' && loginWindow.classList.contains('_show')) toggleLoginWindow();
});

function toggleLoginWindow() {
	loginWindow.classList.toggle('_show');
}

//--------------------------------------------------------------login status (JUST FOR DEMO)
const userNames = ['user',];
const userEmails = ['mail@mail.com',];
const userPasswords = ['123',];
let loginStatus = false;
let userStatus;
const loginForm = document.querySelector('.login__form')
const usernameInput = document.querySelector('.login__form_username');
const passInput = document.querySelector('.login__form_pass');
const loginBtn = document.querySelector('.login__btn');

loginForm.addEventListener(('submit'), (e) => {
	e.preventDefault();

	userStatus = userNames.indexOf(usernameInput.value);

	if (userStatus === -1) {
		loginBtn.textContent = 'This user is not registered';
		setTimeout(() => loginBtn.innerHTML = 'Login', 2000);
	} else if (passInput.value !== userPasswords[userStatus]) {
		loginBtn.textContent = 'wrong password';
		setTimeout(() => loginBtn.innerHTML = 'Login', 2000);
	} else if (passInput.value === userPasswords[userStatus]) {
		loginStatus = true;
		loginBtn.textContent = `welcome, ${userNames[userStatus]}`;
		signUp.textContent = 'sign out';
		usernameInput.value = "";
		passInput.value = "";
		setTimeout(toggleLoginWindow, 2000);
		setTimeout(() => loginBtn.innerHTML = 'Login', 2000);
	}
});
