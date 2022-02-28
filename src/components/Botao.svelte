<script lang="ts">
  // Para que o texto apareça no componente
  // pai é preciso exportar a variável
  export let texto: string;
  export let triplo: boolean = false;
  export let duplo: boolean = false;
</script>

<!-- Se o atributo triplo for true, a classe triplo é aplicada -->
<button class="botao" class:triplo class:duplo>
  {texto}
</button>

<style>
  .botao {
    flex-basis: 25%;
  }

  .triplo {
    flex-basis: 75%;
  }

  .duplo {
    flex-basis: 50%;
  }
</style>
