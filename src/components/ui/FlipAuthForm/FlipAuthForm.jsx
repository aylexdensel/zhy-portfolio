import React, { useState } from 'react';
import styles from './FlipAuthForm.module.css';

export function FlipAuthForm() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${loginData.email}`);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for: ${signupData.name}`);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        
        {/* FRONT SIDE: LOGIN FORM */}
        <div className={styles.front}>
          <div className={styles.header}>
            <span className={styles.badge}>Sign In</span>
            <h4 className={styles.heading}>Welcome Back</h4>
          </div>

          <form onSubmit={handleLoginSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.primaryBtn}>
              Sign In →
            </button>
          </form>

          <button
            type="button"
            onClick={() => setIsFlipped(true)}
            className={styles.flipToggleBtn}
          >
            Need an account? Sign Up ↻
          </button>
        </div>

        {/* BACK SIDE: SIGNUP FORM */}
        <div className={styles.back}>
          <div className={styles.header}>
            <span className={styles.badgeSignup}>Sign Up</span>
            <h4 className={styles.heading}>Create Account</h4>
          </div>

          <form onSubmit={handleSignupSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Full Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={signupData.name}
                onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.signupBtn}>
              Create Account ✓
            </button>
          </form>

          <button
            type="button"
            onClick={() => setIsFlipped(false)}
            className={styles.flipToggleBtn}
          >
            Already registered? Sign In ↻
          </button>
        </div>

      </div>
    </div>
  );
}

export default FlipAuthForm;