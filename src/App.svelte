<script lang="ts">
  import Calculadora from './components/Calculadora.svelte';
</script>

<main>
  <Calculadora />
</main>

<style>
  /* Mudando o CSS global */
  :global(body) {
    background-color: #282a36;
  }

  /* Criando uma variável CSS */
  :root {
    --cor-fundo: #44475a;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>
