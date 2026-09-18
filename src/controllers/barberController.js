import Barber from "../models/Barber.js";

export const registerBarber = async (req, res) => {
    const { name, email, phone, specialization, experience, available } = req.body;

    const barberExists = await Barber.findOne( {email} );

    if (barberExists){
        return res.status(400).json({
            message: "The barber already exists."
        })
    }

    const barber = await Barber.create({
        name, 
        email,
        phone,
        specialization,
        experience,
        available
    });

    return res.status(201).json ({
        barber
    });
};

export const getAllBarbers = async (req, res) => {
    try {
        const allBarbers = await Barber.find().select();

        return res.status(200).json ({
            allBarbers
        })
    }
    catch(error) {
        return res.status(404).json ({
            message: "Unable to retrieve data of all barbers.",
            error: error.message
        })
    }
};


export const getBarberById = async (req, res) => {
   try {
    const id = req.params.id;
    const barber = await Barber.findById (id);
        
    if(!barber) {
        return res.status(404).json({
            message: "Barber not found"
        })
    }
        return res.status(200).json({
            barber
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Unable to retrieve barber",
            error: error.message
        });
    }
};

export const updateBarber = async (req, res) => {
    try{
        const id = req.params.id;
        const updatedInformation = req.body;
        const barber = await Barber.findById(id);
        
        if(!barber) {
            return res.status(404).json({
                message: "Barber does not exist."
            })
        }

        barber.set(updatedInformation);

        await barber.save();

            return res.status(200).json({
                message: "Barber updated successfully."
            });
    }

    catch(error) {
        return res.status(500).json({
            message: "Unable to update barber.",
            error: error.message
        });
    }
 }

export const deleteBarber = async (req, res) => {

    try {
        const id = req.params.id;
        const barber = await Barber.findById(id);
        if(!barber) {
            return res.status(404).json({
                message: "Barber does not exist."
            })
        }

        await barber.deleteOne();

        return res.status(200).json({
            message: "Barber successfully deleted."
        });
    }

    catch(error) {
        return res.status(500).json({
            message: "Barber cannot be deleted",
            error: error.message
        });
    }
    
};