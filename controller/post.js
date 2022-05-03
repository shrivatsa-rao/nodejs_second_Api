const Post=require('../model/port')


exports.getposts=(req,res)=>{
   const posts=Post.find()
       .then((posts)=>{
           res.status(200).json({posts:posts});
       })
       
       .catch(err=>console.log(err));
}




exports.createpost=(req,res)=>{
    const post=new Post(req.body)

    post.save().then(result=>{
        res.status(200).json({
            post:result
        })
    })
}
    //console.log("creating post",req.body);

//     post.save((err,result)=>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         res.status(200).json({
//             post:result

//         })
//     })
// }


