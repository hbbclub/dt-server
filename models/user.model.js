var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        match: [
            /^.+\@.+\..+$/i,
            "邮箱格式不正确"
        ],
        trim: true,
        required: "邮箱不能为空!"
    },
    password: {
        type: String,
        validate: [
            password => password && password.length >= 6,
            "密码长度必须6位以上"
        ]
    },
    phone: {
        type: String,
        validate: [
            phone => phone && phone.length === 11,
            "手机长度必须11位"
        ],
        unique: true,
    },
    sex: {
        type: String,
        enum: ['男', '女']
    },
    items: [{type: String}]
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'},collection: "user"});
mongoose.model("User", UserSchema);
//将来可用mongoose.model("User")取出使用: 增删改查