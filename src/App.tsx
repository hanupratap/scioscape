import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import '@fontsource-variable/urbanist';
import '@fontsource-variable/eb-garamond';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }
};

const zoomVariants = {
  initial: { scale: 0.92, opacity: 0, y: 40 },
  animate: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 30, duration: 0.7 } },
  hover: { scale: 1.04, boxShadow: '0 12px 36px rgba(0,0,0,0.13)' }
};

const runningUnderline = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #111;
  font-family: 'Urbanist Variable', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

const Navbar = styled.nav`
  width: 100%;
  padding: 2.5rem 3vw 1.5rem 3vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  box-shadow: none;
`;

const Logo = styled(motion.div)`
  font-family: 'Urbanist Variable', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  background: linear-gradient(110deg, rgba(122,90,54,1) 0%, rgba(122, 90, 54, 0.3) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: letter-spacing 0.3s;
  &:hover {
    letter-spacing: 0.04em;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6vw 2vw 4vw 2vw;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.1;
`;

const UnderlineWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

const SquiggleSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: -0.3em; /* Lower the squiggle so it's fully visible */
  width: 100%;
  height: 0.8em; /* Increase height for more space */
  pointer-events: none;
  z-index: 0;
`;

const AnimatedSquiggle = styled(motion.path)`
  stroke: #5e5e5e; // subtle minimalist gray
  stroke-width: 4;
  fill: none;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.18));
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 2.5vw, 2.2rem);
  font-weight: 400;
  color: #444;
  text-align: center;
  margin-bottom: 4rem;
`;

const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5vw;
  justify-content: center;
  margin-bottom: 6vw;
`;

const GalleryItem = styled(motion.div)`
  width: 320px;
  height: 420px;
  background: #eaeaea;
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 1.5rem 1.5rem 0 0;
`;

const GalleryLabel = styled.div`
  width: 100%;
  padding: 1.2rem 1.5rem;
  background: #fff;
  color: #222;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 0 0 1.5rem 1.5rem;
  text-align: left;
`;

const SquigglyBorderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5rem auto 0 auto;
  max-width: 440px;
  width: 100%;
`;

const ContactCardContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(90deg, #f5e9da 0%, #e2c9b0 100%);
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(164, 117, 81, 0.13);
  padding: 2.2rem 2.5rem;
  width: 100%;
  backdrop-filter: blur(2px);
  justify-content: center;
`;

