
//Las caracteristica de mis productos -------------------------------------
// El server escucha por el puerto http://localhost:5000/api/products

export default{
    products: [
        {
            _id: '1',
            name: 'Silla Coelle nogal - Gris claro', 
            category: 'Sillas',
            image: '/images/product-1.jpg',
            price: 123,
            brand: 'Fantasma', //Marcaa
            rating: 4.5,//Calificacion
            numReviews: 10,//Reseñas
            countInStock: 6,//Almacen
        },
        {
            _id: '2',
            name: 'Silla replica Eames - Blanco', 
            category: 'Sillas',
            image: '/images/product-2.jpg',
            price: 70,
            brand: 'Fantasma',
            rating: 4.5,
            numReviews: 200,
            countInStock: 6,
        },
        {
            _id: '3',
            name: 'Silla Boris nogal', 
            category: 'Sillas',
            image: '/images/product-3.jpg',
            price: 80,
            brand: 'Fantasma',
            rating: 4.5,
            numReviews: 300,
            countInStock: 6,
        },
        {
            _id: '4',
            name: 'Silla Jonotla pata natural - Gris claro', 
            category: 'Sillas',
            image: '/images/product-4.jpg',
            price: 90,
            brand: 'Fantasma',
            rating: 4.5,
            numReviews: 1000,
            countInStock: 6,
        },
        {
            _id: '5',
            name: 'Silla Naupan', 
            category: 'Sillas',
            image: '/images/product-5.jpg',
            price: 100,
            brand: 'Fantasma',
            rating: 4.5,
            numReviews: 30,
            countInStock: 6,
        },
        {
            _id: '6',
            name: 'Silla Jonotla velvet pata natural - Rosa', 
            category: 'Sillas',
            image: '/images/product-6.jpg',
            price: 200,
            brand: 'Fantasma',
            rating: 4.5,
            numReviews: 100,
            countInStock: 6,
        },
    ],
}; 