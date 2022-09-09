// db.produtos.find({ nome: /mc/i }).count();
db.produtos.countDocuments({ nome: /mc/i });