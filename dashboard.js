// انتخاب المان‌ها
const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");
const sidebar = body.querySelector("nav");
const sidebarToggle = body.querySelector(".sidebar-toggle");
const logoutBtn = document.querySelector("#logout-btn");

// تنظیم حالت تاریک/روشن
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

// تنظیم حالت باز/بسته بودن سایدبار
let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

// تغییر حالت تاریک/روشن
modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

// باز/بسته کردن سایدبار
sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
});

// خروج و بازگشت به صفحه لاگین
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Logout clicked, redirecting to index.html");
    window.location.href = "index.html";
});