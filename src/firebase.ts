import firebase from 'firebase'
import 'firevase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDCu7Yqa-Nt7Mhm-1HSGGIQtxZcHKbVGfk',
  authDomain: 'numerology-ae61d.firebaseapp.com',
  databaseURL: 'https://numerology-ae61d.firebaseio.com',
  projectId: 'numerology-ae61d',
  storageBucket: 'numerology-ae61d.appspot.com',
  messagingSenderId: '756589978042',
  appId: '1:756589978042:web:3df0af7f497c0eb9357d83',
  measurementId: 'G-XCSNKJSXGP'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
