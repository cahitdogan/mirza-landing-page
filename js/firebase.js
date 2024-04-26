import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCVW3OYuFb513FI0WF1ZpLYzWkPq0KFdnQ",
    authDomain: "mirza-admin-panel.firebaseapp.com",
    projectId: "mirza-admin-panel",
    storageBucket: "mirza-admin-panel.appspot.com",
    messagingSenderId: "223886824963",
    appId: "1:223886824963:web:f12365279f74f59c94e036",
    measurementId: "G-SLGXRQ93L5"
};
const app = initializeApp(firebaseConfig);



//FIRESTORE

const db = getFirestore(app);

//form verilerini yaz
const formInputs = document.querySelectorAll("#contact-form input, #contact-form textarea");
const sendButton = document.querySelector("#contact-form button");
const contactForm = document.querySelector("#contact-form");
const validatorInput = document.querySelector("#contact-form #validator-input");
let formCounter = 0

sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (contactForm.reportValidity()) {
        if (validatorInput.value === "") {
            if (formCounter < 5) {
                writeData();
            } else {
                popupFilter2.style.display = "block";
                messageResultContainer.style.display = "block";
                messageResultText.innerHTML = "Ard arda çok fazla kez form gönderdiniz. Lütfen daha sonra tekrar deneyiniz.";
            }
        } else {
            popupFilter2.style.display = "block";
            messageResultContainer.style.display = "block";
            messageResultText.innerHTML = "Bot olarak algılandınız. Lütfen mesajınızı kopyalayıp sayfayı yenileyerek yeniden deneyiniz.";
        }
    }
})

async function writeData() {
    popupFilter2.style.display = "block";
    messageResultContainer.style.display = "block";

    try {
        const docRef = await addDoc(collection(db, "messages"), {
            adSoyad: formInputs[0].value,
            ePosta: formInputs[1].value,
            telNo: formInputs[2].value,
            mesaj: formInputs[3].value,
            messageTimestamp: serverTimestamp()
        });
        formCounter++;
        messageResultText.style.color = "#25d366";
        messageResultText.innerHTML = "Mesajınız başarıyla gönderildi!";
    } catch (e) {
        messageResultText.style.color = "#f12e2e";
        messageResultText.innerHTML = "Mesajınız gönderilemedi. Lütfen internet bağlantınızı kontrol edin veya tekrar deneyin.";
        messageResultContainer.style.display = "block";
    }
}   