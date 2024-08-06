import config from '../config/knexConfig.js'
import knex from 'knex'
export default class estudianteServices{
    constructor(){
        this.knex = knex(config)
    }
    getEstudiante = async() =>{
        const estudiante = await this.knex.from('estudiantes').select('*')
        return Object.values(JSON.parse(JSON.stringify(estudiante)))
    }
}