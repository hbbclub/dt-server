var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    qs: [{
        title: {
            type: String,
            trim: true,
            required: "标题不能为空!"
        },
        options: [{type: String}],
        type: {
            type: String,
            enum: ["text", "check", "radio"],
            required:"问题类型字段不能为空"
        }
    }],

}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}, collection: "questions"});

mongoose.model("question", QuestionSchema);