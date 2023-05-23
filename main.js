let idCounter = 1;

function addComment(displayName, commentContent)
{
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.id = idCounter++;

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    newComment.appendChild(contentContainer);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    const icon = document.createElement('img');
    icon.src = 'profile_picture.svg';
    icon.alt = 'User Icon';
    iconContainer.appendChild(icon);
    contentContainer.appendChild(iconContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    contentContainer.appendChild(textContainer);

    const displayNameElement = document.createElement('p');
    displayNameElement.classList.add('display-name');
    displayNameElement.innerText = displayName;
    textContainer.appendChild(displayNameElement);

    const contentElement = document.createElement('p');
    contentElement.innerText = commentContent;
    textContainer.appendChild(contentElement);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    contentContainer.appendChild(buttonContainer);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function ()
    {
        newComment.remove();
    });
    buttonContainer.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';

    const editContainer = document.createElement('div');
    editContainer.style.display = 'flex';
    editContainer.style.flexDirection = 'column';
    editContainer.appendChild(editButton);
    buttonContainer.appendChild(editContainer);

    editButton.addEventListener('click',
        function ()
        {
            editContainer.removeChild(editButton);
            const textarea = document.createElement('textarea');
            textarea.value = contentElement.innerText;
            textarea.classList.add('edit-textarea');
            textarea.style.display = 'block';
            contentElement.style.display = 'none';
            textContainer.appendChild(textarea);

            const submitButton = document.createElement('button');
            submitButton.innerText = 'Submit changes';
            submitButton.style.marginLeft = '10px';
            submitButton.addEventListener('click', function ()
            {
                contentElement.innerText = textarea.value;
                contentElement.style.display = 'block';
                textarea.style.display = 'none';
                editContainer.removeChild(submitButton);
                editContainer.appendChild(editButton);
            });
            editContainer.appendChild(submitButton);
        });

    document.getElementById('commentsSection').prepend(newComment);
}


addComment(`TheMan`, `Hard to argue with that🤔`);
addComment(`Guest1234`, `Why would I change your mind? Its the fastest growing industry out there...`);
addComment(`EnoughSaid`, `Preach`);
addComment(`asdf`, `💰`);
document.getElementById('postButton').addEventListener('click', function ()
{
    const displayName = document.getElementById('displayName').value;
    const commentContent = document.getElementById('commentContent').value;

    addComment(displayName, commentContent);
});
