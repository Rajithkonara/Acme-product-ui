import http from "../http-common"

class ProductService {
    getAll() {
        return http.get("/product");
    }

    calculateProductPrice(data) {
        return http.post("/product/price", data);
    }

    calculateCartonPrice(data) {
        return http.post("/product/price/carton", data);
    }

}

export default new ProductService();
