const axios = require('axios');
const {Temperament} = require('../db');

require('dotenv').config();
const {api_key} = process.env;


const URL = `https://api.thedogapi.com/v1/breeds?api_key=${api_key}`;

const h_getTemperaments = async () => {
    let {data} = await axios(URL);

    if(Array.isArray(data)){
        let temList = [];
            data.map((dog)=>{
                let auxTemts = dog.temperament?.split(', ');
                for(i=0; i<auxTemts?.length; i++){
                    if(!temList.includes(auxTemts[i])){
                        temList.push(auxTemts[i]);
                        Temperament.findOrCreate({
                            where: { name: auxTemts[i] }, 
                            defaults: { name: auxTemts[i] }
                        });                  
                    }
                }
            });

        return await Temperament.findAll({order:[['name', 'ASC']]})  

    }else{
        throw Error ("The was an error retreiving the data from the api request");
    }
 };

 module.exports = {
    h_getTemperaments
 };
