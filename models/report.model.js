var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReportSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "标题不能为空!"
    },
    user: {type: Schema.ObjectId, ref: 'user'},
    qsList: {type: Schema.ObjectId, ref: 'questions'},
    answer:[],
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'},collection: "report"});

mongoose.model("Report", ReportSchema);