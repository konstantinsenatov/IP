const togglePassword = document.querySelector('.form-login__eye');
const password = document.querySelector('.form-login__input-password');

if (togglePassword) {
	togglePassword.addEventListener('click', function (e) {
		const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
		password.setAttribute('type', type);
		this.classList.toggle('active');
	});
}