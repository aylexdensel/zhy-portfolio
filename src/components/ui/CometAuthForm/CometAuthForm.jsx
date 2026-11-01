import React, { useState } from 'react';
import styles from './CometAuthForm.module.css';

export function CometAuthForm() {
  const [passcode, setPasscode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      alert('Biometric / Vault Security Key Verified ✓');
    }, 1200);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cometCard}>
        {/* 360-Degree Sweeping Radiant Comet Beam */}
        <div className={styles.cometBeam} aria-hidden="true" />

        {/* Inner Card Frame */}
        <div className={styles.innerForm}>
          <div className={styles.header}>
            <div className={styles.pulseDot} />
            <span className={styles.vaultBadge}>Vault Access</span>
            <h4 className={styles.title}>Radiant Security</h4>
          </div>

          <form onSubmit={handleVerify} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Access Token / Passcode</label>
              <input
                type="password"
                required
                placeholder="•••• •••• ••••"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.verifyBtn} disabled={isVerifying}>
              {isVerifying ? 'Decrypting Vault...' : 'Authorize Token ⚡'}
            </button>
          </form>

          {/* Social Quick Connect */}
          <div className={styles.quickAuthBlock}>
            <span className={styles.dividerText}>or continue with</span>
            <div className={styles.socialPillRow}>
              <button
                type="button"
                className={styles.socialPill}
                onClick={() => alert('Connected with GitHub SSO')}
              >
                GitHub
              </button>
              <button
                type="button"
                className={styles.socialPill}
                onClick={() => alert('Connected with Google Workspace')}
              >
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CometAuthForm;