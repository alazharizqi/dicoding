try {
    console.log("awal blok try");
    errorCode;
    console.log("akhir blok try");

} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("baris diabaikan");
} finally {
    console.log("akan tetap dieksekusi");
}