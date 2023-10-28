function manipulateString(inputString, callback){
    const manipulatedString = inputString.toUpperCase();
    callback(manipulatedString)
};
function logString(manipulatedString){
    console.log(`The mainpulated string is : ${manipulatedString}`);
}

manipulateString("Hello, World !", logString);