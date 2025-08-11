import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

async function viewBills(memberId) {
    const billsSnapshot = await getDocs(collection(db, `members/${memberId}/bills`));
    billsSnapshot.forEach(doc => {
        console.log(doc.data());
    });
}
