const videoElement = document.getElementById('background-video');
const videoSources = [
    './isi/video/infobot.mp4',
    './isi/video/video3.mp4',
    './isi/video/video4.mp4',
    './isi/video/video5.mp4'
];

let currentVideoIndex = 0;

function playNextVideo() {
    videoElement.src = videoSources[currentVideoIndex];
    videoElement.load();
    videoElement.play().catch(error => {
        console.log("Auto-play prevented:", error);
    });
    
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
}

playNextVideo();

videoElement.addEventListener('ended', playNextVideo);

function adjustVideoSize() {
    const videoAspect = videoElement.videoWidth / videoElement.videoHeight;
    const windowAspect = window.innerWidth / window.innerHeight;
    
    if (windowAspect > videoAspect) {

        videoElement.style.width = "100vw";
        videoElement.style.height = "auto";
    } else {

        videoElement.style.width = "auto";
        videoElement.style.height = "100vh";
    }
}

videoElement.addEventListener('loadedmetadata', adjustVideoSize);

window.addEventListener('resize', adjustVideoSize);

const audioToggle = document.getElementById('audio-toggle');
const audioIcon = audioToggle.querySelector('i');

audioToggle.addEventListener('click', function() {
    if (videoElement.muted) {
        videoElement.muted = false;
        audioIcon.classList.remove('fa-volume-mute');
        audioIcon.classList.add('fa-volume-up');
    } else {
        videoElement.muted = true;
        audioIcon.classList.remove('fa-volume-up');
        audioIcon.classList.add('fa-volume-mute');
    }
});

function toggleWaPopup() {
    const popup = document.getElementById('wa-popup');
    popup.classList.add('active');
}


function toggleTiktokPopup() {
    const popup = document.getElementById('tiktok-popup');
    popup.classList.add('active');
}


function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.link, .contact-item, .audio-control, .social-icon');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('popup-overlay')) {
        event.target.classList.remove('active');
    }
}

window.addEventListener('load', function() {
    
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 2500);

    createShootingStars();
});


