db.produtos.find(
  { nome: { $nin: [/McChicken/i, /Big Mac/i] } },
  { _id: 0, nome: 1, curtidas: 1, vendidos: 1 },
);