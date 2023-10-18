import { ISoftware, IRequirement } from "./interfaz";

const softwares: ISoftware [] = [ {
  id: 19,
  name: 'Solange',
  price: 1000,
  detail:'A Software',
  requirements: [
    {
        id: 10,
        description: 'Software1',
        cost: 150,
        effort: 10,
        softwareId:1
    },
    {
        id: 20,
        description: 'Software2',
        cost: 200,
        effort: 15,
        softwareId:1
    },
    {
        id: 30,
        description: 'Software3',
        cost: 250,
        effort: 20,
        softwareId:1
    }

  ] 
}
]

function funcioncallback(softwares:ISoftware[], price, callback){
    const Buscar = softwares.filter(
        (precios:ISoftware) => {return precios.price>9000}
     )
    if (Buscar.length>0){
      return callback(softwares);
    }
    else{
        return callback('No hay softwares mayores al precio referencial');
    }
  }

