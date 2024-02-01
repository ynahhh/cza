const response = document.getElementById('response');
const text = document.querySelector('.text');

text.addEventListener('click', () => {
	const choice = confirm('Do you accept?');
	if (choice) {
		response.textContent = 'Yayyyy, I love you baby!';
	} else {
		response.textContent = 'Aww u not lab me na :(';
	}
	response.style.display = 'block';
});

// Optional JavaScript for adding a pulsing effect to the heart
setInterval(() => {
	const heart = document.querySelector('.heart');
	heart.style.transform = `scale(${Math.random() * 1.2 + 0.8})`;
}, 1000);