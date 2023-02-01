import  Express  from "express";
import{ dashboard }from "../controllers/dataController.js"
import { surat,update,edit,Input,insert,show } from "../controllers/suratController.js";
import {suratUpdateValidate,suratCreateValidate} from "../validation/suratValidate.js";

const Route = Express.Router();

Route.get('/',dashboard);
Route.get('/admin/surat',surat);
Route.get('/admin/edit/:id',update);
Route.get('/admin/input',Input);
Route.get('/admin/show/document/:id',show)
Route.post('/admin/update/:id',suratUpdateValidate,edit);
Route.post('/admin/insert',suratCreateValidate,insert);

export default Route;