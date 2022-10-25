let customers = [];

function Customer(id, name, address, salary) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.salary = salary;
}

initializeCustomers = () => {
    let tempData = JSON.parse(localStorage.getItem('customers'));
    console.log(tempData)
    if (tempData !== null) {
        customers=tempData;
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

    if (customers.find(data=>customer.id==data.id)==undefined){
        customers.push(customer);
        localStorage.setItem('customers', JSON.stringify(customers));
        clearFields();
        launchModal();
    }else{
        alert('Already Exists!');
    }

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