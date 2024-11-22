import RestoDbSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
          },
        });
      
        if (!restoContainer) {
          console.error("Element with id 'kuliner' not found!");
          return; // Exit the function if element is not found
        }
      
    },
    
  };
   
  export default Detail;