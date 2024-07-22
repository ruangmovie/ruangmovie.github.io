var shopee = [
    {
        "nama": "ALAT BANTU VIBRATOR DOUBLE LIDAH KAPSUL TOYS DILDO WANITA PENGGETAR",
        "harga": 319000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/11/c883dde6-2f36-4cb8-bc14-b0b046dc3459.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/0lD8lp7hrLb"
    },
    {
        "nama": "LILO Rose Hisap Alat bantu seksual wanita- Dido Alat Getar Maju Mundur",
        "harga": 494250,
        "photo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/2/793f0661-d1c8-407a-b951-8e7d2399b3bb.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/Uupvqb9hrLb"
    },
    {
        "nama": "ALAT KESEHATAN PRIA BANTU .'.'.'.'VAGINA.'.'.'.'MANUAL.'.'.'.'AEROS",
        "harga": 200000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/27/fca9cead-1f42-4710-860e-475e2ad11c18.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/PDDDm05hrLb"
    },
    {
        "nama": "vaginamanual xuanai silikon elastis alat toys bantu kesehatan pria",
        "harga": 250000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/10/243abca4-85a8-4918-8083-27dd0f0230c1.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/nEBgRskirLb"
    },
    {
        "nama": "ALAT KESEHATAN PRIA BANTU .'.'.'.'.'VAGINA.'.'.'.'.'MANUAL.'.'.'.'.'",
        "harga": 200000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/27/70f24746-ccba-45ba-8ecd-aaa7d21cfd93.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/07RodDsirLb"
    },
    {
        "nama": "ALAT KESEHATAN TOYS PRIA VAGINATOR GETAR PISTON HEAT IR BISA HANGAT",
        "harga": 1400000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/29/319ee7ea-ef8f-48f5-aadb-459a34afbb1f.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/tax10vDirLb"
    },
    {
        "nama": "ALAT KESEHATAN TOYS PRIA VAGINATOR GETAR X9 CUP TABUNG TEMPEL LATEN",
        "harga": 850000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/29/25e45a36-447e-4685-a63d-60eca9094a63.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/Q3TeKpKirLb"
    },
    {
        "nama": "ALAT KESEHATAN TOYS PRIA VAGINATOR STROKER GETAR PISTON TABUNG TEMPEL",
        "harga": 1390000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/29/51bb3f97-7fec-4c8b-8523-3c656db7eaa7.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/PGKzkaWirLb"
    },
    {
        "nama": "ALAT KESEHATAN TOYS PRIA VAGINATOR GETAR A380 PISTON TEMPEL",
        "harga": 1400000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/4/4ae98154-2168-4eee-acac-895b81370e57.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/J3BWOL2irLb"
    },
    {
        "nama": "Alat Bantu The Turnup Butt Elektrik Sex Toys Pria Murah",
        "harga": 970000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/19/0e6d7338-2e85-4043-90b9-e97e7359bde3.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/hUGOW39irLb"
    },
    {
        "nama": "Vibrator Mona Bibir Oral Elektrik Alat Bantu Sexsual Toys Pria Usb",
        "harga": 800000,
        "photo": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/7/28/2efc67c5-d8db-4c7c-bf9b-fbdaf57191e3.jpg.webp?ect=4g",
        "link": "https://tokopedia.link/YzzoKvejrLb"
    }
];

function randomads() {
  let random = shopee[Math.floor(Math.random() * shopee.length)];
  iklan.innerHTML = `<div class="container"><div class="row"><div class="col-2"><img src="${random.photo}" onerror="this.onerror=null;this.src='assets/img/notfound.jpeg';" class="rounded float-start" alt="Rekomendasi Produk Shopee Murah" width="73px" height="73px" style="margin-left:-7px"></div><div class="col-10" style="padding-left:20px"><p class="judul-iklan" style="font-size:11pt;margin-top:-4px">${random.nama}</p><div class="row"><div class="col" style="margin-top:-12px"><p class="rupiah">Rp</p><p class="d-inline-block" style="color:#EE4D2D;font-size:16pt">${random.harga}</p></div><div class="col"><a href="${random.link}" class="position-absolute bottom-0 end-0"><button type="button" class="btn" style="margin-bottom:8px;margin-right:8px;font-size:9pt;background-color:#EE4D2D;color:white">Beli Sekarang</button></a></div></div></div></div></div>`;
  ad.innerHTML = random.ad;
}
randomads();