// script.js

// إظهار صفحة تسجيل الدخول وإخفاء صفحة التسجيل
document.getElementById('to-signin').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.signin-container').style.display = 'flex';
    document.querySelector('.signup-container').style.display = 'none';
});

// إظهار صفحة التسجيل وإخفاء صفحة تسجيل الدخول
document.getElementById('to-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.signup-container').style.display = 'flex';
    document.querySelector('.signin-container').style.display = 'none';
});

// يمكنك إضافة أحداث التعامل مع النماذج مثل التحقق من البيانات هنا


