<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <table id="firstTable">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Carton Price</th>
              <th>Items per carton</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.cartonPrice }}</td>
              <td>{{ product.itemsPerCarton }}</td>
            </tr>
          </tbody>
        </table>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <h1></h1>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center"> </v-row>
      </v-col>

      <div>
        <v-col cols="12">
          <v-row justify="center">
            <table id="firstTable">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Buy individual products</th>
                  <th>Buy Carton</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.name }}</td>

                  <td>
                    <input
                      type="number"
                      min="0"
                      id="amount"
                      name="amount"
                      v-model="itemPrice"
                    />
                    <v-btn
                      @click="calculateProductItemPrice(product.id)"
                      class="primary"
                    >
                      calculate
                    </v-btn>
                  </td>

                  <td>
                    <input
                      type="number"
                      min="0"
                      id="cartonAmount"
                      name="cartonAmount"
                      v-model="cartonPrice"
                    />
                    <v-btn
                      @click="calculateCartonPrice(product.id)"
                      class="primary"
                    >
                      calculate
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </table>
          </v-row>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>




<script>
import ProductService from "../services/Product-Service";
import router from "../router";

export default {
  name: "MainConponent",

  data: () => ({
    data: {},
    products: [],
    itemPrice: "",
    cartonPrice: "",
  }),

  methods: {
    redirect() {
      router.push({ name: "list" });
    },

    getAllProducts() {
      ProductService.getAll()
        .then((response) => {
          this.data = response.data;
          this.products = response.data.data.products;
          console.log(response.data);
          console.log(this.products);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    calculateProductItemPrice(productId) {
      console.log(productId);
      var data = {
        productId: productId,
        noOfProducts: this.itemPrice,
      };

      ProductService.calculateProductPrice(data)
        .then((response) => {
          this.data.totalPrice = response.data.id;
          console.log(response.data.data.totalPrice);
          alert("Price : " + response.data.data.totalPrice);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    calculateCartonPrice(productId) {
      console.log(productId);
      var data = {
        productId: productId,
        noOfCartons: this.cartonPrice,
      };

      ProductService.calculateCartonPrice(data)
        .then((response) => {
          this.data.totalPrice = response.data.id;
          alert("Price : " + response.data.data.totalPrice);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.getAllProducts();
  },
};
</script>
