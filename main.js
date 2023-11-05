const thumbnails = document.querySelectorAll('.thumbnail img');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup__img');
const closeBtn = document.querySelector('.close');
const arrowLeft = document.querySelector('.btn-arrow--left');
const arrowRight = document.querySelector('.btn-arrow--right');
let currentImgIndex = 0;

thumbnails.forEach((thumb, index) =>
	thumb.addEventListener('click', () => {
		currentImgIndex = index;
		popup.classList.remove('hidden');
		popupImg.setAttribute('src', thumb.getAttribute('src'));
	})
);

const prevSlide = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = thumbnails.length - 1;
	} else {
		currentImgIndex--;
	}
	popupImg.setAttribute('src', thumbnails[currentImgIndex].src);
};

const nextSlide = () => {
	if (currentImgIndex === thumbnails.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex++;
	}
	popupImg.setAttribute('src', thumbnails[currentImgIndex].src);
};

arrowRight.addEventListener('click', nextSlide);

arrowLeft.addEventListener('click', prevSlide);

closeBtn.addEventListener('click', () => {
	popup.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
	if (!popup.classList.contains('hidden')) {
		if (e.key === 'ArrowRight') {
			nextSlide();
		} else if (e.key === 'ArrowLeft') {
			prevSlide();
		} else if (e.key === 'Escape') {
			popup.classList.add('hidden');
		}
	}
});
