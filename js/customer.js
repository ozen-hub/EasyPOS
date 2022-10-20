let customers=[];
initializeCustomers=()=>{
    let tempData = JSON.parse(localStorage.getItem('customers'));
    if (tempData!==null){
        console.log(tempData);
    }
}