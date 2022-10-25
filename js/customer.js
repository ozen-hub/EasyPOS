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
        customers = tempData;
        console.log(tempData);
        setTableData();
    }
}

function setTableData() {
    let htmlData = '';
    customers.forEach(data => {
        htmlData += `<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.address}</td>
        <td>${data.salary}</td>
        <td>
        <button class="btn btn-success btn-sm" onclick="loadUpdateModal('${data.id}','${data.name}','${data.address}', ${data.salary})">Update</button> | 
        <button class="btn btn-danger btn-sm">Delete</button>
</td>
</tr>`;
    });
    $('#table_body').html(htmlData);
}

function saveCustomer() {
    let customer = new Customer(
        $('#customerId').val(),
        $('#customerName').val(),
        $('#customerAddress').val(),
        Number($('#customerSalary').val())
    );

    if (customers.find(data => customer.id == data.id) == undefined) {
        customers.push(customer);
        localStorage.setItem('customers', JSON.stringify(customers));
        clearFields();
        launchModal('success!', 'Customer Saved');
    } else {
        launchModal('warning!', 'Already Exists');
    }

}


const launchModal = (type, message) => {
    //document.getElementById('success-modal').click();
    $('#exampleModalLabel').html(type);
    $('.save-data-body').html(message);
    /* let showMessage=message;
     title='';
     if (type==='success'){
         title='Success!';
     }else if(type==='warning'){
         title='Warinng!'
     }*/
    $('#success-modal').click();
}

const clearFields = () => {
    $('#customerId').val('');
    $('#customerName').val('');
    $('#customerAddress').val('');
    $('#customerSalary').val('');
}

function loadUpdateModal(id, name, address, salary) {
    $('#update_customer_id').val(id);
    $('#update_customer_name').val(name);
    $('#update_customer_address').val(address);
    $('#update_customer_salary').val(salary);

    $('#update-modal-button').click();
}