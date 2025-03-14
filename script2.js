// انتخاب المان‌ها
const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");
const loginForm = document.querySelector("#login-form");

// تست اولیه برای مطمئن شدن از لود شدن المان‌ه
if (!loginForm) {
    console.error("Login form not found!");
} else {
    console.log("Login form found:", loginForm);
}

// باز کردن فرم لاگین
formOpenBtn.addEventListener("click", () => {
    home.classList.add("show");
    console.log("Form opened");
});

// بستن فرم لاگین
formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
    console.log("Form closed");
});

// نمایش/مخفی کردن پسورد
pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

// جابجایی بین لاگین و ثبت‌نام
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// چک کردن لاگین
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = loginForm.querySelector("input[type='text']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    console.log("Username entered:", username);
    console.log("Password entered:", password);

    const validUser = "darkkon";
    const validPass = "1234";

    if (username === validUser && password === validPass) {
        console.log("Login successful! Redirecting...");
        window.location.href = "dashboard.html";
    } else {
        console.log("Invalid credentials");
        alert("یوزر یا پسورد اشتباهه!");
    }
});

// اضافه کردن کد برای ذخیره اطلاعات کاربر
const signupForm = document.querySelector("#signup-form");

if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = signupForm.querySelector("input[type='text']").value;
        const password = signupForm.querySelector("input[type='password']").value;

        // ذخیره اطلاعات کاربر در localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("ثبت‌نام با موفقیت انجام شد!");
        formContainer.classList.remove("active"); // بستن فرم پس از ثبت‌نام
    });
} else {
    console.error("Signup form not found!");
}

document.addEventListener("DOMContentLoaded", () => {
    // کد جاوااسکریپت شما اینجا قرار می‌گیرد
});
