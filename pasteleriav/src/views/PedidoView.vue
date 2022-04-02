<template>
  <div class="container">
    <div class="row">
      <DatosCliente></DatosCliente>
    </div>
    <div class="row">
      <div class="col-6">
        <elige-sabor></elige-sabor>
      </div>
      <div class="col-6">
        <elige-decoracion></elige-decoracion>
      </div>
    </div>

    <div class="row">
      <div class="col align-self-center py-4">
        <button type="button" class="btn btn-outline-dark">Pedir</button>
      </div>
    </div>



  </div>

</template>

<script>
import DatosCliente from "@/components/DatosCliente";
import EligeSabor from "@/components/EligeSabor";
import EligeDecoracion from "@/components/EligeDecoracion";

export default {
  name: "PedidoView",
  components: {
    DatosCliente,
    EligeSabor,
    EligeDecoracion
  }
}
</script>
