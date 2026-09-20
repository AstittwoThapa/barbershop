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


export const getAllServices = async (req, res) => {
    const allServices = await Service.find().select();

    try{
        return res.status(200).json({
            allServices
    });
    }
    catch(error) {
        return res.status(404).json({
            message: "All services cannot be retreived!",
            error: error.message
        });
    }
};

export const getServiceById = async (req, res) => {

    try {
    const id = req.params.id;

    const service = await Service.findById(id);

        if (!service) {
            return res.status(404).json({
                message: "The service cannot be found!"
            });
        }

        return res.status(200).json({
            service
        });
    }

    catch(error) {
        return res.status(500).json({
            message: "Unable to retreive Service!"
        })
    }
};

export const updateService = async (req, res) => {
    try {
        const id = req.params.id;

        const { name, description, price, duration, available } = req.body;

        const service = await Service.findById(id);

        if (!service) {
            return res.status(404).json({
                message: "Service not found"
            });
        }

        service.set({name,
            description, 
            price,
            duration,
            available
        });

        await service.save();

        return res.status(200).json({
            message: "Service has been updated!"
        });

    }

    catch(error) {
        return res.status(500).json({
            message: "Unable to update Service",

            error: error.message
        });
    }
};

export const deleteService = async (req, res) => {
    try {

        const id = req.params.id;
        const service = await Service.findById(id);

        if(!service) {
            return res.status(404).json({
                message: "service not found!"
            });
        }

        await service.deleteOne();
        return res.status(200).json({
            message: "The service has been deleted successfully"
        });
    }

    catch(error) {
        return res.status(500).json({
            message: "Only admins can perform this delete action!",
            error: error.message
        });
    }

};