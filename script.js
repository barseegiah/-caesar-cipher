// // Encrypt the input text
// function encrypt() {
//     // Get the text from the input box
//     const inputText = document.getElementById('inputText').value;
    
//     // Get the shift value and convert it to a number
//     const shiftValue = parseInt(document.getElementById('shiftValue').value);
    
//     // Use the caesarCipher function to encrypt the text
//     const encryptedText = caesarCipher(inputText, shiftValue);
    
//     // Show the encrypted text in the output box
//     document.getElementById('outputText').value = encryptedText;
// }

// // Decrypt the input text
// function decrypt() {
//     // Get the text from the input box
//     const inputText = document.getElementById('inputText').value;
    
//     // Get the shift value and convert it to a number
//     const shiftValue = parseInt(document.getElementById('shiftValue').value);
    
//     // Use the caesarCipher function to decrypt the text (negative shift)
//     const decryptedText = caesarCipher(inputText, -shiftValue);
    
//     // Show the decrypted text in the output box
//     document.getElementById('outputText').value = decryptedText;
// }

// // Function to perform Caesar Cipher
// function caesarCipher(text, shift) {
//     // Split the text into an array of characters
//     return text.split('').map(char => {
//         // Check if the character is a letter
//         if (char.match(/[a-z]/i)) {
//             // Get the ASCII code of the character
//             const code = char.charCodeAt();
            
//             // Initialize the shifted character code
//             let shiftedCode;
            
//             // Check if the character is an uppercase letter
//             if (code >= 65 && code <= 90) {
//                 // Shift within the range of uppercase letters
//                 shiftedCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
//             }
//             // Check if the character is a lowercase letter
//             else if (code >= 97 && code <= 122) {
//                 // Shift within the range of lowercase letters
//                 shiftedCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
//             }
            
//             // Convert the shifted code back to a character
//             return String.fromCharCode(shiftedCode);
//         }
//         // If the character is not a letter, return it unchanged
//         return char;
//     }).join(''); // Join the array back into a string
// }


// Function to encrypt text using Caesar Cipher
function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const shiftValue = parseInt(document.getElementById('shiftValue').value);

    if (shiftValue < 1 || shiftValue > 25) {
        alert('Key must be between 1 and 25');
        return;
    }

    const outputText = caesarCipher(inputText, shiftValue);
    document.getElementById('outputText').value = outputText;
}

// Function to decrypt text using Caesar Cipher
function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const shiftValue = parseInt(document.getElementById('shiftValue').value);

    if (shiftValue < 1 || shiftValue > 25) {
        alert('Key must be between 1 and 25');
        return;
    }

    const outputText = caesarCipher(inputText, -shiftValue);
    document.getElementById('outputText').value = outputText;
}

// Helper function to perform the Caesar Cipher
function caesarCipher(text, shift) {
    // Split the text into an array of characters
    return text.split('').map(char => {
        // Check if the character is a letter
        if (char.match(/[a-z]/i)) {
            // Get the ASCII code of the character
            const code = char.charCodeAt(0);

            // Initialize the shifted character code
            let shiftedCode;

            // Check if the character is an uppercase letter
            if (code >= 65 && code <= 90) {
                // Shift within the range of uppercase letters
                shiftedCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
            }
            // Check if the character is a lowercase letter
            else if (code >= 97 && code <= 122) {
                // Shift within the range of lowercase letters
                shiftedCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
            }

            // Convert the shifted code back to a character
            return String.fromCharCode(shiftedCode);
        }
        // If the character is not a letter, return it unchanged
        return char;
    }).join(''); // Join the array back into a string
}