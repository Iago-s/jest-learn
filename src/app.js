const express = require('express');

class AppController {
  constructor() {
    this.app = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(require('./routes'));
  }
}

module.exports = new AppController().app;