function createShootingStars() {
    const container = document.getElementById('shootingStars');
    const starCount = 20;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('shooting-star');
        
        const delay = Math.random() * 20;
        const duration = Math.random() * 15 + 10;
        const top = Math.random() * 70;
        const size = Math.random() * 2 + 1;
        
        star.style.top = `${top}%`;
        star.style.left = `-100px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        container.appendChild(star);
    }
}

VanillaTilt.init(document.querySelectorAll(".link"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.05,
    perspective: 1000,
    transition: true,
    gyroscope: true,
    easing: "cubic-bezier(.03,.98,.52,.99)"
});

document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": ["#6c5ce7", "#a55eea", "#778beb"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.2,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6c5ce7",
                "opacity": 0.15,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 200,
                    "size": 4,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "push": {
                    "particles_nb": 3
                }
            }
        },
        "retina_detect": true
    });
});

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: e.clientY / window.innerHeight, x: e.clientX / window.innerWidth }
        });
    });
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: true,
        disable: 'mobile'
    });
});

const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeChat = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');

chatbotIcon.addEventListener('click', function() {
    chatbotContainer.classList.add('open');
    chatbotIcon.style.display = 'none';
});

closeChat.addEventListener('click', function() {
    chatbotContainer.classList.add('closing');
    setTimeout(() => {
        chatbotContainer.classList.remove('open');
        chatbotContainer.classList.remove('closing');
        
        setTimeout(() => {
            chatbotIcon.style.display = 'flex';
        }, 100);
    }, 300);
});


const botResponses = {
    'hai': 'Hai juga! 👋 Saya Vonix Assistant, AI khusus yang dibuat untuk membantu para player Vonix PS. Ada yang bisa saya bantu?',
    'halo': 'Halo! 👋 Saya Vonix Assistant, siap membantu kamu dengan segala informasi tentang Vonix PS!',
    'siapa kamu': 'Saya adalah Vonix Assistant, sebuah AI yang khusus dibuat untuk Vonix PS. Saya di sini untuk membantu para player dengan informasi seputar server, menjawab pertanyaan, dan mendengarkan keluh kesah kalian. Anggap saja saya sebagai teman yang selalu siap membantu! 😊',
    'kamu siapa': 'Hai! Saya Vonix Assistant, asisten virtual pribadi untuk server Vonix PS. Saya selalu siap 24/7 untuk membantu kamu dengan berbagai informasi, pertanyaan, atau masalah seputar Vonix PS. Ceritakan saja apa yang kamu butuhkan! 😊',
    'vonix assistant': 'Ya, itu saya! 👋 Saya adalah AI asisten khusus Vonix PS yang dibuat untuk membantu para player. Saya bisa memberikan informasi tentang server, gameplay, event, dan banyak lagi. Apa yang ingin kamu ketahui?',
    'assistant': 'Halo! Ya, saya Vonix Assistant, teman virtual kamu di server Vonix PS. Saya siap membantu dengan berbagai informasi dan menjawab pertanyaan kamu seputar server. Apa yang bisa saya bantu? 😊',
    'bot': 'Saya lebih dari sekedar bot! Saya Vonix Assistant, asisten pribadi yang dibuat khusus untuk membantu komunitas Vonix PS. Saya bisa memberikan informasi, bantuan, dan bahkan mendengarkan cerita kamu tentang pengalaman bermain di server! 😊',
    'cara bermain': 'Cara bermain Vonix PS:\n\n📱 UNTUK ANDROID:\n1. Klik tombol "VHOST & HOSTGO" di halaman utama\n2. Klik "copy powertunnel" \n3. Buka aplikasi Power Tunnel\n4. Masuk ke menu Plugins\n5. Pilih pengaturan bagian Host\n6. Paste URL yang sudah di-copy tadi\n\n💻 UNTUK PC/LAPTOP:\n1. Buka Notepad (klik kanan → Run as administrator)\n2. Klik File → Open\n3. Ketik alamat: C:\\Windows\\System32\\drivers\\etc\n4. Ubah filter file menjadi "All Files"\n5. Pilih file "hosts"\n6. Tambahkan baris berikut di bagian paling bawah:\n\n15.235.166.218 growtopia1.com\n15.235.166.218 growtopia2.com\n15.235.166.218 www.growtopia1.com\n15.235.166.218 www.growtopia2.com\n15.235.166.218 RvLnd.here',
    'apa itu vonix': 'Vonix PS adalah private server Growtopia yang menyediakan gameplay seru dan komunitas yang ramah!',
    'admin': 'Admin kami adalah Kuzu dan Dhill. Kamu bisa menghubungi mereka melalui WhatsApp atau Discord.',
    'cara download': 'Klik tombol VHOST & HOSTGO atau POWER TUNNEL di halaman utama untuk mulai mendownload.',
    'terima kasih': 'Sama-sama! 😊 Senang bisa membantu.',
    'terimakasih': 'Sama-sama! 😊 Senang bisa membantu.',
    'makasih': 'Sama-sama! 😊 Senang bisa membantu.',
    'fitur': 'Vonix PS memiliki banyak fitur menarik, seperti:\n\n✅ Item gratis untuk pemain baru\n✅ Event mingguan dengan hadiah menarik\n✅ Sistem ekonomi yang seimbang\n✅ Dukungan Admin yang responsif\n✅ Update konten berkala\n✅ Komunitas yang ramah dan aktif',
    'event': 'Vonix PS mengadakan event mingguan dengan hadiah menarik! Bergabunglah dengan Discord atau grup WhatsApp kami untuk informasi terbaru tentang event.',
    'error': 'Jika kamu mengalami error, coba beberapa solusi berikut:\n\n1. Pastikan koneksi internet stabil\n2. Restart game Growtopia\n3. Cek kembali konfigurasi hosts atau PowerTunnel\n4. Periksa adanya update server di Discord atau WhatsApp\n5. Hubungi admin melalui tombol di bawah jika masalah berlanjut',
    'item': 'Vonix PS memiliki berbagai item unik dan eksklusif! Kamu bisa mendapatkannya melalui event, trading, atau memenangkannya di giveaway.',
    'trade': 'Sistem trading di Vonix PS aman dan mudah digunakan. Pastikan selalu berhati-hati saat melakukan trade dengan pemain lain.',
    'world': 'Di Vonix PS, kamu bisa membuat duniamu sendiri! Gunakan block dan item untuk membangun dunia impianmu.',
    'cheat': 'Vonix PS menerapkan kebijakan anti-cheat yang ketat. Pemain yang ketahuan menggunakan cheat akan mendapatkan sanksi berupa ban permanen.',
    'gems': 'Gems dapat diperoleh dengan cara farming, trading, atau membeli dari pemain lain. Gems sangat berguna untuk membeli item di toko.',
    'level': 'Kamu bisa menaikkan level dengan cara farming dan mendapatkan XP. Semakin tinggi levelmu, semakin banyak fitur yang terbuka.',
    'ban': 'Jika akun kamu terkena ban, silakan hubungi admin melalui WhatsApp atau Discord untuk klarifikasi.',
    'update': 'Vonix PS selalu melakukan update secara berkala untuk menambah fitur baru dan memperbaiki bug.',
    'command': 'Beberapa command dasar di Vonix PS:\n\n/help - Menampilkan daftar command\n/msg - Mengirim pesan pribadi ke player lain\n/r - Membalas pesan terakhir\n/sdb - Daftar world yang tersimpan\n/status - Informasi server',
    'lag': 'Jika mengalami lag saat bermain Vonix PS, coba solusi berikut:\n\n1. Pastikan koneksi internet stabil\n2. Tutup aplikasi lain yang berjalan di background\n3. Restart perangkat\n4. Pastikan server tidak sedang dalam maintenance',
    'farmable': 'Item farmable terbaik di Vonix PS antara lain:\n\n🌱 Laser Grid\n🌱 Chandelier\n🌱 Pepper Tree\n🌱 Pinball Bumper\n\nSemakin tinggi rarity item, semakin banyak gems yang didapat.',
    'block': 'Di Vonix PS, kamu bisa mendapatkan block dari:\n\n🧱 Breaking blok lain\n🧱 Membeli di toko\n🧱 Trading dengan pemain lain\n🧱 Hadiah event',
    'growtopia': 'Growtopia adalah game sandbox MMO 2D di mana pemain dapat membangun dunia mereka sendiri. Vonix PS adalah private server dari game ini dengan fitur tambahan dan komunitas yang ramah.',
    'set': 'Set adalah kumpulan item yang memberikan efek khusus jika dipakai bersamaan. Vonix PS memiliki banyak set eksklusif yang tidak ada di server resmi.',
    'lock': 'World Lock adalah mata uang utama di Vonix PS. Kamu bisa menggunakannya untuk mengamankan dunia dan sebagai alat tukar dalam perdagangan.',
    'host': 'Host adalah alamat server yang digunakan untuk terkoneksi ke Vonix PS. Pastikan kamu menggunakan host yang benar untuk bisa bermain.',
    'wl': 'World Lock (WL) adalah mata uang utama di Vonix PS. Nilai 1 WL = 100 gems. Kamu bisa mendapatkan WL dari trading, farming, atau event.',
    'dl': 'Diamond Lock (DL) adalah mata uang tingkat tinggi di Vonix PS. Nilai 1 DL = 100 WL. DL digunakan untuk transaksi item mahal.',
    'private server': 'Private server seperti Vonix PS adalah server tidak resmi yang menyediakan pengalaman bermain alternatif dengan fitur tambahan yang tidak ada di server resmi.',
    'mod': 'Moderator di Vonix PS adalah admin yang bertugas menjaga ketertiban server. Mereka dapat membantu jika kamu mengalami masalah atau pelanggaran.',
    'peraturan': 'Peraturan utama Vonix PS:\n\n⚠️ Dilarang menggunakan cheat/hack\n⚠️ Dilarang melakukan scam\n⚠️ Dilarang melakukan spam\n⚠️ Dilarang bersikap toxic\n⚠️ Hormati sesama pemain\n\nPelanggaran dapat berakibat ban permanen.',
    'drop': 'Item drop rate di Vonix PS lebih tinggi dibanding server resmi, memberikan kesempatan lebih besar untuk mendapatkan item langka.',
    'vend': 'Vending Machine memudahkan kamu berjualan otomatis di Vonix PS. Cukup letakkan item dan tentukan harganya.',
    'donation': 'Vonix PS menerima donasi untuk pengembangan server. Donatur akan mendapatkan benefit khusus seperti role VIP dan item eksklusif.',
    'problem': 'Jika mengalami masalah saat bermain, silakan hubungi admin melalui Discord atau WhatsApp. Jika masalah teknis, gunakan tombol "Tanya Langsung ke Owner" di bawah.',
    'harga': 'DAFTAR HARGA DI VONIX PS:\n\n-ROLE PRICE-\n🔹 Reseller: Rp 500.000\n🔹 Unli+: Rp 300.000\n🔹 Super Developer: Rp 100.000\n🔹 Developer: Rp 75.000\n🔹 VIP+Cheat: Rp 15.000\n\n-TITLE PRICE-\n🔹 Legendary: Rp 30.000\n🔹 G4G & Mentor: Rp 20.000\n🔹 Dr.Tittle & Ssup: Rp 15.000\n\nSilakan hubungi admin untuk pembelian.',
    'price': 'DAFTAR HARGA DI VONIX PS:\n\n-ROLE PRICE-\n🔹 Reseller: Rp 500.000\n🔹 Unli+: Rp 300.000\n🔹 Super Developer: Rp 100.000\n🔹 Developer: Rp 75.000\n🔹 VIP+Cheat: Rp 15.000\n\n-TITLE PRICE-\n🔹 Legendary: Rp 30.000\n🔹 G4G & Mentor: Rp 20.000\n🔹 Dr.Tittle & Ssup: Rp 15.000\n\nSilakan hubungi admin untuk pembelian.',
    'role': 'HARGA ROLE DI VONIX PS:\n\n🔹 Reseller: Rp 500.000\n🔹 Unli+: Rp 300.000\n🔹 Super Developer: Rp 100.000\n🔹 Developer: Rp 75.000\n🔹 VIP+Cheat: Rp 15.000\n\nSetiap role memiliki keuntungan berbeda. Silakan hubungi admin untuk informasi lebih detail dan pembelian.',
    'title': 'HARGA TITLE DI VONIX PS:\n\n🔹 Legendary: Rp 30.000\n🔹 G4G & Mentor: Rp 20.000\n🔹 Dr.Tittle & Ssup: Rp 15.000\n\nTitle memberikan tampilan nama yang unik dalam game. Hubungi admin untuk pembelian.',
    'mata uang': 'Mata uang di Vonix PS terdiri dari:\n\n💰 World Lock (WL): Mata uang dasar, nilai 1 WL = 100 gems\n💎 Diamond Lock (DL): 1 DL = 100 WL, digunakan untuk transaksi besar\n✨ Vonix Gem Lock: Mata uang ekslusif Vonix PS dengan nilai spesial\n\nSemua mata uang ini dapat digunakan untuk trading dan membeli item dalam game.',
    'currency': 'Mata uang di Vonix PS terdiri dari:\n\n💰 World Lock (WL): Mata uang dasar, nilai 1 WL = 100 gems\n💎 Diamond Lock (DL): 1 DL = 100 WL, digunakan untuk transaksi besar\n✨ Vonix Gem Lock: Mata uang ekslusif Vonix PS dengan nilai spesial\n\nSemua mata uang ini dapat digunakan untuk trading dan membeli item dalam game.',
    'vonix gem lock': 'Vonix Gem Lock adalah mata uang premium eksklusif di server Vonix PS. Mata uang ini memiliki nilai yang lebih tinggi dan dapat digunakan untuk membeli item spesial yang tidak bisa dibeli dengan WL atau DL biasa.',
    'vgl': 'Vonix Gem Lock (VGL) adalah mata uang premium eksklusif di server Vonix PS. Mata uang ini memiliki nilai yang lebih tinggi dan dapat digunakan untuk membeli item spesial yang tidak bisa dibeli dengan WL atau DL biasa.',
    'pembuat': 'Server Vonix PS dibuat oleh Kuzuroken (Owner utama). Berikut struktur tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'owner': 'Server Vonix PS dibuat oleh Kuzuroken (Owner utama). Berikut struktur tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'pendiri': 'Server Vonix PS dibuat oleh Kuzuroken (Owner utama). Berikut struktur tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'kuzu': 'Kuzuroken adalah owner utama Vonix PS. Berikut struktur tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'kuzuroken': 'Kuzuroken adalah owner utama Vonix PS. Berikut struktur tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'tim': 'Struktur Tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'team': 'Struktur Tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'staff': 'STAFF Vonix PS terdiri dari:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'struktur': 'Struktur Tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure',
    'owner mu': {
        message: 'Owner saya adalah Kuzuroken! 😊\n\nBerikut struktur lengkap tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure\n\nKamu bisa menghubungi owner langsung dengan klik tombol di bawah ini!',
        showAskOwnerButton: true
    },
    'owner kamu': {
        message: 'Owner saya adalah Kuzuroken! 😊\n\nBerikut struktur lengkap tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure\n\nKamu bisa menghubungi owner langsung dengan klik tombol di bawah ini!',
        showAskOwnerButton: true
    },
    'siapa owner': {
        message: 'Owner saya adalah Kuzuroken! 😊\n\nBerikut struktur lengkap tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure\n\nKamu bisa menghubungi owner langsung dengan klik tombol di bawah ini!',
        showAskOwnerButton: true
    },
    'siapa ownermu': {
        message: 'Owner saya adalah Kuzuroken! 😊\n\nBerikut struktur lengkap tim Vonix PS:\n\n👑 Owner: Kuzuroken\n🔹 Tangan Kanan: Dhill\n🔹 STAFF: AditBilek, akashi, Sin\n🔹 Designer: Jul, SomeBodysPleasure\n\nKamu bisa menghubungi owner langsung dengan klik tombol di bawah ini!',
        showAskOwnerButton: true
    }
};


let usingGemini = false;

async function askGeminiAI(question) {
    const apiKey = "AIzaSyB4HLLuGygY8OA4Kq1jSgfLBU0foMaHapM";
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
    
    try {
        console.log("Memanggil Gemini API dengan pertanyaan:", question);
        const response = await fetch(`${apiUrl}?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Tolong jawab pertanyaan ini dalam bahasa Indonesia dengan singkat namun lengkap: ${question}. Berikan jawaban yang informatif dan akurat.`
                    }]
                }]
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error dari API Gemini:", errorData);
            throw new Error(`API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        console.log("Respons dari Gemini API:", data);
        if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            console.error("Format respons tidak sesuai:", data);
            return "Maaf, saya tidak dapat menjawab pertanyaan itu saat ini. Coba pertanyaan lain.";
        }
    } catch (error) {
        console.error("Error saat memanggil Gemini AI:", error);
        return "Maaf, terjadi kesalahan teknis saat mencoba menjawab pertanyaan Anda. Coba pertanyaan tentang Vonix PS.";
    }
}

