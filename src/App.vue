<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Price Calculator</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="#"
        target="_blank"
        text
      >
        <span class="mr-2"></span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <MainComponent />
    </v-main>
  </v-app>
</template>

<script>
import MainComponent from "./components/MainComponent";

export default {
  name: "App",

  components: {
    MainComponent,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
