const serviceConst = {
    weekDays:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    securityKey : "123!@#asdf",
    adminData : {
        fullName:"admin",
        mobileNumber:"0000000000",
        password:"admin@123",
        role:"admin"
      },
    tokenExpire : 'TokenExpiredError',
    expireTime: '86400s'
}
module.exports = {serviceConst}