function saveChatToLocalStorage(message, isUser, timestamp) {
    const chatHistory = JSON.parse(localStorage.getItem('vonix_chatbot_history') || '[]');
    chatHistory.push({
        message,
        isUser,
        timestamp
    });
    localStorage.setItem('vonix_chatbot_history', JSON.stringify(chatHistory));
}

function loadChatFromLocalStorage() {
    const chatHistory = JSON.parse(localStorage.getItem('vonix_chatbot_history') || '[]');
    if (chatHistory.length > 0) {
     
        chatMessages.innerHTML = '';
   
        chatHistory.forEach(chat => {
            if (chat.isUser) {
                const userMessageDiv = document.createElement('div');
                userMessageDiv.className = 'user-message';
                userMessageDiv.textContent = chat.message;
                userMessageDiv.setAttribute('data-time', chat.timestamp);
                chatMessages.appendChild(userMessageDiv);
            } else {
                const botMessageDiv = document.createElement('div');
                botMessageDiv.className = 'bot-message';
                botMessageDiv.textContent = chat.message;
                botMessageDiv.setAttribute('data-time', chat.timestamp);
                chatMessages.appendChild(botMessageDiv);
            }
        });
        
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}


async function handleUserMessage(message, timestamp, typingIndicator) {
   
    const botReply = botResponses[message.toLowerCase()];
    
    
    if (!botReply) {
        usingGemini = true;
    } else {
        usingGemini = false;
    }

    
    saveChatToLocalStorage(message, true, timestamp);
    
    setTimeout(() => {
        typingIndicator.remove();

        if (usingGemini) {
            (async () => {
                try {
                    const geminiResponse = await askGeminiAI(message);
                    displayBotMessage(geminiResponse, timestamp, false, false);
                    saveChatToLocalStorage(geminiResponse, false, timestamp);
                } catch (error) {
                    console.error("Error saat mendapatkan respons Gemini:", error);
                    const errorMessage = "Maaf, saya tidak dapat menjawab pertanyaan tersebut saat ini. Coba tanyakan hal lain atau tanyakan tentang Vonix PS.";
                    displayBotMessage(errorMessage, timestamp, false, false);
                    saveChatToLocalStorage(errorMessage, false, timestamp);
                }
            })();
        } else {
           
            if (typeof botReply === 'object') {
                displayBotMessage(botReply.message, timestamp, botReply.showAskOwnerButton || false, botReply.showTiktokButton || false);
                saveChatToLocalStorage(botReply.message, false, timestamp);
            } else {
                displayBotMessage(botReply, timestamp, false, false);
                saveChatToLocalStorage(botReply, false, timestamp);
            }
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {

    loadChatFromLocalStorage();
    
   
});

function askOwnerViaWhatsApp(question) {
    const encodedQuestion = encodeURIComponent('Halo Owner Vonix PS, saya mau bertanya: ' + question);
    window.open(`https://wa.me/6281527641306?text=${encodedQuestion}`, '_blank');
}

function openOwnerTikTok() {
    console.log("Membuka TikTok Owner"); 
    try {
        window.open('https://www.tiktok.com/@orenni', '_blank');
    } catch (e) {
        console.error("Error saat membuka TikTok:", e);

        alert("Silakan kunjungi TikTok owner di: https://www.tiktok.com/@orenni");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const tiktokStyle = document.createElement('style');
    tiktokStyle.textContent = `
        .ask-owner-button {
            display: flex;
            justify-content: center;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 5px;
        }
        
        .ask-owner-button button {
            background: linear-gradient(135deg, #25D366, #128C7E);
            color: white;
            border: none;
            border-radius: 20px;
            padding: 10px 18px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            font-weight: 500;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
        }
        
        .ask-owner-button button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
            background: linear-gradient(135deg, #128C7E, #075E54);
        }
        
        .ask-owner-button button::before {
            content: '\\f232';
            font-family: 'Font Awesome\\ 5 Brands';
            margin-right: 8px;
            font-size: 16px;
        }

        .tiktok-button {
            background: linear-gradient(135deg, #EE1D52, #69C9D0) !important;
        }
        
        .tiktok-button:hover {
            background: linear-gradient(135deg, #69C9D0, #EE1D52) !important;
        }
        
        .tiktok-button::before {
            content: '\\f97b' !important;
        }
    `;
    document.head.appendChild(tiktokStyle);
});


document.addEventListener('DOMContentLoaded', function() {

    
    const typingStyle = document.createElement('style');
    typingStyle.textContent = `
        .typing-indicator {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            max-width: 50%;
            min-width: 80px;
        }
        
        .typing-indicator span {
            height: 10px;
            width: 10px;
            float: left;
            margin: 0 2px;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            opacity: 0.4;
            animation: typing 1s infinite;
        }
        
        .typing-indicator span:nth-of-type(1) {
            animation-delay: 0s;
        }
        
        .typing-indicator span:nth-of-type(2) {
            animation-delay: 0.33s;
        }
        
        .typing-indicator span:nth-of-type(3) {
            animation-delay: 0.66s;
        }
        
        @keyframes typing {
            0% {
                transform: scale(1);
                opacity: 0.4;
            }
            50% {
                transform: scale(1.4);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0.4;
            }
        }
    `;
    document.head.appendChild(typingStyle);
});


sendMessage.addEventListener('click', sendChatMessage);

chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

const shareToggle = document.getElementById('shareToggle');
const shareDropdown = document.getElementById('shareDropdown');

shareToggle.addEventListener('click', function() {
    shareDropdown.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (!shareToggle.contains(event.target) && !shareDropdown.contains(event.target)) {
        shareDropdown.classList.remove('active');
    }
});

function shareViaFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Ayo bergabung dengan Vonix PS!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank');
}

function shareViaTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Ayo bergabung dengan Vonix PS! Server Growtopia terbaik! 🎮');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareViaWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Ayo bergabung dengan Vonix PS! Server Growtopia terbaik! 🎮');
    window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
}

function shareViaTikTok() {
    window.open('https://www.tiktok.com/', '_blank');
}


const firebaseConfig = {
    apiKey: "AIzaSyBQJSlxeUcyKbBh_a9hJdmyVYDrDxT_F5Q",
    authDomain: "vonix-ps-chat.firebaseapp.com",
    databaseURL: "https://vonix-ps-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vonix-ps-chat",
    storageBucket: "vonix-ps-chat.appspot.com",
    messagingSenderId: "297809543925",
    appId: "1:297809543925:web:dc13bfe5c60abbb56c5bf2"
};


let storage;
let database;


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); 
}

