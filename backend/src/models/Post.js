import mongoose, {Schema} from 'mongoose'

const Post = new Schema({
    title: String,
    writer: String,
    type: String,
    content: String,
    createdTime: {type: Date, default: new Date()},
    views: {type: Number, default: 0}
})

Post.statics.getCount = () => {
    return this.count({}).exec()
}

export default mongoose.model('Post', Post);