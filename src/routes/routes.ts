import express, { Request, Response } from 'express';
import deleteGrade from '../controllers/deleteGrade';
import listGrades from '../controllers/getGrades';
import addGrade from '../controllers/postNewGrade';

const route = express();

route.get('/', (req: Request, res: Response) => {
    return res.json('ok')
})

route.get('/grades', listGrades);
route.post('/grade', addGrade);
route.delete('/grade/:id', deleteGrade);

export default route;