import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Curso Solidity", 
          amount: 100, 
          category: "Estudos",
          type: "withdraw",
          createdAt: new Date("2021-03-25T10:50")
        },
        {
          id: 2,
          title: "Stake Shitcoin", 
          amount: 400, 
          category: "Defi",
          type: "deposit",
          createdAt: new Date('2021-03-25T10:34')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

