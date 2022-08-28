const mainBlock = document.querySelector('.main-block');

document.addEventListener('DOMContentLoaded', () => {
	getData1('https://rickandmortyapi.com/api/character/1');
	getData1('https://rickandmortyapi.com/api/character/2');
	getData1('https://rickandmortyapi.com/api/character/15');
	getData1('https://rickandmortyapi.com/api/character/14');
});

async function getData1(url) {
	const response = await fetch(url);
	const bigData = await response.json();

	const infoBlock = document.createElement('div');
	infoBlock.classList.add('info-block');

	const img = document.createElement('img');
	img.classList.add('info-block__img');

	const title = document.createElement('h2');
	title.classList.add('info-block__title');

	const descr = document.createElement('p');
	descr.classList.add('info-block__descr');

	mainBlock.append(infoBlock);
	infoBlock.append(img);
	infoBlock.append(title);
	infoBlock.append(descr);

	img.src = bigData.image;
	title.textContent = `Имя: ${bigData.name}`;
	descr.textContent = `Вид: ${bigData.species}`;
}