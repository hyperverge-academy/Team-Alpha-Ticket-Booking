const tokenModel = require('../Models/token.model')

const saveToken = function (data){
    return tokenModel.createLoginToken(data)
}
module.exports = {saveToken}