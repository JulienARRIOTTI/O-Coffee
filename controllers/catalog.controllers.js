   import coffeeDataMapper from "../datamappers/ocafe.datamappers.js"

   const catalogController = {
     index:async (req, res) => {
        try {
const dataOcoffe = await coffeeDataMapper.findAllcoffee();
//console.log ("toto", dataOcoffe);
res.render('catalog.ejs',
        {
        coffeeList:dataOcoffe,       
        }
   );        
}catch (error){console.log(error)} 
        
   
    }
    
}

export default catalogController; 