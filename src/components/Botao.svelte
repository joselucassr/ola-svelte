<script lang="ts">
  // Para que o texto apareça no componente
  // pai é preciso exportar a variável
  export let texto: string;
</script>

<button class="botao"> {texto} </button>

<style>
  .botao {
  }
</style>
