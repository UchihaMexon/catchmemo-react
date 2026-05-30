const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
const newCSS = `

/* --- Cookie Banner --- */
.cookie-banner-overlay {
  position: fixed;
  bottom: 24px;
  left: 24px;
  right: 24px;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(13, 11, 26, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  z-index: 9999;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.cookie-banner-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cookie-text h4 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: #fff;
}

.cookie-text p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.cookie-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.cookie-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cookie-btn.decline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
}

.cookie-btn.decline:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.cookie-btn.accept {
  background: linear-gradient(135deg, #e6683c 0%, #dc2743 100%);
  border: none;
  color: #fff;
  box-shadow: 0 4px 15px rgba(220, 39, 67, 0.3);
}

.cookie-btn.accept:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(220, 39, 67, 0.4);
}

@keyframes slideUp {
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 768px) {
  .cookie-banner-overlay {
    bottom: 16px;
    left: 16px;
    right: 16px;
    padding: 20px;
  }
  .cookie-actions {
    flex-direction: column;
  }
  .cookie-btn {
    width: 100%;
  }
}
`;

fs.appendFileSync(cssPath, newCSS);
console.log('CSS appended');
