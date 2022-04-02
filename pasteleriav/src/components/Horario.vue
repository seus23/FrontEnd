<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-3">
        <div class="row">
          <img src="../assets/imagenes/apapacho.jpg" class="rounded mx-auto d-block" alt="logotipo">
        </div>
        <div class="row" id="iconContenedor">
          <div class="col-3">
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div class="col-3">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div class="col-3">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <div class="col-6" id="info">
        <div class="row">
          <p>Horario:</p>
          <p>Lunes a Domingo</p>
          <p>11:00 am - 7:00 pm</p>
        </div>
        <div class="row py-0">
          <p>Llamanos al 123-456-78-90</p>
        </div>
        <div class="row py-0">
          <p>Visitanos en Av.Domingo diez No.160, Pachuca, Hidalgo.</p>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Horario"
}
</script>

<style scoped>

img{
  padding: 20px;
  margin: 20px;
  width: 200px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}

#info{
  padding: 20px;
  margin: 20px;
  font-size: 15px;
  font-family: "Book Antiqua";
  text-shadow: 2px 2px 2px darkgrey;
}

i{
  font-size: 35px;
  text-shadow: 2px 2px 2px darkslategrey;
}
#iconContenedor{
  margin-left: 40px;
}

</style>