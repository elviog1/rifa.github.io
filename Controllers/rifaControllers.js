const Rifa = require("../models/rifa")

const rifaControllers ={
    createRifa: async (req,res) =>{
        let{name,rifa} =req.body
        try{
            let newRifa = await new Rifa({name,rifa}).save()
            if(newRifa){
                res.status(200).json({
                    message: "Rifa created",
                    success:true
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: error.message,
                success:false
            })
        }
    },
    getOneRifa: async(req,res)=>{
        let {id} = req.params
        try{
            let rifa = await Rifa.findOne({_id:id})
            if(rifa){
                res.status(200).json({
                    message: "you get one rifa",
                    response: rifa,
                    success: true
                }) 
            }else{
                res.status(400).json({
                    message: "couldn't find rifa",
                    success: false
                }) 
            }
        }catch(error){
            console.log(error)
            res.status(404).json({
                message: error.message,
                success: false
            }) 
        }
    },
    getAll: async(req,res)=>{
        let query={}
        try{
            let rifa = await Rifa.find({query})
            if(rifa){
                res.status(200).json({
                    message: "All rifas found",
                    response: rifa,
                    success: true
                })
            }
        }catch(e){
            console.log(e)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    update: async(req,res)=>{
        let {id}= req.params
        let updateRifa = req.body
        try{
            let update = await Rifa.findOneAndUpdate({_id:id},updateRifa)
            if(update){
                res.status(200).json({
                    message: "rifa update successfully",
                    success: true,
                    response: update
                })
            }else{
                res.status(404).json({
                    message: "rifa not found",
                    success: false
                })
            }
        }catch(e){
            console.log(e)
            res.status(404).json({
                message: error.message,
                success: false
            })
        }
    }
}

module.exports = rifaControllers