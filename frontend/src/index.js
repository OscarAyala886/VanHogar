import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { parseRequestUrl } from './utils.js';
import Error404Screen from './screens/Error404Screen.js';

//Aqui iran todas las ventanas que quiera agregar al momento de dar clc en un enlace

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
};
const router = async() =>{
    const request = parseRequestUrl();
    const parseUrl = 
        (request.resource ? `/${request.resource}`: '/') +
        (request.id ? '/:id': '') +
        (request.verb ? `/$(request.verb)` : '');
    const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;

    const main = document.getElementById('main-container');
    //main.innerHTML = HomeScreen.render(); => Con esta linea la imagen no te redirecciona a ningun lado
    main.innerHTML = await screen.render(); //=>Es lo qe me redirecciona a mi pagina del producto
};
window.addEventListener('load',router);
window.addEventListener('hashchange', router);