database = firebase.database();
storage = firebase.storage();


const storageRef = storage.ref();
const metadata = {
    contentType: 'image/jpeg',
    customMetadata: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
};


const ownerChatIcon = document.getElementById('ownerChatIcon');
const ownerChatContainer = document.getElementById('ownerChatContainer');
const closeOwnerChat = document.getElementById('closeOwnerChat');
const nameInputContainer = document.getElementById('nameInputContainer');
const ownerChatMessages = document.getElementById('ownerChatMessages');
const ownerChatInputContainer = document.getElementById('ownerChatInputContainer');
const userNameInput = document.getElementById('userNameInput');
const startChatBtn = document.getElementById('startChatBtn');
const ownerChatInput = document.getElementById('ownerChatInput');
const sendOwnerMessage = document.getElementById('sendOwnerMessage');


const changeNameBtn = document.getElementById('changeNameBtn');
const nameChangeDialog = document.getElementById('nameChangeDialog');
const newNameInput = document.getElementById('newNameInput');
const saveNameChange = document.getElementById('saveNameChange');
const cancelNameChange = document.getElementById('cancelNameChange');
const closeNameChange = document.getElementById('closeNameChange');

let userName = '';
let userChatId = '';

document.addEventListener('DOMContentLoaded', function() {

    const savedUserName = localStorage.getItem('vonix_chat_username');
    const savedChatId = localStorage.getItem('vonix_chat_id');
    
    if (savedUserName && savedChatId) {

        userName = savedUserName;
        userChatId = savedChatId;
   
        nameInputContainer.style.display = 'none';
        ownerChatMessages.style.display = 'flex';
        ownerChatInputContainer.style.display = 'flex';
        
   
        loadChatHistory();
  
        listenForOwnerMessages();
    }
    
  
    window.addEventListener('online', function() {
        if (userChatId) {
            console.log("Perangkat online, menyambungkan kembali ke chat...");
            database.goOnline();
            listenForOwnerMessages();
            
            
            database.ref(`chats/${userChatId}`).update({
                status: 'active',
                last_activity: firebase.database.ServerValue.TIMESTAMP
            });
        }
    });
    
    window.addEventListener('offline', function() {
        console.log("Perangkat offline, menyimpan sementara di local storage...");
        if (database) {
            database.goOffline();
        }
    });
    

    if (database) {
        database.ref('.info/connected').on('value', function(snap) {
            if (snap.val() === true && userChatId) {
                console.log("Terhubung kembali ke Firebase");
                
             
                database.ref(`chats/${userChatId}`).update({
                    status: 'active',
                    last_activity: firebase.database.ServerValue.TIMESTAMP
                });
            }
        });
    }
});


ownerChatIcon.addEventListener('click', function() {
    ownerChatContainer.classList.add('open');
    ownerChatIcon.style.display = 'none';
    
  
    if (userName && userChatId) {
        setTimeout(() => {
            ownerChatMessages.scrollTop = ownerChatMessages.scrollHeight;
        }, 300);
    }
});


closeOwnerChat.addEventListener('click', function() {
    ownerChatContainer.classList.add('closing');
    setTimeout(() => {
        ownerChatContainer.classList.remove('open');
        ownerChatContainer.classList.remove('closing');
        
        setTimeout(() => {
            ownerChatIcon.style.display = 'flex';
        }, 100);
    }, 300);
});

startChatBtn.addEventListener('click', function() {
    startChat();
});

userNameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        startChat();
    }
});

