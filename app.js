const Email = document.getElementById("Email");

Email.addEventListener("input", (e) => {
const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
const currentValue = e.target.value;
const valid = EmailRegex.test(currentValue);

    document.querySelector(".Email").style.display = valid
     ? "none"
     : "block";

});

const Password = document.getElementById("password");

Password.addEventListener("input", (e) => {
const PasswordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/; 
const currentValue2 = e.target.value;
const valid2 = PasswordRegex.test(currentValue2);

    document.querySelector(".Password").style.display = valid2
    ? "none"
    : "block";
});
