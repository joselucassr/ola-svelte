<script lang="ts">
  import Calculadora from './components/Calculadora.svelte';
</script>

<main>
  <Calculadora />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  /* Mudando o CSS global */
  :global(body) {
    background-color: #282a36;
    padding: 0;
    font-family: 'Ubuntu Mono', monospace;
  }

  /* Criando uma variável CSS */
  :root {
    --cor-fundo: #44475a;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Solução encontrada em: https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser */
    min-height: -webkit-fill-available;
    min-height: 100vh;
  }

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>
