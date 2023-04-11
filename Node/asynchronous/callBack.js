// callback merupakan salah satu implementasi dari konsep high order function yang sudah kita bahas pada modul
// functional programming.

function getUsers(isOffline, callback) {
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

function userCallback(error, users) {
    if (error) {
        console.log('process failed: ', error.message);
        return;
    }

    console.log('process success: ', users);
}

getUsers(false, userCallback);
getUsers(true, userCallback);

// isOffline ditambahkan jika terdapat masalah jaringan ketika get user.