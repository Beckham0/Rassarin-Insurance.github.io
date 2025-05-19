function createNavbar() {
    const navbarHTML = `
    
<div id="navbar-container" class="navbar-expand-lg" style="z-index: 999 !important; height: 120px;">
  <nav class="navbar navbar-expand-lg bg-body" style="z-index: 999; background-color: #222 !important; !important; height: 120px;">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <!-- โลโก้ -->
      <a class="navbar-brand" href="./index.html">
        <img src="./Sorce/Logo/IMG_1450-1.png" style="border-radius: 0px;" width="80" height="90">
      </a>

      <!-- ปุ่ม "ติดต่อเรา" ย้ายมาไว้ข้างหน้า navbar-toggler บนมือถือ -->
      <a class="navbar-brand2 d-lg-none" href="https://line.me/ti/p/mdboY3IOZG" style="width: 95px; background-color:#f4b400; height: 40px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 600; color: #fff; margin-left: 0px;">
        ติดต่อเรา
      </a>

      <!-- ปุ่มเปิดเมนูบนมือถือ -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color: #f4b400;">MENU</span>
      </button>

      <!-- กล่องเมนู -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a id="lang_Home" class="nav-link a" href="./index eng.html">Home</a></li>
          <li class="nav-item"><a id="lang_about" class="nav-link b" href="./about_us eng.html">About Us</a></li>
          <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Our Services
            </a>
            <ul class="dropdown-menu" style="background: #f8f9fa; opacity:0.9;">
              <li><a id="lang_item1" class="dropdown-item c1" href="./Service1 eng.html">Comprehensive Accounting Services</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="./Service2 eng.html">Tax Planning Services</a></li>
              <li><a id="lang_item3" class="dropdown-item c3" href="./Service3 eng.html">Business Registration Services</a></li>
              <li><a id="lang_item4" class="dropdown-item c4" href="./Service4 eng.html">Visa Application Services</a></li>
              <li><a id="lang_item4" class="dropdown-item c4" href="./Service5 eng.html">Audit service</a></li></ul>
          </li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="ลูกค้าเรา eng.html">Our Customers</a></li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="ข่าวสาร eng.html">News</a></li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="ติดต่อเรา eng.html">Contact Us</a></li>
        </ul>
      </div>

      <!-- ปุ่ม "ติดต่อเรา" แบบ PC -->
      <a class="navbar-brand2 d-none d-lg-flex" href="https://line.me/ti/p/OvcdsMHsCP" style="width: 250px; background-color: #f4b400; height: 50px; border-radius: 50px; margin: 0 30px; display: flex; align-items: center; justify-content: center; font-size: 25px; font-weight: 600; color: #fff;">
        Contact us
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
              background-color: #222;
              margin-left: 100px;
          }
  
          .footer-column {
              flex: 1;
              min-width: 200px;
              padding: 10px;
              text-align: left;
          }
  
          h3 {
              color: #f4b400;
              margin: 0;
              font-size: 35px;
              margin-bottom: 5px;
              font-weight: bold;
          }
  
          h4 {
              color: #ffffff;
              margin: 0;
              font-size: 18px;
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
            width: 140px;
            margin-bottom: 5px;
            margin-left: 52px;
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
      margin-bottom: 10px;
      margin-left: -6px;
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
            <img src="./Sorce/Logo/IMG_1450-1.png" alt="โลโก้บริษัท" class="logo">
            <h4>One Stop Accounting Co., Ltd.</h4>
            <p>546 Ratchadawan Building, 7th Floor, Room No. 7-01, Ratchadaphisek Road, Chan Kasem Subdistrict, Chatuchak District, Bangkok 10900</p>
            <p>Tel: 062-362-4269</p>
            <p>Tel: 081-454-6949</p>
            <p>Email: </p>
        </div>
    
        <!-- คอลัมน์สอง : เมนู -->
        <div class="footer-column">
            <h3>MENU</h3>
            <a href="./index eng.html"><p>Home</p></a>
            <a href="./about_us eng.html"><p>About Us</p></a>
            <a href="./ติดต่อเรา eng.html"><p>Contact Us</p></a>
        </div>
    
        <!-- คอลัมน์สาม : บริการของเรา -->
        <div class="footer-column">
            <h3>Our services</h3>
            <a href="./Service1 eng.html"><p>● Full-Service Accounting</p></a>
            <a href="./Service2 eng.html"><p>● Tax Planning Services</p></a>
            <a href="./Service3 eng.html"><p>● Business Registration Services</p></a>
            <a href="./Service4 eng.html"><p>● Visa Application Services</p></a>
            <a href="./Service5 eng.html"><p>● Audit service</p></a>
        </div>
    
        <!-- คอลัมน์สี่ : ข้อมูลการติดต่อ -->
        <div class="footer-column contact">
            <h3>Contact Us</h3>
            <p style="margin: 0;">Tel: 062-362-4269</p>
            <p style="margin: 0;">Tel: 081-454-6949</p>
            <p style="padding-top: 10px;">Line ID : KUKKAI🧡 </p>
            <img class="qr-code" src="Sorce/qr.png" alt="QR Code">
            <a href="https://www.facebook.com/share/15kUnnDoJr/?mibextid=wwXIfr"><img src="Sorce/facebook1.png" alt="Facebook" style="border-radius: 20px;padding: 10px;"></a>
            <p style="padding-top: 10px;">We chat : Kukkai 😊古伊一</p>
            <img class="qr-code" src="Sorce/we1.png" alt="QR Code">
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