const Philosophy = styled(motion.div)`
  text-align: center;
  font-size: 1.25rem;
  color: #7a5a36;
  margin: 2.5rem 0 0 0;
  font-family: 'EB Garamond Variable', serif;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.85;
`;

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const cards = [
    {
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      label: 'Modern Home',
      description: 'A modern home designed with sustainable materials and open spaces, blending nature and architecture.'
    },
    {
      img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      label: 'Office Space',
      description: 'A collaborative office space that inspires creativity and productivity with natural light and flexible layouts.'
    },
    {
      img: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=600&q=80',
      label: 'Cultural Center',
      description: 'A cultural center that brings the community together, featuring open galleries and event spaces.'
    }
  ];

  return (
    <Wrapper>
      <Navbar>
        <Logo
          initial={{ opacity: 0, scale: 0.7, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
        >
          ScioScape
        </Logo>
      </Navbar>
      <Main>
        <Title {...fadeInUp} transition={{ duration: 1.1 }}>
          Where Ideas{' '}
          <UnderlineWrapper style={{ display: 'inline-block', position: 'relative' }}>
            <span style={{ position: 'relative', zIndex: 1, color: '#bdbdbd' }}>Become</span>
            <SquiggleSvg viewBox="0 0 120 20">
              <AnimatedSquiggle
                d="M5 15 Q 20 5, 35 15 T 65 15 T 95 15 T 115 15"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            </SquiggleSvg>
          </UnderlineWrapper>{' '}
          Iconic Spaces
        </Title>
        <Subtitle {...fadeInUp} transition={{ duration: 1.3 }}>
          Creating inspiring spaces for modern living and working.<br />
          Minimal. Sustainable. Timeless.
        </Subtitle>
        <Gallery>
          {cards.map((card, idx) => (
            <GalleryItem
              key={card.label}
              variants={zoomVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ duration: 0.7, type: 'spring', stiffness: 320, damping: 30, delay: idx * 0.2 }}
              onClick={() => setOpenIndex(idx)}
              style={{ zIndex: openIndex === idx ? 100 : 1 }}
            >
              <GalleryImage src={card.img} alt={card.label} />
              <GalleryLabel>{card.label}</GalleryLabel>
            </GalleryItem>
          ))}
        </Gallery>
        <SquigglyBorderWrapper>
          <ContactCardContent
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, type: 'spring', stiffness: 80, delay: 0.3 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(164,117,81,0.18)' }}
            style={{ cursor: 'pointer' }}
            onClick={() => setContactOpen(true)}
          >
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Anagha Vaidya"
              style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 1px 8px rgba(0,0,0,0.10)' }}
            />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <span style={{fontWeight: 700, fontSize: '1.18rem', color: '#7a5a36', letterSpacing: '0.01em'}}>Anagha Vaidya</span>
              <span style={{fontSize: '1rem', color: '#a47551', marginBottom: 2}}>Architect</span>
              <div style={{display: 'flex', gap: '0.7rem', marginTop: 8}}>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{color: '#a47551', fontSize: '1.3rem', textDecoration: 'none'}} aria-label="Instagram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a47551" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{color: '#a47551', fontSize: '1.3rem', textDecoration: 'none'}} aria-label="Facebook">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a47551" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </ContactCardContent>
        </SquigglyBorderWrapper>
        <Philosophy
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.7 }}
        >
          "Architecture is the thoughtful making of space."<br />
          <span style={{fontSize:'1rem', color:'#a47551'}}>— Louis Kahn</span>
        </Philosophy>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 300
            }}
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 120 }}
              animate={{ scale: 1.1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 120 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
              style={{
                background: 'linear-gradient(90deg, #f5e9da 0%, #e2c9b0 100%)',
                borderRadius: '2rem',
                boxShadow: '0 16px 64px rgba(164,117,81,0.22)',
                width: 420,
                maxWidth: '96vw',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative',
                padding: '2.5rem 2rem 2rem 2rem',
              }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Anagha Vaidya"
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 1px 8px rgba(0,0,0,0.10)', marginBottom: 16 }}
              />
              <div style={{fontWeight: 700, fontSize: '1.3rem', color: '#7a5a36', marginBottom: 2}}>Anagha Vaidya</div>
              <div style={{fontSize: '1.05rem', color: '#a47551', marginBottom: 18}}>Architect</div>
              <form style={{width: '100%', display: 'flex', flexDirection: 'column', gap: 16}} onSubmit={e => {e.preventDefault(); setContactOpen(false);}}>
                <input type="text" placeholder="Your Name" required style={{padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e2c9b0', fontSize: '1rem', outline: 'none'}} />
                <input type="email" placeholder="Your Email" required style={{padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e2c9b0', fontSize: '1rem', outline: 'none'}} />
                <textarea placeholder="Message" required rows={4} style={{padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e2c9b0', fontSize: '1rem', outline: 'none', resize: 'vertical'}} />
                <button type="submit" style={{marginTop: 8, padding: '0.8rem 0', borderRadius: 8, border: 'none', background: '#a47551', color: '#fff', fontWeight: 700, fontSize: '1.08rem', cursor: 'pointer', transition: 'background 0.2s'}}>
                  Send Message
                </button>
              </form>
              <button
                onClick={() => setContactOpen(false)}
                style={{
                  position: 'absolute',
                  top: 18,
                  right: 24,
                  background: 'rgba(255,255,255,0.85)',
                  border: 'none',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  fontSize: 22,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                }}
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 200
            }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 120 }}
              animate={{ scale: 1.18, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 120 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
              style={{
                background: '#fff',
                borderRadius: '2.5rem',
                boxShadow: '0 16px 64px rgba(0,0,0,0.22)',
                width: 600,
                maxWidth: '96vw',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative',
                paddingBottom: 32
              }}
              onClick={e => e.stopPropagation()}
            >
              <img src={cards[openIndex].img} alt={cards[openIndex].label} style={{ width: '100%', height: 340, objectFit: 'cover' }} />
              <div style={{ padding: '2.2rem', width: '100%' }}>
                <h2 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 800 }}>{cards[openIndex].label}</h2>
                <p style={{ margin: '1.2rem 0 0 0', color: '#444', fontSize: '1.25rem', lineHeight: 1.6 }}>{cards[openIndex].description}</p>
              </div>
              <button
                onClick={() => setOpenIndex(null)}
                style={{
                  position: 'absolute',
                  top: 18,
                  right: 28,
                  background: 'rgba(255,255,255,0.85)',
                  border: 'none',
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  fontSize: 28,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                }}
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </Main>
    </Wrapper>
  );
}

export default App;