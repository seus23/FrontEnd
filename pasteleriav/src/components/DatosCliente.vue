<template>
  <div class="container">

    <form>
      <legend>Ingresa tus datos de contacto</legend>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" v-model="nombre">
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input type="tel" class="form-control" id="telefono" maxlength="10" v-model="telefono">
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">Correo</label>
        <input type="email" class="form-control" id="correo" v-model="correo">
      </div>
      <div class="mb-3">
        <label for="descripcion" class="form-label">Describe tu pastel</label>
        <textarea id="descripcion" name="descripcion" class="form-control" v-model="descripcion" maxlength="100"></textarea>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "DatosCliente",
  data (){
    return{
      nombre:'',
      telefono:'',
      coreo:'',
      descripcion:''

    }
  }
}
</script>

<style scoped>

</style>