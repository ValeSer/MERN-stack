const password = process.env.MONGO_PASSWORD

module.exports = {
    mongoURI: `mongodb+srv://Vale:${password}@valeser-mzcl3.mongodb.net/mern_shopping?retryWrites=true&w=majority`
}
