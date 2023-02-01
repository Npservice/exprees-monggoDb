import { check, validationResult } from "express-validator";
export const suratUpdateValidate = [ 
 check('name').notEmpty(),
 check('alamat').notEmpty(),
 check('phone').notEmpty(),
 check('document').notEmpty(),
 check('status').notEmpty(),
 check('file').notEmpty(),
 (req,res,  next) => {
     const errors = validationResult(req);
    if(!errors.isEmpty()){
        req.flash('error','Data is not valid')
        res.redirect(301,'/admin/edit/'+req.params.id)
    }
    else next();
 }
];

export const suratCreateValidate =[
 check('name').notEmpty(),
 check('alamat').notEmpty(),
 check('phone').notEmpty(),
 check('document').notEmpty(),
 check('status').notEmpty(),
 check('file').notEmpty(),
 (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      req.flash('error', 'Data is Not Complate')
      res.redirect(301,'/admin/input') 
    }else{
        next();
    }


 }


]



