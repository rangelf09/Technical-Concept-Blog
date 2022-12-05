const newFromHandler = async function(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value
    const postContent = document.querySelector('textarea[name="post-body"]').value

    await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
            postTitle,
            postContent,
        }),
        headers: {"content-Type": "application/json"},
    });
}


document.querySelector('#new-post-form')
document.addEventListener('submit', newFromHandler);