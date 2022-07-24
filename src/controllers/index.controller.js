function getIndex(req,res){
    res.json({
        msj: "Hola Mundo"
    })
}

function postIndex(req,res){
    res.json({
        msj: "Hola desde postIndex"
    })
}

module.exports = {getIndex,postIndex};