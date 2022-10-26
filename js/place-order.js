let items = [];
let customers = [];
let cart = [];
const loadData = () => {
    generateOrderId();
    //set Date
    // let date = new Date();
    // console.log(date)
    // console.log(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay());
    $('.date').html(new Date().toISOString().split('T')[0]);
    // load item codes
    let tempItemData = JSON.parse(localStorage.getItem('items'));
    if (tempItemData !== null) {
        items = tempItemData;
        let itemOptions = '';
        items.forEach(response => {
            itemOptions += `<option value="${response.code}">${response.code}</option>`;
        });
        $('#item_code').append(itemOptions);
        setItemData();
    }

    // load customer Ids
    let tempCustomerData = JSON.parse(localStorage.getItem('customers'));
    if (tempCustomerData !== null) {
        customers = tempCustomerData;
        let customerOptions = '';
        customers.forEach(response => {
            customerOptions += `<option value="${response.id}">${response.id}</option>`;
        });
        $('#customer_id').append(customerOptions);
        setCustomerData();
    }
}
$('#customer_id').change(() => {
    setCustomerData();
});

function setCustomerData() {
    let tempCustomerId = $('#customer_id').val();
    let tempCustomer = customers.find(response => response.id == tempCustomerId);
    $('#name').val(tempCustomer.name);
    $('#address').val(tempCustomer.address);
    $('#salary').val(tempCustomer.salary);
}

$('#item_code').change(() => {
    setItemData();
});

function setItemData() {
    let tempItemCode = $('#item_code').val();
    let tempItem = items.find(response => response.code == tempItemCode);
    $('#description').val(tempItem.description);
    $('#unit-price').val(tempItem.unitPrice);
    $('#qty-on-hand').val(tempItem.qtyOnHand);
}

function Cart(code, description, unitPrice, qty, total) {
    this.code = code;
    this.description = description;
    this.unitPrice = unitPrice;
    this.qty = qty;
    this.total = total;
};

function addToCart() {
    let qty = Number($('#qty').val());
    let unitPrice = Number($('#unit-price').val());
    let total = qty * unitPrice;
    if (qty > Number($('#qty-on-hand').val())) {
        alert('Please Enter a Valid QTY');
        return;
    }
    let rowNumber = isExists($('#item_code').val());


    if (rowNumber != -1) {
        let existsTotal = cart[rowNumber].qty + qty;
        if (Number($('#qty-on-hand').val()) < existsTotal) {
            alert('Please Enter a Valid QTY');
            return;
        }
        cart[rowNumber].qty = existsTotal;
        cart[rowNumber].total = cart[rowNumber].total + total;
    } else {
        tempCartObject =
            new Cart(
                $('#item_code').val(),
                $('#description').val(),
                unitPrice,
                qty,
                total
            );
        cart.push(tempCartObject);
    }
    setCartData();
};
const setCartData = () => {
    let rows = ``;
    cart.forEach(response => {
        rows += `<tr>
<td>${response.code}</td>
<td>${response.description}</td>
<td>${response.unitPrice}</td>
<td>${response.qty}</td>
<td>${response.total}</td>
<td><button class="btn btn-danger btn-sm" onclick="#">Delete</button></td>
</tr>`;
    });
    $('#table').html(rows);
    calculateTotal();
};
const calculateTotal = () => {
    let netTotal = 0;
    cart.forEach(response => {
        netTotal += response.total;
    });
    $('#total').html(netTotal);
};
const isExists = (code) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].code == code) {
            return i;
        }
    }
    return -1;
};
const generateOrderId=()=>{
    // XQUY ==> prefix ==> item==> XQUY-PR-1  | [1000]=> (1000-> MAX - to 1000) => 1=>(1000)
    //==================================

    // D-1
    // get the last id from the database => orders ==> find last element =>

    let tempOrdersData = JSON.parse(localStorage.getItem('orders'));
    if (tempOrdersData !== null) {
        // let lastElement = tempOrdersData[tempOrdersData.length-1];
        // let lastElementId = lastElement.orderId; // D-2
        // let splitArrayValue = lastElementId.toString().split('-'); //[D,2]
        // let stringOrderId = splitArrayValue[1];
        // let numberOrderId = Number(stringOrderId);
        // let incrementedId=++numberOrderId;
        // let finalizeOrderId = 'D-'+incrementedId;
        let tempOrderId = Number(tempOrdersData[tempOrdersData.length-1].orderid.split('-')[1]);
        let finalizeOrderId = 'D-'+(tempOrderId+1);
        $('.order-id').html(finalizeOrderId);
    }else{
        $('.order-id').html('D-1');
    }

}