function loadChatHistory() {

    while (ownerChatMessages.firstChild) {
        ownerChatMessages.removeChild(ownerChatMessages.firstChild);
    }

    const systemMessage = document.createElement('div');
    systemMessage.className = 'system-message';
    systemMessage.textContent = `Halo ${userName}! Silakan ketik pesan untuk Owner Vonix PS.`;
    ownerChatMessages.appendChild(systemMessage);
    

    database.ref(`chats/${userChatId}/messages`).once('value')
        .then((snapshot) => {
            const messages = snapshot.val();
            
            if (messages) {
           
                const sortedMessages = Object.entries(messages)
                    .sort(([, a], [, b]) => a.timestamp - b.timestamp);
                
   
                const displayedMessageIds = new Set();

                const localMsgsToStore = [];
       
                sortedMessages.forEach(([messageId, messageData]) => {
                
                    if (displayedMessageIds.has(messageId)) {
                        return;
                    }
                    
             
                    localMsgsToStore.push({
                        id: messageId,
                        ...messageData
                    });
                    
                    if (messageData.sender === 'user') {
                        displayUserMessage(messageData.message, messageData.status === 'read');
                    } else if (messageData.sender === 'owner') {
                        displayOwnerMessage(messageData.message, messageData.timestamp, messageId);
                    }
                    
                
                    displayedMessageIds.add(messageId);
                });
              
                localStorage.setItem(`vonix_chat_messages_${userChatId}`, JSON.stringify(localMsgsToStore));
            }
           
            ownerChatMessages.scrollTop = ownerChatMessages.scrollHeight;
        })
        .catch(error => {
            console.error("Error loading chat history from Firebase:", error);

            const localMessages = localStorage.getItem(`vonix_chat_messages_${userChatId}`);
            if (localMessages) {
                try {
                    const parsedMessages = JSON.parse(localMessages);
                    parsedMessages.forEach(msgData => {
                        if (msgData.sender === 'user') {
                            displayUserMessage(msgData.message, msgData.status === 'read');
                        } else if (msgData.sender === 'owner') {
                            displayOwnerMessage(msgData.message, msgData.timestamp, msgData.id);
                        }
                    });
                } catch (e) {
                    console.error("Error parsing local messages:", e);
                
                    const errorMsg = document.createElement('div');
                    errorMsg.className = 'system-message error';
                    errorMsg.textContent = "Terjadi kesalahan saat memuat riwayat chat. Silakan refresh halaman.";
                    ownerChatMessages.appendChild(errorMsg);
                }
            }
        });
}


function listenForOwnerMessages() {
    if (!userChatId) {
        console.error("User chat ID tidak ditemukan");
        return;
    }

    console.log("Mulai mendengarkan pesan dari owner, chat ID:", userChatId);
    

    const displayedMessages = new Set();


    database.ref(`chats/${userChatId}/messages`).off();
    
   
    database.ref(`chats/${userChatId}/messages`).once('value')
        .then((snapshot) => {
            const existingMessages = snapshot.val() || {};
            
            
            Object.keys(existingMessages).forEach(msgId => {
                displayedMessages.add(msgId);
            });
            
           
            database.ref(`chats/${userChatId}/messages`).on('child_added', (snapshot) => {
                const messageId = snapshot.key;
                const messageData = snapshot.val();
                
                if (displayedMessages.has(messageId)) {
                    return;
                }
                
               
                displayedMessages.add(messageId);
                
             
                if (messageData.sender === 'owner') {
                  
                    const localMessages = JSON.parse(localStorage.getItem(`vonix_chat_messages_${userChatId}`) || '[]');
                    localMessages.push({
                        id: messageId,
                        ...messageData
                    });
                    localStorage.setItem(`vonix_chat_messages_${userChatId}`, JSON.stringify(localMessages));
                    
                
                    displayOwnerMessage(messageData.message, messageData.timestamp, messageId);
                    playNotificationSound();
                    updateUserMessageStatus();
                } else if (messageData.sender === 'user' && messageData.status === 'read') {
                    updateUserMessageStatus();
                }
            });
            
       
            database.ref(`chats/${userChatId}/messages`).on('child_changed', (snapshot) => {
                const messageData = snapshot.val();
                if (messageData.sender === 'user' && messageData.status === 'read') {
                    updateUserMessageStatus();
                }
            });
        })
        .catch(error => {
            console.error("Error setting up message listeners:", error);
            
            const errorMsg = document.createElement('div');
            errorMsg.className = 'system-message error';
            errorMsg.textContent = "Terjadi kesalahan saat menghubungkan ke server. Mencoba menggunakan mode offline.";
            ownerChatMessages.appendChild(errorMsg);
            
          
            const localMessages = localStorage.getItem(`vonix_chat_messages_${userChatId}`);
            if (localMessages) {
                try {
                    const parsedMessages = JSON.parse(localMessages);
                    parsedMessages.forEach(msgData => {
                        if (!displayedMessages.has(msgData.id)) {
                            displayedMessages.add(msgData.id);
                            if (msgData.sender === 'user') {
                                displayUserMessage(msgData.message, msgData.status === 'read');
                            } else if (msgData.sender === 'owner') {
                                displayOwnerMessage(msgData.message, msgData.timestamp, msgData.id);
                            }
                        }
                    });
                } catch (e) {
                    console.error("Error parsing local messages:", e);
                }
            }
        });
}

function updateUserMessageStatus() {
   
    const waitingStatusElements = ownerChatMessages.querySelectorAll('.waiting-status');
    waitingStatusElements.forEach(element => {
        element.textContent = 'Telah dibaca';
        element.classList.remove('waiting-status');
    });
}


function playNotificationSound() {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1cec9.mp3?filename=notification-sound-7062.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed:', e));
}


document.addEventListener('DOMContentLoaded', function() {
    const chatStyle = document.createElement('style');
    chatStyle.textContent = `
        .shake {
            animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        
        @keyframes shake {
            10%, 90% {
                transform: translate3d(-1px, 0, 0);
            }
            20%, 80% {
                transform: translate3d(2px, 0, 0);
            }
            30%, 50%, 70% {
                transform: translate3d(-4px, 0, 0);
            }
            40%, 60% {
                transform: translate3d(4px, 0, 0);
            }
        }
    `;
    document.head.appendChild(chatStyle);
});


function log(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    

    if (!document.getElementById('debugContent')) return;
    
    const logElement = document.createElement('div');
    logElement.className = 'log log-' + type;
    
    if (typeof message === 'object') {
        try {
            message = JSON.stringify(message, null, 2);
        } catch (e) {
            message = 'Object (lihat di browser console)';
            console.log(message);
        }
    }
    
    logElement.textContent = message;
    
    const debugContent = document.getElementById('debugContent');
    if (debugContent) {
        debugContent.appendChild(logElement);
        debugContent.scrollTop = debugContent.scrollHeight;
    }
}

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; 
    }
    return Math.abs(hash).toString(16).substring(0, 8);
}

changeNameBtn.addEventListener('click', function() {

    newNameInput.value = userName;
   
    nameChangeDialog.classList.add('active');
});

closeNameChange.addEventListener('click', function() {
    nameChangeDialog.classList.remove('active');
});

cancelNameChange.addEventListener('click', function() {
    nameChangeDialog.classList.remove('active');
});

saveNameChange.addEventListener('click', function() {
    const newName = newNameInput.value.trim();
    if (newName === '') {
     
        newNameInput.classList.add('shake');
        setTimeout(() => {
            newNameInput.classList.remove('shake');
        }, 500);
        return;
    }

    const oldName = userName;
    userName = newName;
    localStorage.setItem('vonix_chat_username', userName);
    

    database.ref(`chats/${userChatId}`).update({
        name: userName,
        last_activity: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        console.log("Nama berhasil diperbarui dari", oldName, "menjadi", userName);
    
        const systemMessage = document.createElement('div');
        systemMessage.className = 'system-message';
        systemMessage.textContent = `Nama Anda berubah dari "${oldName}" menjadi "${userName}"`;
        ownerChatMessages.appendChild(systemMessage);
        ownerChatMessages.scrollTop = ownerChatMessages.scrollHeight;
        
   
        nameChangeDialog.classList.remove('active');
    }).catch(error => {
        console.error("Error saat memperbarui nama:", error);
        alert("Gagal mengubah nama. Silakan coba lagi.");
      
        userName = oldName;
    });
});


