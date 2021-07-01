import Link from "next/link";
import { TwitterOutlined } from "@ant-design/icons";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img className="img-logo" src="./images/logo/logo.png" alt="" />
          <ul>
            <li>
              <p>F8 là nơi học lập trình miễn phí.</p>
            </li>
            <li>
              <p>
                Các khoá học được đầu tư kỹ lưỡng từ nội dung tới chất lượng
                hình ảnh và âm thanh.
              </p>
            </li>
            <li>
              <p>
                Học viên có thể học từ con số 0 tới khi trở thành lập trình viên
                chuyên nghiệp tại đây.
              </p>
            </li>

            <li>
              <p>© 2019 MyCV JSC. All rights reserved. </p>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <h6 className="main-title">F8</h6>
              <ul>
                <li>
                  <a href="">Giới thiệu</a>
                </li>

                <li>
                  <a href="">Câu hỏi thường gặp</a>
                </li>

                <li>
                  <a href="">Liên hệ</a>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <h6 className="main-title">Sản phẩm</h6>
              <ul>
                <li>
                  <a href="">MyCV.vn</a>
                </li>

                <li>
                  <a href="">Fullstack.edu.vn</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h6 className="main-title">Hỗ trợ</h6>
              <ul>
                <li>
                  <a href="">Hỗ trợ</a>
                </li>

                <li>
                  <a href="">Đóng góp</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-3">
          <h6 className="main-title">Theo dõi chúng tôi</h6>
          <p className="enter-email">
            Nhập email để đăng ký nhận những thông tin hữu ích về học tập từ F8
          </p>

          <input
            className="register-email"
            type="email"
            name=""
            id=""
            placeholder="Email của bạn..."
          />

          <button className="register-button">Đăng ký</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
