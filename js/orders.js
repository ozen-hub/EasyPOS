let orders=[];
const initOrders=()=>{
    let tempData = JSON.parse(localStorage.getItem('orders'));
    if (tempData !== null) {
        orders = tempData;
        setTableData();
    }
}
function setTableData() {
    let rowData='';
    orders.forEach(responseData=>{
        rowData+=`<tr>
<td>${responseData.orderId}</td>
<td>${responseData.date}</td>
<td>${responseData.total}</td>
<td><button class="btn btn-primary btn-sm" onclick="showDetails('${responseData.orderId}')">Show Details</button></td>
</tr>`;
    });
    $('#table').html(rowData);
}
const showDetails=(id)=>{
    const order = orders.find((e)=>id==e.orderId);
    if (order!=undefined){
        $('#modal-button').click();
        // load table one data
        $('#orderId').html(order.orderId);
        $('#cost').html(order.total);
        $('#date').html(order.date);
        $('#customerId').html(order.customer);
        let customers = JSON.parse(localStorage.getItem('customers'));
        if (customers !== null) {
           tempCustomer = customers.find(e=>e.id==order.customer);
            $('#customerName').html(tempCustomer.name);
        }
        // load table one data
        // load table Two data

        // load table Two data

    }
}