function startChat() {
    userName = userNameInput.value.trim();
    
    if (userName === '') {
       
        userNameInput.classList.add('shake');
        setTimeout(() => {
            userNameInput.classList.remove('shake');
        }, 500);
        return;
    }
    

    if (!userChatId) {
        userChatId = generateUserId();
    }

    localStorage.setItem('vonix_chat_username', userName);
    localStorage.setItem('vonix_chat_id', userChatId);
    

    nameInputContainer.style.display = 'none';
    ownerChatMessages.style.display = 'flex';
    ownerChatInputContainer.style.display = 'flex';
    
  
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'system-message';
    welcomeMessage.textContent = `Halo ${userName}! Silakan ketik pesan untuk Owner Vonix PS.`;
    ownerChatMessages.appendChild(welcomeMessage);
    
  
    const imageInfoMessage = document.createElement('div');
    imageInfoMessage.className = 'system-message';
    imageInfoMessage.innerHTML = '<b>Informasi:</b> Fitur kirim gambar saat ini tidak tersedia.';
    ownerChatMessages.appendChild(imageInfoMessage);
    
   
    database.ref(`chats/${userChatId}`).update({
        name: userName,
        last_activity: firebase.database.ServerValue.TIMESTAMP,
        status: 'active'
    }).then(() => {
        
        return database.ref(`chats/${userChatId}/created_at`).once('value');
    }).then((snapshot) => {
        if (!snapshot.exists()) {
         
            return database.ref(`chats/${userChatId}`).update({
                created_at: firebase.database.ServerValue.TIMESTAMP
            });
        }
    }).catch(error => {
        console.error("Error saat menyimpan data user:", error);
    });
    
 
    listenForOwnerMessages();
}

function generateUserId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}


sendOwnerMessage.addEventListener('click', function() {
    sendMessageToOwner();
});

ownerChatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessageToOwner();
    }
});

