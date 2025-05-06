
function validateCode(event) {
    event.preventDefault();
    const code = document.getElementById('courseCode').value;
    const validCode = "2810244";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'basics-course.html';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}
