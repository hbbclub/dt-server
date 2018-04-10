module.exports.abortAndSendJsonToClient = function (err, req, res, data) {
    if (!err) {
        res.json({ok: 0, date: data, msg: '请求成功'})
    } else {
        res.json({ok: 1, msg: err.message,})
    }
    if (req){
        req.abort();
    }
};

module.exports.assertMustParameter = function ( req, res, parameters) {
    parameters.forEach((p)=>{
        if (!req.body[p]) {
            res.json({ok: 1, msg: `参数 :${p} 不能为空`})
            req.abort();
        }
    })
};