click=()=>{
    console.log('ok')
}
loadUserDetails=()=>{
    try {
        let userDetails =
            JSON.parse(localStorage.getItem('user'));
        $('.user-name').html(userDetails.name);
        $('#avatar').attr('src',userDetails.avatar);
        setUi('customer.html');
    }catch (e) {
        alert('Something went wrong!');
        window.location.replace('../index.html')
    }

}
setUi=(address)=>{
    if (address==='customer.html'){
        initializeCustomers();
    }
    $('#container').load(address);
}