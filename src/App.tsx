import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #111;
`;

const Navbar = styled.nav`
  width: 100%;
  padding: 2rem 3vw 1.5rem 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

const Logo = styled(motion.div)`
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  font-family: 'Inter', 'SF Pro Display', sans-serif;
`;

const Menu = styled.div`
  display: flex;
  gap: 2.5rem;
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
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  }
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

const ContactSection = styled(motion.section)`
  width: 100%;
  background: #f7f7f7;
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

const ContactInfo = styled.div`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

function App() {
  return (
    <Wrapper>
      <Navbar>
        <Logo {...fadeInUp} transition={{ duration: 1.2 }}>ScioScape</Logo>
        <Menu>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </Menu>
      </Navbar>
      <Main>
        <Title {...fadeInUp} transition={{ duration: 1.1 }}>Architecture & Design Studio</Title>
        <Subtitle {...fadeInUp} transition={{ duration: 1.3 }}>
          Creating inspiring spaces for modern living and working.<br />
          Minimal. Sustainable. Timeless.
        </Subtitle>
        <Gallery>
          <GalleryItem {...fadeInUp} transition={{ duration: 1.2, delay: 0.2 }}>
            <GalleryImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Modern Home" />
            <GalleryLabel>Modern Home</GalleryLabel>
          </GalleryItem>
          <GalleryItem {...fadeInUp} transition={{ duration: 1.2, delay: 0.4 }}>
            <GalleryImage src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Office Space" />
            <GalleryLabel>Office Space</GalleryLabel>
          </GalleryItem>
          <GalleryItem {...fadeInUp} transition={{ duration: 1.2, delay: 0.6 }}>
            <GalleryImage src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=600&q=80" alt="Cultural Center" />
            <GalleryLabel>Cultural Center</GalleryLabel>
          </GalleryItem>
        </Gallery>
      </Main>
      <ContactSection id="contact" {...fadeInUp} transition={{ duration: 1.2, delay: 0.8 }}>
        <ContactTitle>Contact</ContactTitle>
        <ContactInfo>Email: <a href="mailto:info@scioscape.com">info@scioscape.com</a></ContactInfo>
        <ContactInfo>LinkedIn: <a href="https://www.linkedin.com/in/anagha-vaidya-767a5077/" target="_blank" rel="noopener noreferrer">Anagha Vaidya</a></ContactInfo>
        <ContactInfo>Location: Indore, India</ContactInfo>
      </ContactSection>
    </Wrapper>
  );
}

export default App;