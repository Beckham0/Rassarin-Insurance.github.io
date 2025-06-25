function createNavbar() {
    const navbarHTML = `
    
<div id="navbar-container" class="navbar-expand-lg" style="z-index: 999 !important; height: 90px;">
  <nav class="navbar navbar-expand-custom bg-body" style="z-index: 999; background-color:#012f6c !important; !important; height: 90px;">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <!-- โลโก้ -->
      <a class="navbar-brand" href="./index.html">
      <img src="./Sorce/LOGO3.jpg" style="border-radius: 0px;" width="100%" height="40px">
      </a>

      <!-- ปุ่ม "ติดต่อเรา" ย้ายมาไว้ข้างหน้า navbar-toggler บนมือถือ -->
      <a class="navbar-brand2 d-lg-none" href="" style="width: 55px; height: 40px; display: flex; align-items: center; margin-left: 0px;">
      <img src="Sorce/line.1.png" alt="" style="width: 50px;border-radius: 50px;">
      </a>
      <a class="navbar-brand2 d-lg-none" href="" style=" height: 40px;  display: flex; align-items: center; justify-content: center; margin-left: 0px;">
      <img src="Sorce/mobile.1.png" alt="" style="width: 50px; border-radius: 50px;">
      </a>

      <!-- ปุ่มเปิดเมนูบนมือถือ -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color:#004aad;">MENU</span>
      </button>

      <!-- กล่องเมนู -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a id="lang_Home" class="nav-link a" href="./index.html">หน้าเเรก</a></li>
          <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              เเบบประกัน
            </a>
            <ul class="dropdown-menu" style="background: #f8f9fa; opacity:0.9; max-width: 18rem;">
              <li><a id="lang_item1" class="dropdown-item c1" href="./Service1.html">● ประกันสุขภาพเหมาจ่าย</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="./Service2.html">● ประกันคุ้มครองโรคร้ายแรง</a></li>
              <li><a id="lang_item3" class="dropdown-item c3" href="./Service3.html">● ประกันเพื่อการเก็บออม<br>/ทุนการศึกษาบุตร</a></li>
              <li><a id="lang_item4" class="dropdown-item c4" href="./Service4.html">● ประกันบำนาญ/เกษียณ <br>/ลดหย่อนภาษี</a></li>
              <li><a id="lang_item5" class="dropdown-item c4" href="./Service5.html">● ประกันควบคู่การลงทุน (Unitlink)</a></li>
              <li><a id="lang_item7" class="dropdown-item c4" href="./Service7.html">● ประกันนิติบุคคล</a></li>
              <li><a id="lang_item6" class="dropdown-item c4" href="./Service6.html">● ประกันการเดินทาง</a></li>
              </ul>

          </li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="สมัครตัวแทน.html">สมัครตัวแทน</a></li>
          <li class="nav-item"><a id="lang_about" class="nav-link b" href="./เกี่ยวกับเรา.html">เกี่ยวกับเรา</a></li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="ติดต่อเรา.html">ติดต่อเรา</a></li>
        </ul>
      </div>

      <!-- ปุ่ม "ติดต่อเรา" แบบ PC -->
      <a class="navbar-brand2 d-none d-lg-flex" href="" style="width: 50px; display: flex; align-items: center; ">
        <img src="Sorce/line.1.png" alt="" style="width: 50px;margin: 10px; border-radius: 50px;">
      </a>
      <a class="navbar-brand2 d-none d-lg-flex" href="" style="width: 50px;  margin: 0 30px; display: flex; align-items: center; justify-content: center;">
        <img src="Sorce/mobile.1.png" alt="" style="width: 50px;margin: 10px; border-radius: 50px;">
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
              background-color: #012f6c;
              margin-left: 50px;
          }
  
          .footer-column {
              flex: 1;
              min-width: 200px;
              padding: 10px;
              text-align: left;
          }
  
          .footer-column h3 {
              color:rgb(255, 255, 255);
              margin: 0;
              font-size: 35px;
              margin-bottom: 5px;
              font-weight: bold;
          }
  
          .footer-column h4 {
              color: #ffffff;
              margin: 0;
              font-size: 28px;
              margin-bottom: 5px;
              font-weight: bold;
          }
  
          .footer-column a {
            font-size: 19px;
            color: #ffffff;
            margin: 0;
            text-indent: 10px;
          }

          .footer-column a {
            text-decoration: none;
          }
  
          .footer-column p {
            font-size: 19px;
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

            .footer-column h3 {
              font-size: 30px;
          }
  
          .footer-column h4 {
              font-size: 25px;
          }
  
          .footer-column a {
            font-size: 12px;
          }

          .footer-column p {
            font-size: 15px;
            color: #ffffff;
            margin: 0;
          }

          }
  
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
    
        <div class="footer-column">
            <h3>การบริการ</h3>
            <a href=""><p>● เเจ้งเคลม</p></a>
            <a href=""><p>● การจัดการกรมธรรม์</p></a>
            <a href=""><p>● ขอหนังสือรับรองชำระเบี้ย</p></a>
            <a href=""><p>● การบริการอื่นๆ</p></a>
        </div>
    
        <div class="footer-column">
            <h3>เเบบประกันที่เเนะนำ</h3>
            <a href="./Service1.html"><p>● ประกันสุขภาพเหมาจ่าย</p></a>
            <a href="./Service2.html"><p>● ประกันคุ้มครองโรคร้ายแรง</p></a>
            <a href="./Service3.html"><p>● ประกันเพื่อการเก็บออม/ทุนการศึกษาบุตร</p></a>
            <a href="./Service4.html"><p>● ประกันบำนาญ/เกษียณ/ลดหย่อนภาษี</p></a>
            <a href="./Service5.html"><p>● ประกันควบคู่การลงทุน (Unitlink)</p></a>
            <a href="./Service7.html"><p>● ประกันนิติบุคคล</p></a>
        </div>
    
        <div class="footer-column contact">
            <h3>ติดต่อเรา</h3>
            <p>สำนักงานตัวแทนประกันชีวิต <br>คุณรัสรินทร์ บวรธนะเกียรติ์</p>
            <p>115/11 โครงการเมอริทเพลสบางนา หมู่ 13 ซ.มหาชัย ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ 10540</p>
            <p style="margin: 0;">โทร: 0865662639(ใหม่), 0956465419(นก)</p>
            <p style="padding-top: 10px;">Line ID : mai4263mai</p>
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