import { Client } from 'pg';

// Je me créer un client qui me permettra de faire mes requêtes SQL
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
port: 5432,
  
});
// Je le connecte à la base de données
await client.connect((error) => {
if (error) {
console.error("Une erreur a lieu à la connexion avec notre BDD : ", error.message);
} else {
console.log("Connection à la BDD réussie !");
}
});

// Et je l'exporte pour pouvoir l'utiliser dans les autres fichiers
export default client;

