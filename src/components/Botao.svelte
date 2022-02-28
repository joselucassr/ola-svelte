<script lang="ts">
  // Para que o texto apareça no componente
  // pai é preciso exportar a variável
  export let texto: string;
  export let triplo: boolean = false;
  export let duplo: boolean = false;
  export let operacao: boolean = false;
  export let destaque: boolean = false;
</script>

<!-- Se o atributo triplo for true, a classe triplo é aplicada -->
<button class="botao" class:triplo class:duplo class:operacao class:destaque>
  {texto}
</button>

<style>
  .botao {
    margin: 0;
    border: 1px solid var(--cor-fundo);
    flex-basis: 25%;
  }

  .triplo {
    flex-basis: 75%;
  }

  .duplo {
    flex-basis: 50%;
  }

  .operacao {
    background-color: #8be9fd;
    color: #082c34;
  }

  .destaque {
    background-color: #ffb86c;
    color: #442b10;
  }
</style>
