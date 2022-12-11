const bcrypt = require('bcryptjs');

export function hashPassword(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}

export function comparePasword(password, hash) {
    return bcrypt.compareSync(password, hash);
}