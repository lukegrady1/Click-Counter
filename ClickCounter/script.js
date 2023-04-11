// Get the click count from local storage if it exists
let count = localStorage.getItem("clickCount");
if (count !== null) {
    document.getElementById("count").innerText = count;
}

// Add click event listener to the button
document.getElementById("clickBtn").addEventListener("click", function() {
    count = parseInt(document.getElementById("count").innerText);
    count++;
    document.getElementById("count").innerText = count;
    localStorage.setItem("clickCount", count);
});