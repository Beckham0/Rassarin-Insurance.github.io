function createNavbar() {
    const navbarHTML = `
    
<div id="navbar-container" class="navbar-expand-lg" style="z-index: 999 !important; height: 90px;">
  <nav class="navbar navbar-expand-custom bg-body" style="z-index: 999; background-color:rgb(187, 223, 252) !important; !important; height: 90px;">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <!-- โลโก้ -->
      <a class="navbar-brand" href="./index.html">
      <img src="./Sorce/LOGO.png" style="border-radius: 0px;" width="100%" height="100%">
      </a>

      <!-- ปุ่ม "ติดต่อเรา" ย้ายมาไว้ข้างหน้า navbar-toggler บนมือถือ -->
      <a class="navbar-brand2 d-lg-none" href="" style="width: 15px; height: 40px; display: flex; align-items: center; margin-left: 0px;">
      <img src="Sorce/line.png" alt="" style="width: 50px;border-radius: 50px;">
      </a>
      <a class="navbar-brand2 d-lg-none" href="" style=" height: 40px;  display: flex; align-items: center; justify-content: center; margin-left: 30px;">
      <img src="Sorce/mobile.png" alt="" style="width: 50px; border-radius: 50px;">
      </a>

      <!-- ปุ่มเปิดเมนูบนมือถือ -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color:#004aad;">MENU</span>
      </button>

      <!-- กล่องเมนู -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a id="lang_Home" class="nav-link a" href="./index.html">หน้าเเรก</a></li>
          <li class="nav-item"><a id="lang_about" class="nav-link b" href="./เกี่ยวกับเรา.html">เกี่ยวกับเรา</a></li>
          <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              บริการเรา
            </a>
            <ul class="dropdown-menu" style="background: #f8f9fa; opacity:0.9;">
              <li><a id="lang_item1" class="dropdown-item c1" href="./Service1.html">ประกันชีวิต</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="./Service2.html">ประกันสุขภาพ</a></li>
              <li><a id="lang_item3" class="dropdown-item c3" href="./Service3.html">ประกันโรคร้ายเเรง</a></li>
              <li><a id="lang_item4" class="dropdown-item c4" href="./Service4.html">ประกันนิติบุคคล</a></li>
              <li><a id="lang_item5" class="dropdown-item c4" href="./Service5.html">ประกันกลุ่ม</a></li>
              <li><a id="lang_item6" class="dropdown-item c4" href="./Service6.html">ประกันยูนิตลิงค์</a></li>
              <li><a id="lang_item7" class="dropdown-item c4" href="./Service7.html">ประกันการเดินทาง</a></li>
              </ul>

          </li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="สมัครตัวแทน.html">สมัครตัวแทน</a></li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="ลูกค้าเรา.html">ลูกค้าเรา</a></li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="ข่าวสาร.html">ข่าวสาร</a></li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="ติดต่อเรา.html">ติดต่อเรา</a></li>
        </ul>
      </div>

      <!-- ปุ่ม "ติดต่อเรา" แบบ PC -->
      <a class="navbar-brand2 d-none d-lg-flex" href="" style="width: 50px; display: flex; align-items: center; ">
        <img src="Sorce/line.png" alt="" style="width: 50px;margin: 10px; border-radius: 50px;">
      </a>
      <a class="navbar-brand2 d-none d-lg-flex" href="" style="width: 50px;  margin: 0 30px; display: flex; align-items: center; justify-content: center;">
        <img src="Sorce/mobile.png" alt="" style="width: 50px;margin: 10px; border-radius: 50px;">
      </a>
    </div>
  </nav>
</div>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;
  
    // Initialize Bootstrap JavaScript (สำคัญมาก)
    const navbar = document.querySelector('.navbar'); // เลือก element navbar
    new bootstrap.Collapse(navbar, { // สร้าง instance ของ Bootstrap Collapse
      toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
    });
  }


  


  function createfooter() {
    const footerHTML = `
      <style>
  
          .footer {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              padding: 20px;
              background-color: #004aad;
              margin-left: 100px;
          }
  
          .footer-column {
              flex: 1;
              min-width: 200px;
              padding: 10px;
              text-align: left;
          }
  
          h3 {
              color:rgb(255, 255, 255);
              margin: 0;
              font-size: 35px;
              margin-bottom: 5px;
              font-weight: bold;
          }
  
          h4 {
              color: #ffffff;
              margin: 0;
              font-size: 28px;
              margin-bottom: 5px;
              font-weight: bold;
          }
  
          a {
            font-size: 19px;
            color: #ffffff;
            margin: 0;
            font-weight: bold;
          }

          a {
            text-decoration: none;
          }
  
          p {
            font-size: 17px;
            color: #ffffff;
            margin: 0;
          }
  
          .logo {
            width: 190px;
            margin-bottom: 15px;
            margin-left: 40px;
          }
  
          .contact img {
            width: 139px;
            margin-right: 10px;
          }
  
          .qr-code {
              width: 80px;
              height: 139px;
          }
  
          /* สำหรับหน้าจอแคบลงเป็นแนวตั้ง */
          @media (max-width: 768px) {
              .footer {
                  flex-direction: column;
                  align-items: center;
                  margin-left: 0;
              }
  
              .footer-column {
                  width: 100%;
                  text-align: center;
              }
          }
  
          /* สำหรับหน้าจอมือถือแบ่งเป็น 2 แถว 2 คอลัมน์ */
          @media (max-width: 480px) {
              .footer {
                  flex-wrap: wrap;
                  flex-direction: row;
                  justify-content: center;
                  margin-left: 0;
              }
  
              .footer-column {
                  width: 45%;
                  text-align: left;
              }
  
    .logo {
      width: 155px;
      margin-bottom: 20px;
      margin-left: 16px;
    }
  
  p {
    font-size: 15px;
    color: #ffffff;
    margin:
  0;
  }
          }
      </style>
  
    <footer class="footer">
        <!-- คอลัมน์แรก : โลโก้และข้อมูลบริษัท -->
        <div class="footer-column">
        <img src="./Sorce/LOGO1.png" alt="โลโก้บริษัท" class="logo">
            <h4>สำนักงานตัวแทนประกันชีวิต คุณรัสรินทร์ บวรธนะเกียรติ์</h4>
            <p>115/11 โครงการเมอริทเพลสบางนา หมู่ 13 ซ.มหาชัย ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ 10540</p>
        </div>
    
        <!-- คอลัมน์สอง : เมนู -->
        <div class="footer-column">
            <h3>เมนู</h3>
            <a href="./index.html"><p>หน้าเเรก</p></a>
            <a href="./about_us.html"><p>เกี่ยวกับเรา</p></a>
            <a href="./ข่าวสาร.html"><p>ข่าวสาร</p></a>
        </div>
    
        <!-- คอลัมน์สาม : บริการของเรา -->
        <div class="footer-column">
            <h3>บริการเรา</h3>
            <a href="./Service1.html"><p>● ประกันชีวิต</p></a>
            <a href="./Service2.html"><p>● ประกันสุขภาพ</p></a>
            <a href="./Service3.html"><p>● ประกันโรคร้ายแรง</p></a>
            <a href="./Service4.html"><p>● ประกันนิติบุคคล</p></a>
            <a href="./Service5.html"><p>● ประกันกลุ่ม</p></a>
            <a href="./Service6.html"><p>● ประกันยูนิตลิงค์</p></a>
            <a href="./Service7.html"><p>● ประกันการเดินทาง</p></a>
        </div>
    
        <!-- คอลัมน์สี่ : ข้อมูลการติดต่อ -->
        <div class="footer-column contact">
            <h3>ติดต่อเรา</h3>
            <p style="margin: 0;">โทร: 0865662639, 0956465419, 0996255730</p>
            <p style="padding-top: 10px;">Line ID : mai4263mai</p>
            <p style="padding:10px 0;">E-Mail: ratsarin.maimai@gmail.com</p>
            <img class="qr-code" src="Sorce/qr.png" alt="QR Code">
            <a href=""><img src="Sorce/facebook1.png" alt="Facebook" style="border-radius: 20px;padding: 10px;"></a>
        </div>
    </footer>
    
    `;
    document.getElementById("footerHTML1").innerHTML = footerHTML;
  
    // Initialize Bootstrap JavaScript (สำคัญมาก)
    const footer = document.querySelector('.FooterHTML'); // เลือก element navbar
    new bootstrap.Collapse(footer, { // สร้าง instance ของ Bootstrap Collapse
      toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
    });
  }