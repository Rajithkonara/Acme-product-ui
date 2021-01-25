<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <table id="firstTable">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Carton Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.cartonPrice }}</td>
            </tr>
          </tbody>
        </table>
      </v-col>

      <v-col class="mb-4"> </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <h1></h1>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center"> </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>




<script>
import ProductService from "../services/Product-Service";

export default {
  name: "PriceListComponent",

  data: () => ({
    data: {},
    products: [],
    itemPrice: '',
    cartonPrice: ''
  }),

  methods: {

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
    }
  },
  
  mounted() {
    this.getAllProducts();
  },
};
</script>
