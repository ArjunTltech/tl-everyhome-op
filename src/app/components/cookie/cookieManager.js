'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieManager = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Check if the user has already accepted cookies
  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true); // Show banner if no consent cookie is found
    }
  }, []);

  // Handle accepting cookies
  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // Set cookie for 1 year
    setShowBanner(false); // Hide the banner after consent
  };

  // Handle rejecting cookies
  const handleRejectCookies = () => {
    Cookies.set('cookieConsent', 'false', { expires: 365 }); // Set a rejected consent cookie
    setShowBanner(false); // Hide the banner after rejecting
  };

  return (
    showBanner && (
      <div style={styles.banner}>
        <div style={styles.content}>
          <p style={styles.text}>
            We use cookies to enhance your experience on our site. By continuing to browse, you accept our use of cookies.
          </p>
          <div style={styles.buttons}>
            <button onClick={handleAcceptCookies} style={{ ...styles.button, ...styles.acceptButton }}>
              Accept Cookies
            </button>
            <button onClick={handleRejectCookies} style={{ ...styles.button, ...styles.rejectButton }}>
              Reject Cookies
            </button>
          </div>
        </div>
      </div>
    )
  );
};

const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '14px',
    flex: 1,
    paddingRight: '15px',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    border: 'none',
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '5px',
    outline: 'none',
  },
  acceptButton: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  rejectButton: {
    backgroundColor: '#f44336',
    color: '#fff',
  },
};

export default CookieManager;
