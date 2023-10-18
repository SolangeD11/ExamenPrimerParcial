// import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

const createdSoftware= async ()=>{
    const SoftwareCreated= await prisma.softwareModel.create({
        data:{
            id:1,
            name:'Solange',
            price: 101,
            detail: 'A software',
            requerimientos:{
            create:{
                id:1,
                description:'Software',
                cost: 1000,
                effor: 10,
                
              }
        }
    }
});
console.log(SoftwareCreated)
}
(async ()=>{
    await createdSoftware()
    console.log('Database created')
    prisma.$disconnect()
}) ()









