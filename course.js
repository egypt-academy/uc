document.addEventListener('DOMContentLoaded', () => {
    // التعامل مع القوائم المنسدلة
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = btn.parentElement;
            const content = dropdown.querySelector('.dropdown-content');

            // إغلاق جميع القوائم المنسدلة الأخرى
            document.querySelectorAll('.dropdown-content').forEach(dc => {
                if (dc !== content) {
                    dc.classList.remove('show');
                }
            });

            // تبديل حالة القائمة الحالية
            content.classList.toggle('show');
        });
    });

    // إغلاق القوائم عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show');
            });
        }
    });

})