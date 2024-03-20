document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const loginID = document.getElementById('loginID').value;
        const password = document.getElementById('password').value;

        try {
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            // Call the contract to get the Ethereum address associated with the login ID
            const userAddress = await contract.methods.loginToAddress(loginID).call();
            
            // Call the contract to get the user's details using the Ethereum address
            const userDetails = await contract.methods.userIdentity(userAddress).call();

            // Assuming password check logic here, replace with your actual implementation
            const storedPasswordHash = userDetails.passwordHash;
            // Example password hashing logic using sha256
            const inputPasswordHash = sha256(password);

            if (storedPasswordHash === inputPasswordHash) {
                // Passwords match, redirect to user details page
                window.location.href = 'user-details.html'; // Redirect to user details page
            } else {
                alert('Invalid login details. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});
