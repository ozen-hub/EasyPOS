
loadUserDetails=()=>{
    $('#item').hide();
    $('#orders').hide();
    $('#place-order').hide();

    try {
        let userDetails =
            JSON.parse(localStorage.getItem('user'));
        $('.user-name').html(userDetails.name);
        $('#avatar').attr('src',userDetails.avatar);
    }catch (e) {
        alert('Something went wrong!');
        window.location.replace('../index.html')
    }

}

function setUi(name){
    $('#customer').fadeOut(1000);
    $('#item').fadeOut(1000);
    $('#orders').fadeOut(1000);
    $('#place-order').fadeOut(1000);

    switch (name) {
        case "customer": $('#customer').show(1000);break;
        case "item":$('#item').show(1000);break;
        case "place-order":$('#orders').show(1000);break;
        case "orders":$('#place-order').show(1000);
    }
}