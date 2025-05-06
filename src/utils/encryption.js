// filepath: secure-messaging-app/src/utils/encryption.js
const crypto = require('crypto');

// Symmetric encryption using AES
const algorithm = 'aes-256-cbc';
const key = Buffer.from('0123456789abcdef0123456789abcdef', 'utf8'); // Chave fixa de 32 bytes
const ivLength = 16; // Tamanho do IV (16 bytes)

// Encrypt message
function encryptMessage(text) {
    const iv = crypto.randomBytes(ivLength); // IV gerado dinamicamente
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted };
}

// Decrypt message
function decryptMessage(encryptedData, iv) {
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = { encryptMessage, decryptMessage };