function clearChatHistory() {
    localStorage.removeItem('vonix_chatbot_history');
    chatMessages.innerHTML = `
        <div class="bot-message">Hai! 👋 Selamat datang di Vonix PS. Ada yang bisa saya bantu?</div>
        <div class="bot-message">Kamu bisa bertanya tentang: cara bermain, fitur, event, item, trade, command, dan banyak lagi!</div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const chatbotHeader = document.querySelector('.chatbot-header');
    if (chatbotHeader) {
        const clearButton = document.createElement('i');
        clearButton.className = 'fas fa-trash-alt clear-chat';
        clearButton.title = 'Bersihkan Riwayat Chat';
        clearButton.style.marginRight = '10px';
        clearButton.style.cursor = 'pointer';
        clearButton.onclick = showDeleteConfirmation;
        
        const closeButton = chatbotHeader.querySelector('.fa-times');
        chatbotHeader.insertBefore(clearButton, closeButton);
    }
    
  
    loadChatFromLocalStorage();
});


function sendChatMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timestamp = `${hours}:${minutes}`;

    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.textContent = message;
    userMessageDiv.setAttribute('data-time', timestamp);
    chatMessages.appendChild(userMessageDiv);
    
 
    saveChatToLocalStorage(message, true, timestamp);
    
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'bot-message typing-indicator';
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    typingIndicator.setAttribute('data-time', timestamp);
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    handleUserMessage(message, timestamp, typingIndicator);
}


document.addEventListener('DOMContentLoaded', function() {
 
    loadChatFromLocalStorage();
    
 
    const sendMessage = document.getElementById('sendMessage');
    if (sendMessage) {
        sendMessage.addEventListener('click', sendChatMessage);
    }
 
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
});

function displayBotMessage(message, timestamp, showAskOwnerButton = false, showTiktokButton = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.textContent = message;
    messageDiv.setAttribute('data-time', timestamp);
    

    if (showAskOwnerButton) {
        const askOwnerDiv = document.createElement('div');
        askOwnerDiv.className = 'ask-owner-button';
        const button = document.createElement('button');
        button.textContent = 'Tanya Langsung ke Owner';
        button.onclick = () => askOwnerViaWhatsApp(message);
        askOwnerDiv.appendChild(button);
        messageDiv.appendChild(askOwnerDiv);
    }
    
    
    if (showTiktokButton) {
        const tiktokDiv = document.createElement('div');
        tiktokDiv.className = 'ask-owner-button';
        const button = document.createElement('button');
        button.className = 'tiktok-button';
        button.textContent = 'Lihat TikTok Owner';
        button.onclick = openOwnerTikTok;
        tiktokDiv.appendChild(button);
        messageDiv.appendChild(tiktokDiv);
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


let showAskOwnerButton = false;
let showTiktokButton = false;

function showDeleteConfirmation() {
    
    const overlay = document.createElement('div');
    overlay.className = 'delete-confirmation-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'delete-confirmation-modal';
    

    modal.innerHTML = `
        <div class="delete-confirmation-title">
            <i class="fas fa-trash-alt" style="margin-right: 8px; color: #dc3545;"></i>
            Hapus Riwayat Chat
        </div>
        <div class="delete-confirmation-message">
            Apakah Anda yakin ingin menghapus semua riwayat chat?<br>
            Tindakan ini tidak dapat dibatalkan.
        </div>
        <div class="delete-confirmation-buttons">
            <button class="delete-confirmation-button delete-cancel">
                <i class="fas fa-times" style="margin-right: 5px;"></i>
                Batal
            </button>
            <button class="delete-confirmation-button delete-confirm">
                <i class="fas fa-check" style="margin-right: 5px;"></i>
                Hapus
            </button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
   
    requestAnimationFrame(() => {
        overlay.classList.add('active');
    });
    

    const cancelButton = modal.querySelector('.delete-cancel');
    const confirmButton = modal.querySelector('.delete-confirm');
    
    function closeModal() {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
    
    cancelButton.addEventListener('click', closeModal);
    
    confirmButton.addEventListener('click', () => {
        clearChatHistory();
        closeModal();
    });
    
 
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
 
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}


function sendMessageToOwner() {
    const message = ownerChatInput.value.trim();
    if (message === '') return;
    
    const now = new Date();
    const timestamp = now.getTime();
    
    displayUserMessage(message);
    ownerChatInput.value = '';
    log(`Mengirim pesan: ${message}`, 'info');
    
    const consistentMsgId = `user_${timestamp}_${hashString(message)}`;
    
    const messageObj = {
        sender: 'user',
        name: userName,
        message: message,
        timestamp: timestamp,
        status: 'waiting'
    };
    
    database.ref(`chats/${userChatId}/messages/${consistentMsgId}`).set(messageObj)
    .then(() => {
        log("Pesan berhasil disimpan", 'success');
        return database.ref(`chats/${userChatId}`).update({
            last_activity: timestamp
        });
    })
    .then(() => {
        log("Last activity updated", 'success');
        
        const localMessages = JSON.parse(localStorage.getItem(`vonix_chat_messages_${userChatId}`) || '[]');
        localMessages.push({
            id: consistentMsgId,
            ...messageObj
        });
        
        localStorage.setItem(`vonix_chat_messages_${userChatId}`, JSON.stringify(localMessages));
    })
    .catch(error => {
        log(`Error: ${error.message}`, 'error');
        
        const localMessages = JSON.parse(localStorage.getItem(`vonix_chat_messages_${userChatId}`) || '[]');
        localMessages.push({
            id: consistentMsgId,
            ...messageObj
        });
        
        localStorage.setItem(`vonix_chat_messages_${userChatId}`, JSON.stringify(localMessages));
        
        
        ownerChatMessages.scrollTop = ownerChatMessages.scrollHeight;
    });
}


function displayUserMessage(message, isRead = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.textContent = message;
    
    const statusDiv = document.createElement('div');
    statusDiv.className = isRead ? 'message-status' : 'message-status waiting-status';
    statusDiv.textContent = isRead ? 'Telah dibaca' : 'Menunggu balasan...';
    messageDiv.appendChild(statusDiv);
    
    ownerChatMessages.appendChild(messageDiv);
    ownerChatMessages.scrollTop = ownerChatMessages.scrollHeight;
}


function displayOwnerMessage(message, timestamp, messageId) {
  
    messageId = messageId || `owner_${timestamp}_${hashString(message)}`;
    
    const existingMsg = document.querySelector(`.owner-message[data-id="${messageId}"]`);
    if (existingMsg) {
        console.log("Pesan dengan ID ini sudah ditampilkan:", messageId);
        return;
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'owner-message';
    messageDiv.dataset.timestamp = timestamp || Date.now();
    messageDiv.dataset.id = messageId;
    
    const nameDiv = document.createElement('div');
    nameDiv.className = 'owner-message-name';
    nameDiv.textContent = 'Owner Vonix PS';
    messageDiv.appendChild(nameDiv);
    
    const messageContent = document.createElement('div');
    messageContent.textContent = message;
    messageDiv.appendChild(messageContent);
    
    ownerChatMessages.appendChild(messageDiv);
    ownerChatMessages.scrollTop = ownerChatMessages.scrollHeight;
}

document.addEventListener('DOMContentLoaded', function() {
    const deleteDialogStyle = document.createElement('style');
    deleteDialogStyle.textContent = `
        .delete-confirmation-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .delete-confirmation-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .delete-confirmation-modal {
            background: #1a1a1a;
            border-radius: 15px;
            padding: 20px;
            width: 90%;
            max-width: 400px;
            transform: scale(0.7);
            opacity: 0;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .delete-confirmation-overlay.active .delete-confirmation-modal {
            transform: scale(1);
            opacity: 1;
        }

        .delete-confirmation-title {
            color: #fff;
            font-size: 1.2em;
            font-weight: 600;
            margin-bottom: 15px;
            text-align: center;
            font-family: 'Poppins', sans-serif;
        }

        .delete-confirmation-message {
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
            margin-bottom: 20px;
            font-family: 'Poppins', sans-serif;
            font-size: 0.95em;
            line-height: 1.4;
        }

        .delete-confirmation-buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .delete-confirmation-button {
            padding: 8px 20px;
            border: none;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 0.9em;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .delete-cancel {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
        }

        .delete-confirm {
            background: #dc3545;
            color: #fff;
        }

        .delete-cancel:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .delete-confirm:hover {
            background: #bd2130;
        }

        @keyframes modalIn {
            from {
                transform: scale(0.7);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes modalOut {
            from {
                transform: scale(1);
                opacity: 1;
            }
            to {
                transform: scale(0.7);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(deleteDialogStyle);
});

document.addEventListener('DOMContentLoaded', function() {
    const nameChangeStyle = document.createElement('style');
    nameChangeStyle.textContent = `
        .name-change-dialog {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .name-change-dialog.active {
            opacity: 1;
            visibility: visible;
        }

        .name-change-container {
            background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
            border-radius: 20px;
            padding: 25px;
            width: 90%;
            max-width: 400px;
            transform: scale(0.7);
            opacity: 0;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .name-change-dialog.active .name-change-container {
            transform: scale(1);
            opacity: 1;
        }

        .name-change-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .name-change-header h3 {
            color: #fff;
            font-size: 1.3em;
            font-weight: 600;
            margin: 0;
            font-family: 'Poppins', sans-serif;
        }

        .name-change-header i {
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
            font-size: 1.2em;
            padding: 8px;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .name-change-header i:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
        }

        .name-change-content {
            margin-bottom: 25px;
        }

        .name-change-content input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
            color: #fff;
            font-size: 1em;
            font-family: 'Poppins', sans-serif;
            transition: all 0.3s ease;
            outline: none;
        }

        .name-change-content input:focus {
            border-color: #6c5ce7;
            box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
            background: rgba(255, 255, 255, 0.1);
        }

        .name-change-actions {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
        }

        .name-change-actions button {
            padding: 10px 20px;
            border: none;
            border-radius: 12px;
            font-family: 'Poppins', sans-serif;
            font-size: 0.95em;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .name-change-actions button i {
            font-size: 1.1em;
        }

        .name-change-actions .cancel-btn {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
        }

        .name-change-actions .save-btn {
            background: linear-gradient(135deg, #6c5ce7, #8e44ad);
            color: #fff;
        }

        .name-change-actions .cancel-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .name-change-actions .save-btn:hover {
            background: linear-gradient(135deg, #8e44ad, #6c5ce7);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(108, 92, 231, 0.3);
        }

        @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        .shake {
            animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        }
    `;
    document.head.appendChild(nameChangeStyle);
});

document.addEventListener('DOMContentLoaded', function() {
    const snowflakeStyle = document.createElement('style');
    snowflakeStyle.textContent = `
        .snowflakes {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 1;
        }

        .snowflake {
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            opacity: 0.3;
            animation: snowfall linear infinite;
        }

        @keyframes snowfall {
            0% {
                transform: translateY(-100%) translateX(-50%);
                opacity: 0;
            }
            20% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(100vh) translateX(50%);
                opacity: 0.3;
            }
        }
    `;
    document.head.appendChild(snowflakeStyle);


    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.className = 'snowflakes';
    document.body.appendChild(snowflakesContainer);

 
    function createSnowflakes() {
        for (let i = 0; i < 50; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
               
            snowflake.style.left = `${Math.random() * 100}%`;
            
           
            const size = Math.random() * 3 + 2;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            
            
            const duration = Math.random() * 10 + 8;
            const delay = Math.random() * 5;
            snowflake.style.animation = `snowfall ${duration}s linear infinite`;
            snowflake.style.animationDelay = `${delay}s`;
            
            snowflakesContainer.appendChild(snowflake);
        }
    }

    createSnowflakes();
});

document.addEventListener('DOMContentLoaded', function() {
    const shootingStarStyle = document.createElement('style');
    shootingStarStyle.textContent = `
        .shooting-star {
            position: absolute;
            height: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
            animation: shootingStar linear infinite;
            transform: rotate(-45deg);
            box-shadow: 0 0 10px #fff;
        }

        .shooting-star::before {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%);
            transform: translate(-50%, -50%);
            opacity: 0.3;
        }

        @keyframes shootingStar {
            0% {
                transform: translateX(-100px) translateY(0) rotate(-45deg);
                opacity: 1;
            }
            70% {
                opacity: 1;
            }
            100% {
                transform: translateX(calc(100vw + 100px)) translateY(calc(100vh + 100px)) rotate(-45deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(shootingStarStyle);
});

function createSnowflakes() {
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.id = 'snowflakes-container';
    document.body.appendChild(snowflakesContainer);

    const snowflakeChars = ['❅', '❆', '❄', '✻', '✺', '*'];
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake(snowflakesContainer, snowflakeChars);
    }
}

function createSnowflake(container, chars) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = chars[Math.floor(Math.random() * chars.length)];
    
   
    snowflake.style.left = Math.random() * 100 + 'vw';
    
  
    const size = (Math.random() * 0.5 + 0.5) + 'em';
    snowflake.style.fontSize = size;
    
   
    const duration = (Math.random() * 5 + 5) + 's';
    snowflake.style.animationDuration = duration;
    
   
    const delay = (Math.random() * 5) + 's';
    snowflake.style.animationDelay = delay;
    
    container.appendChild(snowflake);
    
    
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        createSnowflake(container, chars);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    createSnowflakes();
});


function initServerStatus() {
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    
    
    const serverStatusRef = database.ref('serverStatus');
    
 
    serverStatusRef.on('value', (snapshot) => {
        const status = snapshot.val() || { status: 'online', message: 'Server: Online' };
        
      
        statusIndicator.classList.remove('online', 'offline', 'maintenance');
        
     
        statusIndicator.classList.add(status.status);
        
       
        statusText.textContent = status.message;
    });
}

document.addEventListener('DOMContentLoaded', function() {
 
    initServerStatus();
 
});

function initApkDownloadsTab() {
    const apkTabHeader = document.getElementById('apkTabHeader');
    const apkTabContent = document.getElementById('apkTabContent');
    const apkItems = document.querySelectorAll('.apk-item');
    
    if (!apkTabHeader || !apkTabContent) return;
    
 
    const shouldBeOpen = localStorage.getItem('vonix_apk_tab_open') === 'true';
    
    if (shouldBeOpen) {
        apkTabHeader.classList.add('active');
        apkTabContent.classList.add('active');
        
      
        const chevronIcon = apkTabHeader.querySelector('.fa-chevron-down');
        if (chevronIcon) {
            chevronIcon.style.transform = 'rotate(180deg)';
        }
        
    
        setTimeout(() => {
            apkTabContent.style.maxHeight = apkTabContent.scrollHeight + 'px';
            
          
            animateApkItemsInline(apkItems);
        }, 300);
    }
    

    apkTabHeader.addEventListener('click', function() {
        this.classList.toggle('active');
        
        
        const chevronIcon = this.querySelector('.fa-chevron-down');
        if (chevronIcon) {
            chevronIcon.style.transform = this.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        
        if (this.classList.contains('active')) {
           
            apkTabContent.classList.add('active');
            apkTabContent.style.maxHeight = apkTabContent.scrollHeight + 'px';
            localStorage.setItem('vonix_apk_tab_open', 'true');
            
          
            animateApkItemsInline(apkItems);
        } else {
           
            apkTabContent.classList.remove('active');
            apkTabContent.style.maxHeight = '0';
            localStorage.setItem('vonix_apk_tab_open', 'false');
        }
    });
    

    apkItems.forEach(item => {
        setupApkItemInteractionsInline(item);
    });
    
   
    if (!localStorage.getItem('vonix_apk_tab_seen')) {
        setTimeout(() => {
            
            apkTabHeader.style.boxShadow = '0 0 0 5px rgba(108, 92, 231, 0.7)';
            
            setTimeout(() => {
               
                apkTabHeader.style.boxShadow = 'none';
            }, 3000);
            
            localStorage.setItem('vonix_apk_tab_seen', 'true');
        }, 1500);
    }
}

function animateApkItemsInline(items) {
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
}

function setupApkItemInteractionsInline(item) {
    const downloadBtn = item.querySelector('.apk-download-btn');
    
    if (downloadBtn) {
        item.addEventListener('mouseenter', function() {
            downloadBtn.style.transform = 'scale(1.1)';
            
            downloadBtn.style.boxShadow = '0 8px 25px rgba(108, 92, 231, 0.6)';
        });
        
        item.addEventListener('mouseleave', function() {
            downloadBtn.style.transform = 'scale(1)';
            
            downloadBtn.style.boxShadow = '0 5px 15px rgba(108, 92, 231, 0.4)';
        });
    }
    
   
    item.addEventListener('click', function(e) {
     
        const rect = this.getBoundingClientRect();
        const x = (rect.left + rect.right) / 2 / window.innerWidth;
        const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
        
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y, x },
            colors: ['#ff6b6b', '#7d56f6', '#6c5ce7', '#a29bfe']
        });
        
       
        const apkName = this.querySelector('.apk-name').textContent;
        localStorage.setItem('vonix_last_downloaded_apk', apkName);
        localStorage.setItem('vonix_last_download_time', new Date().toISOString());
    });
}


document.addEventListener('DOMContentLoaded', function() {
    
    initApkDownloadsTab();
    
  
});


document.addEventListener('DOMContentLoaded', function() {
    const openApkModalBtn = document.getElementById('openApkModalBtn');
    const apkModal = document.getElementById('apkModal');
    const closeApkModal = document.getElementById('closeApkModal');
    const apkModalContainer = document.querySelector('.apk-modal-container');
    
    if (openApkModalBtn && apkModal && closeApkModal) {
        openApkModalBtn.addEventListener('click', function() {
            apkModal.classList.add('active');
        });
        closeApkModal.addEventListener('click', function() {
            apkModal.classList.remove('active');
        });
        apkModal.addEventListener('click', function(e) {
            if (e.target === apkModal) {
                apkModal.classList.remove('active');
            }
        });
    }
    
    document.querySelectorAll('#apkModal .apk-item').forEach(item => {
        item.addEventListener('click', function(e) {
           
            const rect = this.getBoundingClientRect();
            const x = (rect.left + rect.right) / 2 / window.innerWidth;
            const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y, x },
                colors: ['#ff6b6b', '#7d56f6', '#6c5ce7', '#a29bfe']
            });
        });
    });
});

