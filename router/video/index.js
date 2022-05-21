const express = require('express');
const router = express.Router();
const VideoSchema = require('../../schema/video/index');

const getFilters = (queryString)=>{
    let filter;
    if( queryString.author){
        filter= { ...filter , author:queryString.author}
    }
    if(queryString.fechaDesde){
        filter= { ...filter, createdDate:{ '$gt':new Date(queryString.fechaDesde)}}
    }

    if(queryString.fechaHasta){
        filter= { ...filter, createdDate:{ ...filter.createdDate || {}, '$lt':new Date(queryString.fechaHasta)}}
    }
    return filter;
}

router.get('/',(req,res)=>{

let filter = getFilters(req.query);

    VideoSchema.find(filter,(err,video)=>{
        if (err){
            res.status(500).json({Message:err})
        }else{

          res.status(200).json(video)
        }
    })
})

router.get("/:id",(req,res)=>{
    let id= req.params.id;
    VideoSchema.findById(id,(err,video)=>{
        if (err){
            res.status(500).json({Message:err})
        }else{
            res.status(200).json(video)
        }
    })
})

router.put('/:id', async (req,res)=>{
    let { title, author, description, link, createdDate} = req.body;
    let { id } = req.params;
    SongSchema.findById(id,(err,item)=>{
      if (err){
        res.status(500).json({message:err});
      }else{
        item.title = title;
        item.description = description;
        item.link = link;
        item.createdDate = createdDate;
        item.save((internalErr,doc)=>{
          if (internalErr) {

            res.status(500).json({message:internalErr});
          } else {
            res.status(200).json(doc);
          }
        })
      }
    })
  
  })


router.post('/',(req,res)=>{
    let { title, author, description, link, createdDate} = req.body;
    let newVideo = new VideoSchema({ title, author, description, link, createdDate:new Date().toISOString()})
    newVideo.save((err,doc)=>{
      if (err) {
        res.status(500).json({message:err});
      } else {
        res.status(200).json(doc);
      }
    })
  }) 
  
  router.delete("/:id", (req, res) => {
      let id= req.params.id
    VideoSchema.findById(id,(err, song) => {
      if (err) { 
        res.status(500).json({message:"Error en la base de datos"});
      }else{ 
        if (video!= null) {
    video.remove(function (error, result) {
      if (error){
          res.status(500).json({message:e});
      }else {
        res.status(200).json({message:"Eliminado exitosamente"});
      }
    });
        }else{ 
          res.status(404).send("No se encontro esa song");
        }
      }
    });
  });
  




module.exports = router;