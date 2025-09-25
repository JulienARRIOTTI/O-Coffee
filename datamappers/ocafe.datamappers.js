import client from '../db/client.js';

const coffeeDataMapper = {
  async findAllcoffee() {
    // Je vais chercher dans ma BDD la liste des promos
    const result = await client.query(
      `SELECT coffee.*, country.name AS country_name FROM coffee

      JOIN country ON coffee.country_id = country.id
      
    `);
    // Les données retournées par la requête SQL faite par `client.query` sont dans la propriété `rows`
    return result.rows;
  },
}

export default coffeeDataMapper;