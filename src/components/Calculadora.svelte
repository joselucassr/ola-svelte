<script lang="ts">
  import Botao from './Botao.svelte';
</script>

<div class="calculadora">
  <Botao texto="7" />
  <Botao texto="8" />
  <Botao texto="9" />
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
