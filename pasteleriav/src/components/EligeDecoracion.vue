<template>
  <legend>Elige la decoración</legend>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="chispas" id="chispas">
    <label class="form-check-label" for="chispas" >
      Chispas de chocolate
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="tchocolate" id="tchocolate">
    <label class="form-check-label" for="tchocolate">
      Trozos de chocolate
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="crema" id="crema">
    <label class="form-check-label" for="crema">
      Crema pastelera
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="merengue" id="merengue">
    <label class="form-check-label" for="merengue">
      Merengue
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="fondant" id="fondant">
    <label class="form-check-label" for="fondant">
      Figuras de fondant
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="fresas" id="fresas">
    <label class="form-check-label" for="fresas">
      Fresas
    </label>
  </div>
</template>

<script>
export default {
  name: "EligeDecoracion",
  components: {}

}
</script>

<style>

.form-check-input{
  background-color: purple;
}

</style>