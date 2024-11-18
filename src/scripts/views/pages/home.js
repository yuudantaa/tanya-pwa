import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
      return `
        <div class="hero">
            <div class="hero_inner"></div>
        </div><br>

        <h1 class="judul">Selamat Datang di Web Ini Restaurant</h1>
        <p class="desc-home">Ora jajan wajan melayang</P><br>
        
        <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="kuliner" class="kuliner">
        </div>
      </div>
      `;
    },
   
    async afterRender() {
      const kuliner = await RestoDbSource.home();
      const kulinerContainer = document.querySelector('#kuliner');
      kuliner.forEach((makan) => {
        kulinerContainer.innerHTML += createRestoItemTemplate(makan);
      });
    },
  };
   
   
  export default Home;