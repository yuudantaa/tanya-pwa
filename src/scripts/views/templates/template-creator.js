import CONFIG from '../../globals/config';
 
const createRestoDetailTemplate = (restaurant) => `
  <h2 class="makan__title">${restaurant.name}</h2>
  <img class="makan__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="makan__info">
    <h3>Detail Restaurant</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
    <h4>Menu</h4>
    <p>${restaurant.foods}</p>
    <h4>Rating</h4>
    <p>${restaurant.drinks}</p>
  </div>
  <div class="makan__overview">
    <h3>Overview</h3>
    <p>${restaurant.drinks}</p>
  </div>
`;
 
const createRestoItemTemplate = (restaurant) => `
   <section class="isi">
        <div class="makan">

          <article class="makan-item">
            <img class="makan-item_gambar" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
            <div class="makan-item_isi">
              <h1 class="makan-item_nama"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
              <p class="makan-item_kota">${restaurant.city}</p>
              <p class="makan-item_rating">${restaurant.rating}</p>
            </div>
          </article>

          </div>
          </section>
`;
 
export { createRestoItemTemplate, createRestoDetailTemplate };