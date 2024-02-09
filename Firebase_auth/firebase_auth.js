const admin = require("firebase-admin");
const serviceAccount = require("./Service_firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Function to fetch user data by UID
function fetchUserData(uid) {
  admin.auth().getUser(uid)
    .then(userRecord => {
      console.log('Successfully fetched user data:', userRecord.toJSON());
      if (userRecord.email === 'ayushjha@travaura.com') {
        console.log('User is an admin');
      }
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}

// Function to verify ID token and get UID
function verifyUserToken(idToken) {
  admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
      const uid = decodedToken.uid;
      // Perform further operations with the uid if necessary
      console.log(`UID from verified token: ${uid}`);
    })
    .catch(error => {
      console.error('Error verifying ID token:', error);
    });
}

module.exports = { admin, fetchUserData, verifyUserToken };
