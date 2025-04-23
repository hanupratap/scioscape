import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import '@fontsource-variable/urbanist';
import '@fontsource-variable/eb-garamond';
import { keyframes } from '@emotion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }
};

const zoomVariants = {
  initial: { scale: 0.96, opacity: 0, y: 32 },
  animate: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 24, duration: 0.5 } },
  hover: { scale: 1.03 }
};

const runningTitle = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const highlightRun = keyframes`
  0% { background-position: 100% 0; }
  100% { background-position: 0% 0; }
`;

const fadeRun = keyframes`
  0% { opacity: 0.2; }
  10% { opacity: 0.5; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  90% { opacity: 0.5; }
  100% { opacity: 0.2; }
`;

const RunningFadingTitle = styled(motion.h1)`
  font-family: 'EB Garamond Variable', serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 400;
  letter-spacing: -0.01em;
  color: #7a5a36;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(90deg, #e2c9b0 0%, #7a5a36 50%, #e2c9b0 100%);
  background-size: 200% 100%;
  background-position: 0% 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: backgroundMove 10s linear infinite;

  @keyframes backgroundMove {
    0% { background-position: 0% 0; }
    100% { background-position: 100% 0; }
  }
`;

const AnimatedTitle = styled(motion.h1)`
  font-family: 'EB Garamond Variable', serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 400;
  letter-spacing: -0.01em;
  color: #7a5a36;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(90deg, #7a5a36 60%, #e2c9b0 100%);
  background-size: 200% 100%;
  background-position: 100% 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const HighlightedSubtitle = styled.div`
  display: inline-block;
  font-family: 'Urbanist Variable', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.35rem;
  font-weight: 400;
  color: #a47551;
  letter-spacing: 0.01em;
  opacity: 0.92;
  background: linear-gradient(90deg, #e2c9b0 0%, #a47551 50%, #e2c9b0 100%);
  background-size: 200% 100%;
  background-position: 100% 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: ${highlightRun} 3.5s cubic-bezier(0.4,0,0.2,1) infinite alternate;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff url('data:image/svg+xml;utf8,<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="30" height="30" rx="10" fill="%23f5e9da" fill-opacity="0.18"/><circle cx="90" cy="25" r="12" fill="%23e2c9b0" fill-opacity="0.13"/><circle cx="30" cy="100" r="10" fill="%23e2c9b0" fill-opacity="0.10"/><rect x="5" y="80" width="18" height="18" rx="6" fill="%23e2c9b0" fill-opacity="0.15"/><rect x="80" y="80" width="22" height="22" rx="7" fill="%23e2c9b0" fill-opacity="0.12"/></svg>') repeat;
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
  font-family: 'EB Garamond Variable', serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 400;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.1;
  color: #7a5a36;
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
  will-change: transform, opacity;
`;

const GalleryItem = styled(motion.div)`
  width: 400px;
  height: 520px;
  background: #f9f6f2;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(122, 90, 54, 0.07);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1.5px solid #e2c9b0;
  transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
  will-change: transform, opacity;
  &:hover {
    box-shadow: 0 8px 32px rgba(122, 90, 54, 0.13);
    border-color: #d1b08a;
    transform: translateY(-4px) scale(1.025);
  }
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  background: #e2c9b0;
  display: block;
`;

const GalleryLabel = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.2rem;
  background: #fff;
  color: #7a5a36;
  font-size: 1.13rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  border-radius: 0 0 1.5rem 1.5rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 -2px 12px rgba(122, 90, 54, 0.04);
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
      img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      label: 'Residential Home',
      description: 'A modern home designed with sustainable materials and open spaces, blending nature and architecture.'
    },
    {
      img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      label: 'Commercial Space',
      description: 'A collaborative office space that inspires creativity and productivity with natural light and flexible layouts.'
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
        <RunningFadingTitle>
          Where Ideas become Experiences
        </RunningFadingTitle>
        <div style={{
          width: '100%',
          maxWidth: 900,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 400px)',
          justifyContent: 'center',
          gap: '2.5vw',
          marginBottom: '2.2rem',
        }}>
          <HighlightedSubtitle style={{textAlign: 'center', width: '400px', margin: 0}}>
            Contemporary Residential Homes
          </HighlightedSubtitle>
          <HighlightedSubtitle style={{textAlign: 'center', width: '400px', margin: 0}}>
            Commercial office space with spacious interiors
          </HighlightedSubtitle>
        </div>
        <Gallery style={{width: '100%', maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 400px)', justifyContent: 'center', gap: '2.5vw'}}>
          {cards.map((card, idx) => (
            <GalleryItem
              variants={zoomVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ duration: 0.5, type: 'spring', stiffness: 180, damping: 24, delay: idx * 0.1 }}
              onClick={() => setOpenIndex(idx)}
              style={{ zIndex: openIndex === idx ? 100 : 1 }}
              key={card.label}
            >
              <GalleryImage src={card.img} alt={card.label} />
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
          "The sun never knew how great it was until it hit the side of a building."<br />
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
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="Anagha Vaidya"
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 1px 8px rgba(0,0,0,0.10)', marginBottom: 16 }}
              />
              <div style={{fontWeight: 700, fontSize: '1.3rem', color: '#7a5a36', marginBottom: 2}}>Anagha Vaidya</div>
              <div style={{fontSize: '1.05rem', color: '#a47551', marginBottom: 18}}>Architect</div>
              <form style={{width: '100%', display: 'flex', flexDirection: 'column', gap: 16}} onSubmit={async e => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                // Send to Formspree (or similar service) for contact@scioscape.com
                await fetch('https://formspree.io/f/xqkrqjzv', {
                  method: 'POST',
                  headers: { 'Accept': 'application/json' },
                  body: new URLSearchParams({
                    name: name as string,
                    email: email as string,
                    message: message as string,
                    _replyto: email as string,
                    _subject: 'New message from ScioScape website',
                  })
                });
                setContactOpen(false);
              }}>
                <input name="name" type="text" placeholder="Your Name" required style={{padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e2c9b0', fontSize: '1rem', outline: 'none'}} />
                <input name="email" type="email" placeholder="Your Email" required style={{padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e2c9b0', fontSize: '1rem', outline: 'none'}} />
                <textarea name="message" placeholder="Message" required rows={4} style={{padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e2c9b0', fontSize: '1rem', outline: 'none', resize: 'vertical'}} />
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
              initial={{ scale: 0.92, opacity: 0, y: 64 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 64 }}
              transition={{ type: 'spring', stiffness: 180, damping: 24, duration: 0.5 }}
              style={{
                background: '#fff',
                borderRadius: '2.5rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                width: 600,
                maxWidth: '96vw',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative',
                paddingBottom: 32,
                willChange: 'transform, opacity',
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