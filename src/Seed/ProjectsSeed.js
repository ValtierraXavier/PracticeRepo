import Project from "../Models/PracticeModels.js";
import mongoose from "mongoose"
import data from "../../../DB/projectData.json" assert{type: 'json'}
import db from '../../../DB/connection.js'
import chalk from "chalk";

try{

    await Project.deleteMany()
    await Project.create(data)
    console.log(chalk.yellowBright('Done!'))
    await mongoose.disconnect()

}catch(error){

    console.log('Error: ', error)

}