const crypto = require("crypto");

const util = require('util')

const { log } = require("console");


const scryptHash = async function (string, salt) {
    const saltInUse = salt || crypto.randomBytes(16).toString('hex');
    const hashBuffer = await util.promisify(crypto.scrypt)(string, saltInUse, 32);
    return `${hashBuffer.toString('hex')}:${saltInUse}`
}

exports.scryptHash = scryptHash;

exports.scryptVerify = async function(testString, hashAndSalt) {
    const [, salt] = hashAndSalt.split(":")
    return await scryptHash(testString, salt) === hashAndSalt;
}
