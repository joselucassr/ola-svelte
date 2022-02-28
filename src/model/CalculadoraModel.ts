// Constantes para deixar mais descritivo
const NAO_LIMPAR_TELA = false;
const LIMPAR_TELA = true;

export default class CalculadoraModel {
  // # na frente significa que é privado
  #valor: string;
  #acumulador: number;
  #limparTela: boolean;
  #operacao: string;

  // Construtor inicializa os valores
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

  // Retorna o valor substituindo ponto por vírgula
  get valor() {
    return this.#valor?.replace('.', ',') || '0';
  }

  // Função que pega o número digitado e concatena com o valor já presente
  numeroDigitado(novoValor: string) {
    return new CalculadoraModel(
      this.#limparTela || !this.#valor ? novoValor : this.#valor + novoValor,
      this.#acumulador,
      this.#operacao,
      NAO_LIMPAR_TELA,
    );
  }
}
