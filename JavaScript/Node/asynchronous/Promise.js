// promise di javascript memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.
// - pending merupakan keadaan promise yang sedang berjalan.
// - fulfilled merupakan keadaan promise yang terpenuhi.
// - rejected merupakan keadaan promise yang gagal terpenuhi.

// Fungsi yang mengembalikan objek Promise akan memiliki fungsi .then dan .catch. 
// Fungsi tersebut digunakan untuk mengambil nilai yang dibawa oleh resolve dan reject. 

function getUsers(isOffline) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);
    })
}