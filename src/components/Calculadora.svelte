<script lang="ts">
  import CalculadoraModel from '../model/CalculadoraModel';

  import Botao from './Botao.svelte';
  import Linha from './Linha.svelte';
  import Tela from './Tela.svelte';

  // Inicializando a classe da calculadora
  let calc = new CalculadoraModel();

  // Armazenando a operação em uma variável para um código mais organizado;
  // Recebe o valor do botão e inicia um novo objeto, retornado pela função
  // passando esse valor;
  const numeroDigitado = (num: string) => (calc = calc.numeroDigitado(num));
</script>

<div class="calculadora">
  <!-- Pega o valor por meio do get -->
  <Tela valor={calc.valor} />
  <Linha>
    <!-- Passa o atributo triplo como true -->
    <Botao destaque triplo texto="AC" />
    <Botao operacao texto="/" />
  </Linha>
  <Linha>
    <Botao texto="7" onClick={numeroDigitado} />
    <Botao texto="8" onClick={numeroDigitado} />
    <Botao texto="9" onClick={numeroDigitado} />
    <Botao operacao texto="*" />
  </Linha>
  <Linha>
    <Botao texto="4" onClick={numeroDigitado} />
    <Botao texto="5" onClick={numeroDigitado} />
    <Botao texto="6" onClick={numeroDigitado} />
    <Botao operacao texto="+" />
  </Linha>
  <Linha>
    <Botao texto="1" onClick={numeroDigitado} />
    <Botao texto="2" onClick={numeroDigitado} />
    <Botao texto="3" onClick={numeroDigitado} />
    <Botao operacao texto="-" />
  </Linha>
  <Linha>
    <Botao duplo texto="0" onClick={numeroDigitado} />
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
