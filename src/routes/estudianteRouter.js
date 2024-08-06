import {Router} from 'express'
const router = Router()

import estudianteServices from '../services/estudianteServices.js'
const estudiante = new estudianteServices()

router.get('/',async(req,res)=>{
    try{
        const estudiante = await estudiante.getEstudiante()
        return res.render('estudiantes/index',{estudiante})
    }catch (err){
        console.log('error'+err)
    }
})
