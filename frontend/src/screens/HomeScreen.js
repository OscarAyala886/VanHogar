//import data from '../data.js';
import axios from 'axios';
import Rating from '../components/Rating';

//Plantilla para que mande a llamar a mis productos
//HomeScreeen => mandaremos a traer nuestros datos del archivo data.js para que se puedan consultar como api
const HomeScreen = {
    render: async () =>{
        const response = await axios({ //Pasamos a hacer uso de axios
            url: 'http://localhost:5000/api/products',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response || response.statusText !== 'OK') {
            return `<div>Error al reconocer los datos</div>`; //En el caso de que no se cumpla la condicion no apareceran los productos y sera elmensaje de error
        }
        const products = response.data;


        return `
        <ul class="products">
        ${products.map( 
            product => `
        <li>
            <div class="product">
                <a href="/#/product/${product._id}">
                <img src="${product.image}" alt="${product.name}" />
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                    ${product.name}
                    </a>
                </div>
                <div class="product-rating">
                ${Rating.render({value: product.rating, 
                    text: product.numReviews + ' reseñas'
                })}
                </div>
                <div class="product-brand">
                ${product.brand}
                </div>
                <div class="product-price">
                    ${product.price}.00 MX                         
                </div>
            </div>
        </li>
    `).join('\n')}
        `;
    },
};
export default HomeScreen;
