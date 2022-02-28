<script lang="ts">
  import Botao from './Botao.svelte';
  import Linha from './Linha.svelte';
</script>

<div class="calculadora">
  <Linha>
    <Botao texto="7" />
    <Botao texto="8" />
    <Botao texto="9" />
  </Linha>
  <Linha>
    <Botao texto="4" />
    <Botao texto="5" />
    <Botao texto="6" />
  </Linha>
  <Linha>
    <Botao texto="1" />
    <Botao texto="2" />
    <Botao texto="3" />
  </Linha>
</div>

<style>
  .calculadora {
    /* Utilizando uma variável */
    background-color: var(--cor-fundo);
    height: 60vh;
    width: 30vh;

    display: flex;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    .calculadora {
      height: 100vh;
      width: 100vw;
    }
  }
</style>
