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
        setItemData();
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
        setCustomerData();
    }
}
$('#customer_id').change(()=>{
    setCustomerData();
});
function setCustomerData(){
    let tempCustomerId= $('#customer_id').val();
    let tempCustomer= customers.find(response=>response.id==tempCustomerId);
    $('#name').val(tempCustomer.name);
    $('#address').val(tempCustomer.address);
    $('#salary').val(tempCustomer.salary);
}

$('#item_code').change(()=>{
    setItemData();
});
function setItemData(){
    let tempItemCode= $('#item_code').val();
    let tempItem= items.find(response=>response.code==tempItemCode);
    $('#description').val(tempItem.description);
    $('#unit-price').val(tempItem.unitPrice);
    $('#qty-on-hand').val(tempItem.qtyOnHand);
}