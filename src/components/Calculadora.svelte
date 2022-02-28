<script lang="ts">
  import Botao from './Botao.svelte';
  import Linha from './Linha.svelte';
  import Tela from './Tela.svelte';
</script>

<div class="calculadora">
  <Tela valor="12312312312312" />
  <Linha>
    <!-- Passa o atributo triplo como true -->
    <Botao destaque triplo texto="AC" />
    <Botao operacao texto="/" />
  </Linha>
  <Linha>
    <Botao texto="7" />
    <Botao texto="8" />
    <Botao texto="9" />
    <Botao operacao texto="*" />
  </Linha>
  <Linha>
    <Botao texto="4" />
    <Botao texto="5" />
    <Botao texto="6" />
    <Botao operacao texto="+" />
  </Linha>
  <Linha>
    <Botao texto="1" />
    <Botao texto="2" />
    <Botao texto="3" />
    <Botao operacao texto="-" />
  </Linha>
  <Linha>
    <Botao duplo texto="0" />
    <Botao texto="," />
    <Botao destaque texto="=" />
  </Linha>
</div>

<style>
  .calculadora {
    /* Utilizando uma variável */
    background-color: var(--cor-fundo);
    height: 80vh;
    width: 60vh;
    padding: 10px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    .calculadora {
      height: 100vh;
      width: 100vw;
      padding: 0;
      border-radius: none;
    }
  }
</style>
