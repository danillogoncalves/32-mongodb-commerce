db.produtos.updateMany(
  { nome: /Big Mac/i },
  { $currentDate: { ultimaModificacao: { $type: "timestamp" } } },
);
db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { _id: 0, nome: 1 });
