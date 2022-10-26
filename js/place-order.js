let items=[];
let customers=[];
const loadData = () => {
  // load item codes
    let tempItemData = JSON.parse(localStorage.getItem('items'));
    if (tempItemData !== null) {
        items = tempItemData;
        let itemOptions='';
        items.forEach(response=>{
            itemOptions+=`<option value="${response.code}">${response.code}</option>`;
        });
        $('#item_code').append(itemOptions);
    }

  // load customer Ids
    let tempCustomerData = JSON.parse(localStorage.getItem('customers'));
    if (tempCustomerData !== null) {
        customers = tempCustomerData;
        let customerOptions='';
        customers.forEach(response=>{
            customerOptions+=`<option value="${response.id}">${response.id}</option>`;
        });
        $('#customer_id').append(customerOptions);
    }
}