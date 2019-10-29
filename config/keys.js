const password = process.env.MONGO_PASSWORD

module.exports = {
    mongoURI: `mongodb+srv://Vale:${password}@valeser-mzcl3.mongodb.net/test?retryWrites=true&w=majority`
}

