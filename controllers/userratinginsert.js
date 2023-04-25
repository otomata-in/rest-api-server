//import bcrypt from 'bcryptjs';

//import jwt from 'jsonwebtoken';

//import Profileuser from '../models/user.js';
import Userrating from '../models/userrating.js';
import {  Sequelize } from 'sequelize';
import sequelize from '../utils/database.js';

const Userrating_insert = (req, res, next) => {
     // checks if email already exists
     sequelize.query(
        // 'SELECT jobid,reporterid,aboutjob,position,localarea,address,image,providefood,contractorwork,jobdate,  ( 3959 * acos( cos( radians(:status1) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(:status2) ) + sin( radians(:status1) ) * sin( radians( latitude ) ) ) ) AS distance FROM jobsposteds HAVING distance < 25 ORDER BY distance where jobdate between :startdate and :enddate',
         //"SELECT * FROM (SELECT  jobid,reporterid,aboutjob,position,localarea,address,image,providefood,contractorwork,jobdate , ( 3959 * acos( cos( radians(:status1) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(:status2) ) + sin( radians(:status1) ) * sin( radians( latitude ) ) ) ) AS distance FROM jobsposteds HAVING distance < 25 ORDER BY distance LIMIT 0 , 20)AS dummy WHERE (jobdate not between :startdate and :enddate) AND (position IN (SELECT professions FROM profession_tables WHERE mobileno=:mobileno))",
         "INSERT INTO `userratings`(`userid`, `avgrating`, `teamrate`, `beharate`, `punrate`, `hardrate`, `review`, `likes`, `dislikes`, `reports`) VALUES (:userid, :avgrating, :teamrate, :beharate, :punrate, :hardrate,:review, :likes, :dislikes, :reports)",
         
         // 'SELECT DISTINCT aboutjob, jobid,  ( 3959 * acos( cos( radians(:status1) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(:status2) ) + sin( radians(:status1) ) * sin( radians( latitude ) ) ) ) AS distance FROM jobsposteds HAVING distance < 25 ORDER BY distance LIMIT 0 , 20 where date between :startdate and :enddate',
          {
          replacements: { 
              
            userid: req.body.userid,
            avgrating: req.body.avgrating,
            teamrate: req.body.teamrate,
            beharate: req.body.beharate,
            punrate: req.body.punrate,
            hardrate: req.body.hardrate,
            review: req.body.review,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            reports: req.body.reports,
           
          
          
          
          },
            type: Sequelize.QueryTypes.INSERT
          }
        )
        .then(dbUser1 => {
          //var obj = JSON.parse(dbUser1);
          res.json(dbUser1).status(200);
          /*if (dbUser1=='') {
            return res.status(409).json({message: "there is no userrating record for this user"});
            
          } 
          else {
            res.json(dbUser1).status(200);
            
            //return res.status(200).json({message: dbUser1});
          };
          */
      })
        //.then((result1) =>  res.status(200).json(result1))
        .catch((error) =>  res.status(404).json({errorInfo: error}));  


  
};



export { Userrating_insert };