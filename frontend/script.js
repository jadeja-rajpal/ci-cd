fetch("http://localhost:5000/api/message")
.then(response => response.json())
.then(data => {
    document.getElementById("message").innerText =
        data.message;
})
.catch(() => {
    document.getElementById("message").innerText =
        "Backend Not Reachable ❌";
});
