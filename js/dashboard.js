
loadUserDetails=()=>{
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