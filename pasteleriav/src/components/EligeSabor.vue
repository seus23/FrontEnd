<template>
  <legend>Elige el o los sabores</legend>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="chocolate" id="saborChocolate">
    <label class="form-check-label" for="saborChocolate">
      Chocolate
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="moca" id="saborMoca">
    <label class="form-check-label" for="saborMoca">
      Moca
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="tresLeches" id="saborTresLeches">
    <label class="form-check-label" for="saborTresLeches">
      Tres leches
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="fresasQ" id="saborFresasQ">
    <label class="form-check-label" for="saborFresasQ">
      Fresas con queso
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="imposible" id="saborImposible">
    <label class="form-check-label" for="saborImposible">
      Imposible
    </label>
  </div>

</template>

<script>
export default {
  name: "EligeSabor"
}
</script>

<style scoped>
  .form-check-input{
    align-items: flex-start;
  }
</style>