fetch("https://jsonplaceholder.typicode.com/posts/123456789").then((Response) => {
    if(!Response.ok){
        throw new Error("Network response was not ok");
    }
    return Response.json();
});