let formData = { email: "", message: "" };

const emailInputEl = document.querySelector('input[name="email"]');
const messageInputEl = document.querySelector('textarea[name="message"]');
const formEl = document.querySelector('.feedback-form');

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        if (parsedData.email) {
            emailInputEl.value = parsedData.email;
            formData.email = parsedData.email; // Update formData
        }
        if (parsedData.message) {
            messageInputEl.value = parsedData.message;
            formData.message = parsedData.message; // Update formData
        }
    }
});

emailInputEl.addEventListener('input', () => {
    formData.email = emailInputEl.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

messageInputEl.addEventListener('input', () => {
    formData.message = messageInputEl.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        return alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData.email = "";
        formData.message = "";
        emailInputEl.value = "";
        messageInputEl.value = "";
    }
});