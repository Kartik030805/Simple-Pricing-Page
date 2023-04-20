const checkbox = document.getElementById("checkbox");
const free_a_m = document.getElementById("free-a-m");
const basic_rup = document.getElementById("basic-rup");
const basic_a_m = document.getElementById("basic-a-m");
const premium_rup = document.getElementById("premium-rup");
const premium_a_m = document.getElementById("premium-a-m");

checkbox.addEventListener("click", () => {
    free_a_m.textContent = free_a_m.textContent === "User / Annual" ? "User / Month" : "User / Annual";
    basic_rup.textContent = basic_rup.textContent === "4.49" ? "6.00" : "4.49";
    basic_a_m.textContent = basic_a_m.textContent === "User / Annual" ? "User / Month" : "User / Annual";
    premium_rup.textContent = premium_rup.textContent === "9.49" ? "12.00" : "9.49";
    premium_a_m.textContent = premium_a_m.textContent === "User / Annual" ? "User / Month" : "User / Annual";
})