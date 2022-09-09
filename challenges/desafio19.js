db.produtos.updateMany({}, { $pull: { ingredientes: /^cebola$/i } });
db.produtos.find({ }, { _id: 0, nome: 1, ingredientes: 1 });
