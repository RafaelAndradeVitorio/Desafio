const dados = [{estado:"SP", valor: 67836.43},
{estado: "RJ", valor: 36678.66},
{estado: "MG", valor: 29229.88},
{estado: "ES", valor: 27165.48},
{estado: "Outros", valor: 19849.53}]

const total = dados.reduce((x, dados) => x + dados.valor, 0)

const dadosPorcentagem = dados.map((dado)=> `${dado.estado} : ${((dado.valor * total) / 100).toFixed(2)}%`  )

console.log(dadosPorcentagem)