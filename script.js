$(window).on('load', () => {
    console.log('started');
    let user = ["../img/img_17.jpg"];
    let num = 1; // Судьи слева и справа
    let portrait_position = 0;
    let now = -1; // Плавающий влево и вправо
    let send_btn = document.getElementById('send_btn');
    let send_txt = document.getElementById('send_txt');
    let chat_ul = document.getElementById('chat_ul');
    let chat_span = chat_ul.getElementsByTagName('span');
    let chat_img = chat_ul.getElementsByTagName('img');
    let user_name = document.getElementById('user-name');

    send_btn.onclick = function () {
        if (send_txt.value == '') {
            alert ('Пожалуйста, не дорожите словами, как золото');
        } else {
            chat_ul.innerHTML += '<li>' +
                '<div class="message from_user"><p class="message__author">' + user_name.innerHTML + '</p><p class="messge__text">' + send_txt.value + '</p></div></li>';

            now++;
            if (num==0) {
                chat_span[now].className = 'spanright';
                chat_img[now].className = 'imgright';
            }
            else {
                chat_span[now].className = 'spanleft';
                chat_img[now].className = 'imgleft';
            }
            send_txt.value = '';
            // Когда контента слишком много, поместите полосу прокрутки внизу
            // contentcontent.scrollTop = content.scrollHeight;
        }
    }


})