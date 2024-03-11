$(document).ready(function () {
	const referenceToggles = document.querySelectorAll('.reference-toggle');

	referenceToggles.forEach((toggle) => {
		toggle.addEventListener('click', () => {
			const reference = toggle.nextElementSibling;
			reference.classList.toggle('active');
		});
	});
});
