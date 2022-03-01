<script lang="ts">
  import Calculadora from './components/Calculadora.svelte';
</script>

<main>
  <Calculadora />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  /* Mudando o CSS global */
  :global(html) {
    height: 100vh;
    height: -webkit-fill-available;
  }
  :global(body) {
    background-color: #282a36;
    padding: 0;
    font-family: 'Ubuntu Mono', monospace;
    height: 100vh;
    height: -webkit-fill-available;
    min-height: 100vh;
    min-height: -webkit-fill-available;
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
    height: -webkit-fill-available;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>
