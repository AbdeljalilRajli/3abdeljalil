import Link from "next/link";
import Nav from "./Nav";
import styles from './availabledot.module.css'
import { useState, useEffect } from "react";

const Header = ({ singleMenu }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);
  return (
    <header 
      className="main-header menu-absolute"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '900px',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '50px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '12px 24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="header-inner d-flex align-items-center justify-content-between" style={{ position: 'relative', width: '100%' }}>
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a style={{ display: 'flex', alignItems: 'center', gap: '8px' }} data-cursor="hover">
                    <img
                      src="/assets/images/logos/logo-white.png"
                      alt="Abdeljalil Logo"
                      style={{
                        height: '40px',
                        width: 'auto'
                      }}
                    />
                  </a>
                </Link>
              </div>
            </div>
        {/* Navigation */}
        <div className="nav-outer">
          <nav style={{ display: 'flex', gap: '32px' }}>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              data-cursor="hover"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                opacity: '0.9',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.9'}
            >
              About
            </a>
            <a 
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              data-cursor="hover"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                opacity: '0.9',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.9'}
            >
              Skills
            </a>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              data-cursor="hover"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                opacity: '0.9',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.9'}
            >
              Project (8)
            </a>
            <Link legacyBehavior href="/blog">
              <a data-cursor="hover" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                opacity: '0.9'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.9'}>
                Blog
              </a>
            </Link>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              data-cursor="hover"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                opacity: '0.9',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.9'}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Desktop Available indicator */}
        <div className="desktop-available" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px'
          }}>
            <span style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Available
            </span>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#6a98f0',
              borderRadius: '50%',
              boxShadow: '0 0 10px #6a98f0, 0 0 20px #6a98f0',
              animation: 'pulse 2s infinite'
            }}></div>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-cursor="hover"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '32px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 10
          }}
        >
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'white',
            borderRadius: '1px',
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
          }}></div>
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'white',
            borderRadius: '1px',
            margin: '4px 0',
            transition: 'all 0.3s ease',
            opacity: mobileMenuOpen ? '0' : '1'
          }}></div>
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'white',
            borderRadius: '1px',
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
          }}></div>
        </button>

        {/* Mobile Center Available */}
        <div className="mobile-center-available" style={{
          display: 'none',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            color: 'white',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Available
          </span>
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#6a98f0',
            borderRadius: '50%',
            boxShadow: '0 0 10px #6a98f0, 0 0 20px #6a98f0',
            animation: 'pulse 2s infinite'
          }}></div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div 
            className="mobile-nav"
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              right: '0',
              marginTop: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(40px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              animation: 'slideDown 0.3s ease-out'
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                About
              </a>
              <a 
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Skills
              </a>
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Project (8)
              </a>
              <Link legacyBehavior href="/blog">
                <a 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Blog
                </a>
              </Link>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile responsive styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .nav-outer {
            display: none !important;
          }
          .desktop-available {
            display: none !important;
          }
          .mobile-center-available {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .logo-outer {
            display: flex !important;
          }
          header {
            width: calc(100% - 20px) !important;
            top: 10px !important;
            padding: 8px 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          header {
            border-radius: 25px !important;
          }
        }
      `}</style>
    </header>
  );
};
export default Header;
