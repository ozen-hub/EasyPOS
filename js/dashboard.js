loadUserDetails=()=>{
        let userDetails =
        JSON.parse(localStorage.getItem('user'));
        $('.user-name').html(userDetails.name);
        $('#avatar').attr('src',userDetails.avatar);
        setUi('customer.html');
}
setUi=(address)=>{
    if (address==='customer.html'){
        initializeCustomers();
    }
    $('#container').load(address);
}