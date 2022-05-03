

const express=require('express')

const postcontroller=require('../controller/post')

const validator=require('../helpers');

const router=express.Router()

router.get('/',postcontroller.getposts)

router.post('/post',validator.createPostvalidator,postcontroller.createpost)

module.exports=router;

