import crypto from 'crypto';

function hash (secret) {
    return crypto.createHash('sha256').update(secret).digest('hex')
}

function validateHash (secret, hash) {
    const hashedSecret = crypto.createHash('sha256').update(secret).digest('hex');
    return hashedSecret === hash;
}

export default {
    hash,
    validateHash
}