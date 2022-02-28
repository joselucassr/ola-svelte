export default class CalculadoraModel {
  #valor: string;
  #acumulador: number;
  #limparTela: boolean;
  #operacao: string;

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

  get valor() {
    return this.#valor?.replace('.', ',') || '0';
  }
}
