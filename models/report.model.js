var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReportSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "标题不能为空!"
    },
    //关联用户集合
    user: {type: Schema.ObjectId, ref: 'User'},
    //关联问题列表
    qsList: {type: Schema.ObjectId, ref: 'Question'},
    answer: {
        type: Array,
        request: '请答卷'
    },
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}, collection: "report"});


ReportSchema.statics = {
    findReportById: function (id) {
        return this
            .findOne({_id: id}).populate({path:'user',select:{'password':0},}).populate('qsList')
            .exec();
    }
}

mongoose.model("Report", ReportSchema);