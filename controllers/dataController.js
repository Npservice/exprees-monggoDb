import Surat from "../models/SuratModel.js";

 export const dashboard = async (req,res) => {
    try {
        const data = await Surat.find()
        res.render('dashboard',{
            layout: 'layout/layout',
            data,
            title:'Dashboard'
        });
    } catch (error) {
        res.status(404).json({
            message: 'efek gedang klutuk'
        });
    }
}