// === NOTIFIKASI STATUS SERVER ===
document.addEventListener('DOMContentLoaded', function() {
    const notif = document.getElementById('serverStatusNotif');
    const notifText = document.getElementById('serverStatusNotifText');
    
    const statusText = document.getElementById('statusText');
    if (notif && notifText && statusText) {
        
        notifText.textContent = statusText.textContent;
        notif.classList.add('active');
        notif.style.display = 'flex';
        
        setTimeout(() => {
            notif.classList.remove('active');
            notif.classList.add('hide');
            setTimeout(() => {
                notif.style.display = 'none';
                notif.classList.remove('hide');
            }, 600);
        }, 8000);
    }
});


function showServerStatusNotif(status, message) {
    const notif = document.getElementById('serverStatusNotif');
    const notifText = document.getElementById('serverStatusNotifText');
    
  
    notifText.textContent = message;
    
 
    notif.style.display = 'flex';
    notif.classList.add('active');
    
  
    setTimeout(() => {
        notif.classList.add('hide');
        setTimeout(() => {
            notif.style.display = 'none';
            notif.classList.remove('active', 'hide');
        }, 500);
    }, 5000);
}


firebase.database().ref('serverStatus').on('value', (snapshot) => {
    const serverStatus = snapshot.val() || { status: 'online', message: 'Server: Online' };

    showServerStatusNotif(serverStatus.status, serverStatus.message);
});
