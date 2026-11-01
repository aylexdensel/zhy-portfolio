import React, { useRef, useState } from 'react';
import styles from './FloatingAuthForm.module.css';

export function FloatingAuthForm() {
  const cardRef = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: -y * 22, y: x * 22 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`3D Floating Login Submitted for: ${formData.email || 'user'}`);
  };

  return (
    <div className={styles.container}>
      <div
        ref={cardRef}
        className={styles.cardBody}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRot({ x: 0, y: 0 });
        }}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          transition: isHovered ? 'transform 100ms ease-out' : 'transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {/* Floating Header */}
        <div
          className={styles.headerBlock}
          style={{ transform: isHovered ? 'translateZ(45px)' : 'translateZ(0)' }}
        >
          <div className={styles.iconCircle}>🔐</div>
          <h4 className={styles.title}>3D Floating Sign In</h4>
          <p className={styles.subtext}>Parallax depth authentication</p>
        </div>

        {/* Floating Inputs */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div
            className={styles.inputGroup}
            style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)' }}
          >
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              required
              placeholder="user@domain.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.input}
            />
          </div>

          <div
            className={styles.inputGroup}
            style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)' }}
          >
            <label className={styles.label}>Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className={styles.input}
            />
          </div>

          {/* Floating CTA Button */}
          <button
            type="submit"
            className={styles.submitBtn}
            style={{ transform: isHovered ? 'translateZ(55px)' : 'translateZ(0)' }}
          >
            Sign In →
          </button>
        </form>

        <span
          className={styles.footerNote}
          style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)' }}
        >
          Don't have an account? <strong className={styles.highlight}>Sign up</strong>
        </span>
      </div>
    </div>
  );
}

export default FloatingAuthForm;