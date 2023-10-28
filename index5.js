function inputName(name){
    return new Promise((resolve) =>{
        const greeting = `Hello, ${name}!`
        resolve(greeting);
    });
};

inputName("Gaurav").then((message) =>console.log(message));