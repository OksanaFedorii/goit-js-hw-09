let formData = {
    email: "",
    message: ""
};

function saveFormData() {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function loadFormData() {
    const savedFormData = localStorage.getItem("feedback-form-state");
    if (savedFormData) {
    formData = JSON.parse(savedFormData);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
    }
}

function validateForm() {
    if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return false;
    }
    return true;
}

window.onload = loadFormData;

document.querySelector('.feedback-form').addEventListener('input', function(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    formData[inputName] = inputValue;
    saveFormData();
});


document.querySelector('.feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = { email: "", message: "" };
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
    }
});