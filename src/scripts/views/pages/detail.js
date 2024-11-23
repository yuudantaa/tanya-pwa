import RestoDbSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import swal from 'sweetalert';

const Detail = {
  async render() {
    return `
        <div id="kuliner" class="kuliner"></div>
         <div id="likeButtonContainer"></div>
         
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDbSource.detail(url.id);
    try {
    const restoContainer = document.querySelector('#kuliner');
      restoContainer.innerHTML = createRestoDetailTemplate(restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          address: restaurant.address,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId
        },
      });
    } catch (error) {
      // Tangani error
      console.error('Terjadi kesalahan:', error);
      restoContainer.innerHTML = `
        <p>Maaf, data restoran tidak dapat ditemukan. Pastikan Anda terhubung ke internet atau data restoran sudah disimpan secara offline.</p>
      `;
      swal({
        title: 'Oops...',
        text: 'Data restoran tidak ditemukan.',
        icon: 'error',
      });
    }
  },
};

export default Detail;