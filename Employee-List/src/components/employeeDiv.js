// const printName = function () {
//     console.log("This is the name:", this.firstName);
// }

export const renderEmployeeCard = (employee) => {
    let employeeCard = document.createElement("div");
    employeeCard.innerHTML = `
        <div class="employee-image">
            <img src="${employee.imageUrl}" alt="${employee.firstName} ${employee.lastName}" />
        </div>
        <p id="emp-${employee.id}">${employee.firstName} ${employee.lastName}</p>
        <p>${employee.company}</p>
    `;
    employeeCard.className = "employee-card";

    // employeeCard
    // .querySelector(`#emp${employee.id}`)
    // .addEventListener("click", printName.bind(employee));
    return employeeCard;
}
