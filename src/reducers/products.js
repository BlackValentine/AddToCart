var initialState = [
    {
        id: 1,
        name: 'Iphone 12 Pro Max',
        image: 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xam-new-600x600-200x200.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21',
        image: 'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 4
    },
    {
        id: 3,
        name: 'Oppo Find x3 Pro',
        image: 'https://didongviet.vn/pub/media/catalog/product//o/p/oppo-f11-pro-128gb-diddongviet.jpg',
        description: 'Sản phẩm do China sản xuất',
        price: 300,
        inventory: 5,
        rating: 3
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;