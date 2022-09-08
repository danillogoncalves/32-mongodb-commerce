db.produtos.updateMany(
  { nome: { $in: [/Big Mac/i, /Quarteirão com Queijo/i] } },
  { $addToSet: { ingredientes: "bacon" } },
);
db.produtos.find({ }, { _id: 0, nome: 1, ingredientes: 1 });
