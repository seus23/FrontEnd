<template>
  <div id="headeer">
    <div class="row justify-content-between">
      <div class="col-4">
        <h1>EL APAPACHO</h1>
      </div>
      <div class="col-6">
        <nav class="navbar navbar-dark bg-dark py-4" id="navegacion">
          <router-link to="/" class="nav-link">El apapacho</router-link> |
          <router-link to="/precios" class="nav-link">Precios</router-link> |
          <router-link to="/pedido" class="nav-link">¡Haz tu pedido!</router-link>
        </nav>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <router-view/>
    </div>
  </div>

  <div id="footeer">
    <horario></horario>
  </div>
</template>

<script>
import horario from "@/components/Horario";

export default {
  name: "App",
  components: {
    horario
  }
}
</script>

<style>
#app {
  background-color: whitesmoke;
  font-family: "Arial Black";
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
  background-color: black;

}

#navegacion a {
  font-weight: bold;
  color: whitesmoke;
  text-decoration: none;
  font-size: 20px;
}

#navegacion a.router-link-exact-active {
  color: violet;
}

#navegacion  a:hover{
  color: purple;
}

#headeer, #footeer{
  background-color: black;
  color: white;
}
h1{
  padding: 30px;
  font-family: "Book Antiqua";
  text-shadow: 3px 3px 3px darkgrey;
}

</style>
