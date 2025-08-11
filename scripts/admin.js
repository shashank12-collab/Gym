// admin.js
import { db } from './firebase-config.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Add Member
export async function addMember(name, email, packageType, phone, joinDate) {
    try {
        await addDoc(collection(db, "members"), {
            name,
            email,
            phone,
            package: packageType,
            joinDate: joinDate || new Date(),
            status: "active"
        });
        console.log("Member added successfully");
        alert("Member added successfully!");
    } catch (error) {
        console.error("Error adding member:", error);
        alert("Error adding member");
    }
}

// Load Members into Table
export async function loadMembers() {
    try {
        const querySnapshot = await getDocs(collection(db, "members"));
        const tableBody = document.querySelector("#membersTable tbody");
        tableBody.innerHTML = ""; // Clear existing rows

        querySnapshot.forEach((docSnap) => {
            const member = docSnap.data();
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${docSnap.id}</td>
                <td>${member.name}</td>
                <td>${member.email}</td>
                <td>${member.package}</td>
                <td><span class="status ${member.status}">${member.status}</span></td>
                <td>
                    <button class="action-btn edit">Edit</button>
                    <button class="action-btn delete">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error("Error loading members:", error);
    }
}
// Add Bill
export async function addBill(memberId, amount, billType, dueDate, description) {
    try {
        await addDoc(collection(db, "bills"), {
            memberId,
            amount,
            billType,
            dueDate,
            description,
            status: "pending",
            createdAt: new Date()
        });
        alert("Bill generated successfully!");
    } catch (error) {
        console.error("Error generating bill:", error);
        alert("Error generating bill");
    }
}

// Load Bills (example)
export async function loadBills() {
    try {
        const querySnapshot = await getDocs(collection(db, "bills"));
        querySnapshot.forEach(docSnap => {
            console.log(docSnap.id, docSnap.data());
        });
    } catch (error) {
        console.error("Error loading bills:", error);
    }
}

