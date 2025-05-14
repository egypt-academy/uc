
function validateCode(event) {
    event.preventDefault();
    const code = document.getElementById('courseCode').value;
    const validCode = "2810172018";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'level1.html';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}
