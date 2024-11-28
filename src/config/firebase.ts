import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsm9eLK60DgbIPTIXGWzvBRGbvBPUZsJg",
  authDomain: "mighty-pinner.firebaseapp.com",
  projectId: "mighty-pinner",
  storageBucket: "mighty-pinner.firebasestorage.app",
  messagingSenderId: "475747703677",
  appId: "1:475747703677:web:7f0f9bf347a75eda1c0a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Set persistence to LOCAL
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error('Error setting auth persistence:', error);
  });

export { auth };