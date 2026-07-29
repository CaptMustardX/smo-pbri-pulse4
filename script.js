// ใช้ DOMContentLoaded เพื่อให้แน่ใจว่าโครงสร้างเว็บพร้อมสำหรับการแทรกโค้ด
document.addEventListener('DOMContentLoaded', function() {
            
    // 📍=============================================📍
    // เพิ่ม Property 'image' ให้แต่ละคน เพื่อให้รูปแยกเป็นอิสระ 
    // นำลิงก์รูปไปใส่ในช่อง image: "ใส่ลิงก์รูปตรงนี้" ได้เลย
    // 📍=============================================📍
    const teamMembers = [
        { 
            role: "นายกสโมสร", name: "จิณณพัตส์ วิไลเนตร", nickname: "ฮาร์ท", campus: "วพบ. พระพุทธบาท",
            image: "images/นางสาวจิณณพัตส์ วิไลเนตร.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 1 ที่นี่ 📍
        },
        { 
            role: "อุปนายกคนที่ 1 (บริหาร)", name: "ยสธวัส นิธิรุจิพัชร์", nickname: "ไอซ์", campus: "วพบ.นพรัตน์วชิระ",
            image: "images/นายยสธวัส  นิธิรุจิพัชร์.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 2 ที่นี่ 📍
        },
        { 
            role: "อุปนายกคนที่ 2 (กิจกรรม)", name: "ชิตภณ บุญน้อม", nickname: "ขวัญเมือง", campus: "วพบ.ชลบุรี",
            image: "images/นายชิตภณ บุญน้อม.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 3 ที่นี่ 📍
        },
        { 
            role: "อุปนายกคนที่ 3 (วิชาการ)", name: "มนต์สิทธิ์  -", nickname: "จินอ๋อง/จิน", campus: "วพบ.ชัยนาท",
            image: "images/นายมนต์สิทธิ์ -.png" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 4 ที่นี่ 📍
        },
        { 
            role: "เหรัญญิก", name: "วรวิช ปานพรม", nickname: "ปิง", campus: "วพบ.ชัยนาท",
            image: "images/นายวรวิช ปานพรม_.png" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 5 ที่นี่ 📍
        },
        { 
            role: "ผู้ช่วยเหรัญญิก", name: "กัญญาภัทร อุตโรกุล", nickname: "หมิง", campus: "วพบ.อุดรธานี",
            image: "images/นางสาวกัญญาภัทร อุตโรกุล.png" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 6 ที่นี่ 📍
        },
        { 
            role: "ฝ่ายทะเบียนและประเมินผล", name: "อนงค์นาถ คำอ้อ", nickname: "น้ำผึ้ง", campus: "วพบ.กรุงเทพ",
            image: "images/นางสาวอนงค์นาถ คำอ้อ.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 7 ที่นี่ 📍
        },
        { 
            role: "ผู้ช่วยฝ่ายทะเบียนฯ", name: "พรชนก ยาน้อย", nickname: "ใบเตย", campus: "วพบ.กรุงเทพ",
            image: "images/นางสาวพรชนก ยาน้อย.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 8 ที่นี่ 📍
        },
        { 
            role: "ฝ่ายประชาสัมพันธ์ฯ", name: "กิตติยา ดัดตรงธรรม", nickname: "มีมี่", campus: "วพบ.ราชบุรี",
            image: "images/นางสาว กิตติยา ดัดตรงธรรม.png" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 9 ที่นี่ 📍
        },
        { 
            role: "ผู้ช่วยประชาสัมพันธ์ คนที่ 1", name: "รัตติญา เฉลิมทอง", nickname: "กัล", campus: "วพบ.ราชบุรี",
            image: "images/นางสาวรัตติญา เฉลิมทอง1.png" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 10 ที่นี่ 📍
        },
        { 
            role: "ผู้ช่วยประชาสัมพันธ์ คนที่ 2", name: "สุดารัตน์ โดดสกุล", nickname: "สิงหา", campus: "วพบ.สวรรค์ประชารักษ์ฯ",
            image: "images/สุดารัตน์ โดดสกุล.png" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 11 ที่นี่ 📍
        },
        { 
            role: "ฝ่ายสวัสดิการและปฏิคม", name: "กันตพงศ์ ทองมา", nickname: "เจ้านาย", campus: "วพบ.นนทบุรี",
            image: "images/นายกันตพงศ์ ทองมา.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 12 ที่นี่ 📍
        },
        { 
            role: "ฝ่ายวิชาการและประกันคุณภาพฯ", name: "ฐิติรัตน์ สุขสมนิตย์", nickname: "กี้", campus: "วพบ.พระพุทธบาท",
            image: "images/ฐิติรัตน์ สุขสมนิตย์.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 13 ที่นี่ 📍
        },
        { 
            role: "ประธานส่งเสริมคุณธรรมฯ", name: "กมลวรรณ แก้วโกสุม", nickname: "เบนซ์", campus: "วพ.พระจอมเกล้า เพชรบุรี",
            image: "images/นางสาว กมลวรรณ แก้วโกสุม.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 14 ที่นี่ 📍
        },
        { 
            role: "ประธานชมรมจิตอาสาฯ", name: "ดาริณี ปัญญาบุตร", nickname: "ก้านหลิว", campus: "วพบ.สรรพสิทธิประสงค์",
            image: "images/นางสาวดาริณี ปัญญาบุตร.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 15 ที่นี่ 📍
        },
        { 
            role: "ประธานฝ่ายทำนุบำรุงศิลปวัฒนธรรม", name: "กัญญาพัชร์ คชเจริญทรัพย์", nickname: "โม", campus: "วพบ.นนทบุรี",
            image: "images/นางสาว กัญญาพัชร์ คชเจริญทรัพย์.png" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 16 ที่นี่ 📍
        },
        { 
            role: "ประธานชมรมส่งเสริมสุขภาพฯ", name: "สุภาพร บุระคร", nickname: "ส้มส้ม", campus: "วพบ.โคราช",
            image: "images/นางสาวสุภาพร บุระคร .jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 17 ที่นี่ 📍
        },
        { 
            role: "ประธานชมรมภาษาต่างประเทศ", name: "ณัชชา ดาวกระจาย", nickname: "โดนัท", campus: "วพบ.สวรรค์ประชารักษ์ฯ",
            image: "images/นางสาวณัชชา ดาวกระจาย.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 18 ที่นี่ 📍
        },
        { 
            role: "เลขานุการ", name: "ภทรพรรณ สุขโชติ", nickname: "เอิร์ธ", campus: "วพบ.สระบุรี",
            image: "images/นางสาวภทรพรรณ สุขโชติ.png" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 19 ที่นี่ 📍
        },
        { 
            role: "ผู้ช่วยเลขานุการ", name: "ธนวันต์ พุ่มพงษ์", nickname: "มิ้นท์ชี่", campus: "วพบ.ชัยนาท",
            image: "images/นางสาวธนวันต์ พุ่มพงษ์.jpg" // 📍 ใส่ลิงก์รูปสมาชิกคนที่ 20 ที่นี่ 📍
        }
    ];
    // 1. วาดโครงสร้างสมาชิกทั้งหมดลงใน HTML
    const teamGrid = document.getElementById('teamGrid');
    if (teamGrid) {
        teamGrid.innerHTML = '';
        teamMembers.forEach((member, index) => {
            const card = document.createElement('div');
            card.className = 'glass-card team-card';
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (index % 5) * 100);
            
            // ผูกเหตุการณ์คลิกให้ส่งข้อมูล member ปัจจุบันไปที่ Modal
            card.onclick = () => openModal(member);

            // 📍 [แก้ไขใหม่] บังคับ Inline CSS ลงใน <img> เพื่อแก้ปัญหารูปบีบยืด 📍
            card.innerHTML = `
                <div class="avatar" style="overflow: hidden; border-radius: 50%; display: block; padding: 0; position: relative;">
                    <img src="${member.image}" alt="Profile of ${member.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; border-radius: 50%; border: none;">
                </div>
                <h4>${member.role}</h4>
                <p class="name">${member.name}</p>
                <p style="color: var(--light-gold);">(${member.nickname})</p>
                <p class="campus">${member.campus}</p>
            `;
            teamGrid.appendChild(card);
        });
    }

    // 2. เรียกใช้ AOS Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // 3. เรียกใช้ Particles.js พื้นหลัง
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#D4AF37" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                move: { enable: true, speed: 1.5, direction: "top", out_mode: "out" }
            }
        });
    }

    // 4. ฟังก์ชันสำหรับ Modal
    function openModal(member) {
        const modal = document.getElementById('teamModal');
        const modalBody = document.getElementById('modalBody');
        
        if (modal && modalBody) {
            // 📍 [แก้ไขใหม่] บังคับ Inline CSS ลงใน <img> ของ Modal ด้วยเช่นกัน 📍
            modalBody.innerHTML = `
                <div class="avatar" style="width:110px; height:110px; margin:0 auto 1.5rem; overflow: hidden; border-radius: 50%; border: 2px solid var(--accent-gold); display: block; padding: 0; position: relative;">
                    <img src="${member.image}" alt="Profile of ${member.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; border-radius: 50%; border: none;">
                </div>
                <h3 style="color: var(--accent-gold);">${member.role}</h3>
                <h2 style="margin: 0.5rem 0;">${member.name} (${member.nickname})</h2>
                <p style="color: var(--light-gold); font-size: 1.1rem; margin-top: 0.5rem;">${member.campus}</p>
                <hr style="border-color: rgba(212,175,55,0.3); margin: 1.5rem 0;">
                <p style="font-weight: 300; opacity: 0.9;">"พร้อมรับฟัง เคียงข้าง และขับเคลื่อนเพื่อนักศึกษาบรมทุกคน"</p>
            `;
            modal.style.display = 'flex';
        }
    }

    function closeModal() {
        const modal = document.getElementById('teamModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.onclick = closeModal;
    }

    window.onclick = function(event) {
        const modal = document.getElementById('teamModal');
        if (event.target === modal) {
            closeModal();
        }
    };
});
