<script lang="ts">
  export let valor: string;

  // Código não colocado propositalmente,
  // demonstra uso de condição baseada em valor;
  // $: tamanhoFonte = valor.length > 20 ? 'pequena' : `s-${tamanhoFonte}`;
</script>

<div class="tela">
  <span class="spanValor">{valor}</span>
</div>

<style>
  /* Código para a scrollbar pego em: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp */
  /* width */
  ::-webkit-scrollbar {
    height: 1.5vh;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #676d8ff6;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--cor-fundo);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }

  .spanValor {
    overflow-x: auto;
    height: max-content;
  }

  .tela {
    display: flex;
    background-color: #282a36;
    color: #fff;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5px;
    font-size: 2.5rem;
    margin: 2px 1px;
  }
</style>
