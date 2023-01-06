$(document).ready(function () {

    var arrLang = {

        'tr': {
            '0': 'Giriş Yap',
            '1': 'Anasayfa',
            '2': 'İçerik Yönetimi',
            '3': 'Kategori',
            '4': 'Kapak Türü',
            '5': 'Ürün',
            '6': 'Giris',
            '7': 'Kayıt',
            '8': 'Çıkıs',
            '9': 'Ayrıntılar',
            '10': 'Geri Dön',
            '11': 'Sepete Ekle',
            '12': 'Rol Adı',
            '13': 'Sil',
            '14': 'Güncelle',
            '15': 'Merhaba',
            '16': 'Rol Ekleme Sayfası',
            '17': 'Rol Açıklaması',
            '18': 'Kaydet',
            '19': 'Kişiler Listesi',
            '20': 'Fotoğraf',
            '21': 'Kişi Adı',
            '22': 'Kişi Soyadı',
            '23': 'Kişi Telefonu',
            '24': "Kişi Email'i",
            '25': 'Yeni Kişi Ekle',
            '26': 'Kişi Güncelleme Sayfası',
            '27': 'Kişi Ekleme Sayfası',
            
        },

        'en': {
            '0': 'Login',
            '1': 'Home',
            '2': 'Content Management',
            '3': 'Kategori',
            '4': 'Kapak Türü',
            '5': 'Product',
            '6': 'Login',
            '7': 'Register',
            '8': 'Logout!',
            '9': 'DETAILS',
            '10': 'Back to Home ',
            '11': 'Add to Cart',
            '12': 'Role Name',
            '13': 'Delete',
            '14': 'Update',
            '15': 'Hello',
            '16': 'Add Role Page',
            '17': 'Role Description',
            '18': 'Save',
            '19': 'People List',
            '20': 'Image',
            '21': 'Person Name',
            '22': 'Person Surname',
            '23': 'Person Phone',
            '24': 'Person Email',
            '25': 'Add New Person',
            '26': 'Update Person Page',
            '27': 'Add Person Page',
           
        },


    };

    $('.dropdown-item').click(function () {
        localStorage.setItem('dil', JSON.stringify($(this).attr('id')));
        location.reload();
    });

    var lang = JSON.parse(localStorage.getItem('dil'));

    if (lang == "en") {
        $(".drop_yazi").html("English");
    }
    else {
        $(".drop_yazi").html("Türkçe");

    }

    $('a,h5,p,h1,h2,span,li,button,h3,label,tr,td').each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);

    });

});