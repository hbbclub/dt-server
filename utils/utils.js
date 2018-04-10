module.exports.abortAndSendJsonToClient = function (err, req, res, data) {
    if (!err) {
        res.json({ok: 0, date: data, msg: '请求成功'})
    } else {
        res.json({ok: 1, msg: err.message,})
    }
    req.abort();
};