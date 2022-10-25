let customers = [];

function Customer(id, name, address, salary) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.salary = salary;
};
initializeCustomers = () => {
    let tempData = JSON.parse(localStorage.getItem('customers'));
    if (tempData !== null) {
        console.log(tempData);
    }
}

function saveCustomer() {
    let customer = new Customer(
        $('#customerId').val(),
        $('#customerName').val(),
        $('#customerAddress').val(),
        Number($('#customerSalary').val())
    );
    customers.push(customer);
    localStorage.setItem('customer', JSON.stringify(customers));
    clearFields();
    launchModal();
}

const launchModal=()=>{
    //document.getElementById('success-modal').click();
    $('#success-modal').click();
}

const clearFields = () => {
    $('#customerId').val('');
    $('#customerName').val('');
    $('#customerAddress').val('');
    $('#customerSalary').val('');
}