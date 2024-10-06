document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('comment-input');
    const submitButton = document.getElementById('submit-comment');
    const commentList = document.getElementById('comment-list');

    submitButton.addEventListener('click', () => {
        const comment = commentInput.value;
        if (comment) {
            const newComment = document.createElement('p');
            newComment.textContent = comment;
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    });
});