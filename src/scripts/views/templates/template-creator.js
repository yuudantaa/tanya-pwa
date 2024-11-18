import CONFIG from '../../globals/config';
 
const createMovieDetailTemplate = (makan) => `
  <h2 class="makan__title">${makan.title}</h2>
  <img class="makan__poster" src="${CONFIG.BASE_IMAGE_URL + makan.poster_path}" alt="${makan.title}" />
  <div class="makan__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${makan.city}</p>
    <h4>Release Date</h4>
    <p>${makan.description}</p>
    <h4>Duration</h4>
    <p>${makan.address} minutes</p>
    <h4>Rating</h4>
    <p>${makan.name}</p>
  </div>
  <div class="makan__overview">
    <h3>Overview</h3>
    <p>${makan.categories}</p>
  </div>
`;
 
const createRestoItemTemplate = (makan) => `
  <div class="makan-item">
    <div class="makan-item__header">
      <img class="makan-item__header__poster" alt="${makan.name}"
           src="${makan.pictureId ? CONFIG.BASE_IMAGE_URL + makan.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="makan-item__header__rating">
        <p>⭐️<span class="makan-item__header__rating__score">${makan.rating}</span></p>
      </div>
    </div>
    <div class="makan-item__content">
      <h3><a href="/#/detail/${makan.id}">${makan.title}</a></h3>
      <p>${makan.city}</p>
    </div>
  </div>
`;
 
export { createRestoItemTemplate, createMovieDetailTemplate };