import Service from "../models/Service.js";

export const registerService = async (req, res) => {
    try {
        const { name, description, price, duration, available } = req.body;

        const serviceExists = await Service.findOne ({ name })
        
        if(serviceExists) {
            return res.status(404).json({
                message: "The service is not found!"
            });
        }

        const service = await Service.create ({
            name, 
            description,
            price, 
            duration
        })

        return res.status(201).json({
            service
        });

    }
    
    catch(error) {
        return res.status(500).json({
            message: "The service cannot be registered!",
            error: error.message
        });
    }
};