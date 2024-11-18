import API_ENDPOINT from '../globals/api-endpoint';
 
class RestoDbSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.Home);
    const responseJson = await response.json();
    return responseJson.results;
  }
 
}
 
export default RestoDbSource;