module.exports = {
  username: 'root',
  password: '2307',
  database: 'auth_tdd',
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: true,
    //Nome de tabelas com _
    underscored: true,
    //Campos de tabelas com _
    underscoredAll: true,
  },
};
