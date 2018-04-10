module.exports.sendJsonToClient = function (err, req, res, data) {
    if (!err) {
        res.json({ok: 0, date: data, msg: '请求成功'})
    } else {
        throw  Error(err.message)
    }
};

module.exports.assertMustParameter = function (req, res, parameters) {
    parameters.forEach((p) => {
        if (!req.body[p]) {
            throw  Error(`参数 :${p} 不能为空`)
        }
    })
};