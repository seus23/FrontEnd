<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="col">
        <sabores-pasteles></sabores-pasteles>
      </div>
    </div>
    <div class="row py-5">
      <div class="col">
        <decoraciones></decoraciones>
      </div>
    </div>
    <div class="row py-5">
      <div class="col">
        <router-link to="/pedido" class="nav-link">
          <button type="button" class="btn btn-outline-dark">¡Haz tu pedido!</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import saboresPasteles from "@/components/SaboresPasteles";
import decoraciones from "@/components/Decoraciones";

export default {
  name: "PreciosView",
  components:{
    saboresPasteles,
    decoraciones
  }
}
</script>

<style>

h3{
  padding: 20px;
  font-family: "Book Antiqua";
  text-shadow: 3px 3px 3px darkgrey;
  color: purple;
}

th{
  color: purple;
  font-weight: bolder;
}

td,th{
  font-family: "Book Antiqua";
  text-shadow: 2px 2px 5px #C6B3D8;
}

</style>