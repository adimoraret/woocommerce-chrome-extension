const products = [
    {id: "my-product",name: "My product name" },
    {id: "not-my-product",name: "Not my product name" }
];

class ProductApi {
    static getAllProducts() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], products));
        });
    }
}

export default ProductApi;