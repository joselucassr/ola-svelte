// Constantes para deixar mais descritivo;
const NAO_LIMPAR_TELA = false;
const LIMPAR_TELA = true;

export default class CalculadoraModel {
  // # na frente significa que é privado;
  #valor: string;
  #acumulador: number;
  #limparTela: boolean;
  #operacao: string;

  // Construtor inicializa os valores;
  constructor(
    valor: string = null,
    acumulador: number = null,
    operacao: string = null,
    limparTela: boolean = false,
  ) {
    this.#valor = valor;
    this.#acumulador = acumulador;
    this.#operacao = operacao;
    this.#limparTela = limparTela;
  }

  // Retorna o valor substituindo ponto por vírgula;
  get valor() {
    return this.#valor?.replace('.', ',') || '0';
  }

  // Função que pega o número digitado e concatena com o valor já presente;
  numeroDigitado(novoValor: string) {
    return new CalculadoraModel(
      this.#limparTela || !this.#valor ? novoValor : this.#valor + novoValor,
      this.#acumulador,
      this.#operacao,
      NAO_LIMPAR_TELA,
    );
  }

  // Função que verifica se já existe um ponto no valor, se não, ela adiciona um;
  pontoDigitado() {
    return new CalculadoraModel(
      this.#valor?.includes('.') ? this.#valor : this.#valor + '.',
      this.#acumulador,
      this.#operacao,
      NAO_LIMPAR_TELA,
    );
  }

  // Retorna uma nova instância vazia da calculadora;
  limpar() {
    return new CalculadoraModel();
  }

  // Função que pega a operação digitada e chama a função de calcular;
  operacaoDigitada(proximaOperacao: string) {
    return this.calcular(proximaOperacao);
  }

  // Função que realiza o calculo, ou não, dependendo da operação anterior digitada;
  calcular(proximaOperacao: string = null) {
    const acumulador = !this.#operacao
      ? parseFloat(this.#valor)
      : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`);

    const valor = !this.#operacao ? this.#valor : `${acumulador}`;

    return new CalculadoraModel(
      valor,
      acumulador,
      proximaOperacao,
      proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA,
    );
  }
}
