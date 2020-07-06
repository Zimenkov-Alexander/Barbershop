let map = document.querySelector(".modal-map"),
	driveButton = document.querySelector("#contacts").querySelector(".button"),
	loginBtn = document.querySelector('.login-link'),
	modalLogin = document.querySelector('.modal-login'),
	modalInfo = document.querySelector('.modal-info'),
	modalCloseBtn = document.querySelectorAll('.modal-close');
	

loginBtn.addEventListener('click', function(){
	modalLogin.classList.remove('hidden');
})
driveButton.addEventListener('click', function(){
	map.classList.remove('hidden');
})


modalCloseBtn[0].addEventListener('click', function(){
	modalLogin.classList.add('hidden');
})
modalCloseBtn[1].addEventListener('click', function(){
	map.classList.add('hidden');
})

modalCloseBtn[2].addEventListener('click', function(){
	modalInfo.classList.add('hidden');
})


