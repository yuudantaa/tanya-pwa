import RestoDbSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
      return `
        <div id="kuliner" class="kuliner"></div>
      `;
    },
   
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestoDbSource.detail(url.id);
        const restoContainer = document.querySelector('#kuliner');   
      
      
        if (!restoContainer) {
          console.error("Element with id 'kuliner' not found!");
          return; // Exit the function if element is not found
        }
      
        restoContainer.innerHTML = createRestoDetailTemplate(restaurant);
    },
    
  };
   
  export default Detail;