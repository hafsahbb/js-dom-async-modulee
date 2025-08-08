function fetchDataWithCallback(callback) {
    let error = false; // change this to true to simulate an error 
    setTimeout(function () {
        try {
            if (error) {
                throw new Error("Fetch failed");
            } else {
                callback("Data fetched");
            }
        } catch (err) {
        console.error("Error:", err.message);
        }
    }, 2000);
}
// Test the function
fetchDataWithCallback(function (result) {
  console.log(result);
});                      