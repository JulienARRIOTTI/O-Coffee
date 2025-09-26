import coffeeDataMapper from "../datamappers/ocafe.datamappers.js";

const catalogController = {
  index: async (req, res) => {
    try {
      
      const allCoffees = await coffeeDataMapper.findAllcoffee();
      console.log("Données récupérées :", allCoffees);

      
      const latestCoffees = allCoffees.slice(-3); 
      
      res.render('home', { latestCoffees });
    } catch (error) {
      console.error("Erreur dans home.controllers.js :", error);
      res.render('home', { latestCoffees: [] }); 
    }
  }
};

export default catalogController;
