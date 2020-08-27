import {Router} from 'express';

class peliculasRoutes{
    public router:Router=Router();

    constructor(){

        this.config();
    }
    config():void{
        this.router.get('/obtener',(req,res)=>{
            res.send('Esta es una pelicula');

        });
        this.router.get('/prueba',(req,res)=>{
            res.send('Prueba funciona');

        });
        

    
    
    }
}

const peliculasroutes=new peliculasRoutes();
export default peliculasroutes.router;