document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        // 既にアクティブなヘッダーをクリックした場合は閉じる
        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = null; // 高さをリセット
            button.classList.remove('active'); // アクティブクラスを削除
        } else {
            // 他のすべてのアコーディオンコンテンツを閉じる
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.maxHeight = null;
            });
            document.querySelectorAll('.accordion-header').forEach(btn => {
                btn.classList.remove('active');
            });

            // クリックされたアコーディオンを開く
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            button.classList.add('active');
        }
    });
});
