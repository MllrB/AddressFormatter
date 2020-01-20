function isEircode(testString) {

    let stringToTest = testString.trim();
    let secondChar = parseInt(stringToTest[1]);
    let thirdChar = parseInt(stringToTest[2]);

    if (stringToTest === '') { return false; }

    if (stringToTest[0].toLowerCase() != stringToTest[0].toUpperCase() && Number.isInteger(secondChar) && Number.isInteger(thirdChar)) {
        return true;
    } else return false;

}

function isIreland(testString) {
    let ireland = testString.toLowerCase();
    ireland = ireland.trim();

    if (ireland === '') { return false; }

    if (ireland.length >= 7) {
        if (ireland[0] == 'i' && ireland[1] == 'r' && ireland[2] == 'e' && ireland[3] == 'l' &&
            ireland[4] == 'a' && ireland[5] == 'n' && ireland[6] == 'd') {
            return true;
        } else return false;
    } else return false;
}

function removeCommas(testString) {
    let addressNoCommas = [];
    let stringHolder;

    for (let i = 0; i < testString.length; i++) {
        if (testString[i].includes(',')) {
            stringHolder = testString[i].split(',');
            for (let x = 0; x < stringHolder.length; x++) {
                stringHolder[x] = stringHolder[x].trim();
                if (stringHolder[x] === "") { break; }
                addressNoCommas.push(stringHolder[x]);
            }
        } else addressNoCommas.push(testString[i]);
    }

    return addressNoCommas;
}

function formatAddress() {
    let inputtedAddress;
    let newArray;
    let newString = "";
    let stringNoCommas = "test substring";
    let eircode = " ";
    inputtedAddress = document.getElementById("inputAddress").value;
    console.log(inputtedAddress);

    inputtedAddress = inputtedAddress.toLowerCase();

    newArray = inputtedAddress.split('\n');
    console.log("newARRAY = " + newArray);
    stringNoCommas = removeCommas(newArray);
    console.log('after removal of commas: ' + stringNoCommas);

    for (let i = 0; i < stringNoCommas.length; i++) {
        console.log('line ' + i + ': ' + stringNoCommas[i]);
        if (stringNoCommas[i] != '') {
            if (isEircode(stringNoCommas[i])) {
                stringNoCommas[i] = stringNoCommas[i].toUpperCase();
                console.log(stringNoCommas[i]);
                eircode = stringNoCommas[i];
            } else if (isIreland(stringNoCommas[i])) {
                console.log("found and removed Ireland");
            } else newString = newString + stringNoCommas[i] + '\n';
        }
    }

    newString = newString + eircode;

    document.getElementById("outputAddress").value = newString;
}