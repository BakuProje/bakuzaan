const videoElement = document.getElementById('background-video');
const videoSources = [
    './isi/video/infobot.mp4',
    './isi/video/video2.mp4',
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

// Fungsi untuk popup WhatsApp
function toggleWaPopup() {
    const popup = document.getElementById('wa-popup');
    popup.classList.add('active');
}

// Fungsi untuk popup TikTok
function toggleTiktokPopup() {
    const popup = document.getElementById('tiktok-popup');
    popup.classList.add('active');
}

// Fungsi untuk menutup popup
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

// Menutup popup saat mengklik area di luar popup
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
    const starCount = 15;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('shooting-star');
        

        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 5;
        const top = Math.random() * 50;
        
        star.style.top = `${top}%`;
        star.style.left = `-100px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        
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
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
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
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
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
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 4
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
});

closeChat.addEventListener('click', function() {
    chatbotContainer.classList.remove('open');
});


const botResponses = {
    'hai': 'Hai juga! 👋 Ada yang bisa saya bantu?',
    'halo': 'Halo! 👋 Selamat datang di Vonix PS!',
    'cara bermain': 'Cara bermain Vonix PS:\n\n📱 UNTUK ANDROID:\n1. Klik tombol "VHOST & HOSTGO" di halaman utama\n2. Klik "copy powertunnel" \n3. Buka aplikasi Power Tunnel\n4. Masuk ke menu Plugins\n5. Pilih pengaturan bagian Host\n6. Paste URL yang sudah di-copy tadi\n\n💻 UNTUK PC/LAPTOP:\n1. Buka Notepad (klik kanan → Run as administrator)\n2. Klik File → Open\n3. Ketik alamat: C:\\Windows\\System32\\drivers\\etc\n4. Ubah filter file menjadi "All Files"\n5. Pilih file "hosts"\n6. Tambahkan baris berikut di bagian paling bawah:\n\n15.235.166.218 growtopia1.com\n15.235.166.218 growtopia2.com\n15.235.166.218 www.growtopia1.com\n15.235.166.218 www.growtopia2.com\n15.235.166.218 RvLnd.here',
    'apa itu vonix': 'Vonix PS adalah private server Growtopia yang menyediakan gameplay seru dan komunitas yang ramah!',
    'admin': 'Admin kami adalah Kuzu dan Dhill. Kamu bisa menghubungi mereka melalui WhatsApp atau Discord.',
    'cara download': 'Klik tombol VHOST & HOSTGO atau POWER TUNNEL di halaman utama untuk mulai mendownload.',
    'terima kasih': 'Sama-sama! 😊 Senang bisa membantu.',
    'terimakasih': 'Sama-sama! 😊 Senang bisa membantu.',
    'makasih': 'Sama-sama! 😊 Senang bisa membantu.'
};

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
    chatInput.value = '';

    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {

        let botReply = 'Maaf, saya tidak mengerti. Coba tanyakan tentang cara bermain, download, atau hubungi admin.';

        const lowerMessage = message.toLowerCase();
        
        for (const key in botResponses) {
            if (lowerMessage.includes(key)) {
                botReply = botResponses[key];
                break;
            }
        }

        if (lowerMessage.includes('discord')) {
            botReply = 'Kamu bisa bergabung dengan Discord Vonix PS melalui link di halaman utama. Kami memiliki komunitas yang aktif di sana!';
        } else if (lowerMessage.includes('whatsapp') || lowerMessage.includes('wa')) {
            botReply = 'Kamu bisa bergabung dengan grup WhatsApp Vonix PS melalui link di halaman utama.';
        }

        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'bot-message';
        botMessageDiv.textContent = botReply;
        botMessageDiv.setAttribute('data-time', timestamp);
        chatMessages.appendChild(botMessageDiv);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

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
