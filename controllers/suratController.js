import SuratModel from "../models/SuratModel.js";
import fs from "fs";
import path from "path";


export const surat = async (req,res) => {
    const surat = await SuratModel.find();
    try {
        res.render('surat',{
            layout:'layout/layout',
            title:'Surat',
            surat
        });
    } catch (error) {
        res.status(404).json({
            message: 'efek gedang klutuk'
        });
    }
}   
export const update = async (req,res) => {
        const edit = await SuratModel.findOne({
            where:{
                _id: req.params.id
            }
        });
     try {
        res.render('update',{
                layout:'layout/layout',
                title: 'update',
                edit,
                errorValidate: req.flash('error')
        }); 
    } catch (error) {
    res.status(500).json({
        message: 'efek gedang kluthuk'
    });        
    }
}

export const edit = async (req,res) => {
    try {
        res.status(200).json({
            message: req.body
        });
    } catch (error) {
        return res.status(404).end();
    }
}

export const Input = async (req,res) => {
    try {
       
      res.render('input',{
         layout: 'layout/layout',
         title:  'Input',
         expressFlash: req.flash('success'),
         errorValidate: req.flash('error'),
      }); 
    } catch (error) {
        return res.status(404).end();
    }
}

export const insert = (req,res) => {
    if(req.files == null){
        return res.status(404).json({msg:  'kosong'})
    }else{
     const file = req.files.file;
     const ext = path.extname(file.name);
     const filename =file.md5 + ext;
     file.mv(`./public/arsip/${filename}`, async (err)=>{
         if(err) return res.status(500).json({msg: err.message})
        try {
                  await SuratModel.create({
                    name: req.body.name,
                    alamat: req.body.alamat,
                    phone: req.body.phone,
                    document: req.body.document,
                    status: req.body.status,
                    file: filename
                });
                req.flash('success', 'Data Berhasil disimpan');
                res.redirect(301, '/admin/input');
        } catch (error) {
            res.status(500).json({message:`servere hang`})
        }
     })
   
    } 
}
export const show = async (req,res) => {
   const data = await SuratModel.findOne({
        where:{
            _id: req.params.id
        }
    });
    try {
        res.render('show',{
            layout:'layout/layout',
            title:'show-document',
            data
        })
        
    } catch (error) {
        res.status(404).json({message:`not found`});
    }
}