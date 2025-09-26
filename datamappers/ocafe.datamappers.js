import client from '../db/client.js';

const coffeeDataMapper = {
  async findAllcoffee() {
    
    const result = await client.query(
      `SELECT coffee.*, country.name AS country_name FROM coffee

      JOIN country ON coffee.country_id = country.id
      
    `);
    
    return result.rows;
  },
}

export default coffeeDataMapper;