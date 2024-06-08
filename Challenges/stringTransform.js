function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        const reversed = str.split('').reverse().join('');
        return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        return str;
    }
}

// Example usage:
console.log(transformString("Bread")); 
console.log(transformString("Pizza")); 
console.log(transformString("cips")); 
console.log(transformString("chocolet")); 
