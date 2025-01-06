const fs = require('fs/promises');


exports.selectCatById = (catId) => {
    console.log('inside select by id',catId);
     return fs.readFile(`data/cats/${catId}.json`,'utf-8').then((catString, err) => {
        
        const parsedCat = JSON.parse(catString);
        console.log(parsedCat);
         return parsedCat
      }).catch((err) => {
         console.log('err inside selectcat',err);
         return err
      })
    };;