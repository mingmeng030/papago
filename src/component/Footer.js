import React, { useState } from "react";
import blog from "../assets/blog.png";
import facebook from "../assets/facebook.png";
import appIcon from "../assets/appIcon.png";
import qrCode from "../assets/qrCode.png";
import closeIcon from "../assets/closeIcon.png";
import "../styles/components/footer.scss";

const Footer = () => {
  const [isQrOpened, setIsQrOpened] = useState(false);

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top__front">
          <span className="footer-top__new">NEW</span>
          <a href="https://blog.naver.com/nv_papago" target="_blank">
            <span className="footer-top__content">
              파파고의 새로운 업데이트를 공식 블로그에서 확인해보세요!
            </span>
          </a>
        </div>

        <div className="footer-top__end">
          <a href="https://www.facebook.com/NaverPapago/" target="_blank">
            <img className="facebook" src={facebook}></img>
          </a>
          <a href="https://blog.naver.com/nv_papago" target="_blank">
            <img className="blog" src={blog}></img>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        {isQrOpened && (
          <div className="modal-qr">
            <img
              className="modal-icon-close"
              src={closeIcon}
              onClick={() => setIsQrOpened(false)}
            />
            <div className="modal-img-qr-container">
              <img className="modal-img-qr" src={qrCode}></img>
            </div>
            <p className="modal-content">
              <span>QR 스캔하고</span> 앱 다운로드 받으세요!
            </p>
          </div>
        )}
        <div className="download" onClick={() => setIsQrOpened(true)}>
          <span className="download-icon-container">
            <img className="download-icon" src={appIcon} />
          </span>
          <span className="download-content">APP Download</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
