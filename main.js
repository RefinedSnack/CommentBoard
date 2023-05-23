document.getElementById('submit-button').onclick = function () {
    // Get the comment input value
    var comment = document.getElementById('comment-input').value;
    // Clear the input area
    document.getElementById('comment-input').value = "";

    // Create a new div for the comment
    var commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.innerText = comment;

    // Append the new comment div to the comment section
    document.getElementById('comment-section').appendChild(commentDiv);
};
