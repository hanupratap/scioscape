import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import "@fontsource-variable/urbanist";
import "@fontsource-variable/eb-garamond";
import { keyframes } from "@emotion/react";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("i1ncop8"); // Your public key

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
  hover: {
    y: -10,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05),
                0 0 0 0 rgba(26, 26, 26, 0.1);
  }
  50% {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08),
                0 0 20px 2px rgba(26, 26, 26, 0.15);
  }
  100% {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05),
                0 0 0 0 rgba(26, 26, 26, 0.1);
  }
`;

const highlightRun = keyframes`
  0% { background-position: 100% 0; }
  100% { background-position: 0% 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const RunningFadingTitle = styled(motion.h1)`
  font-family: "EB Garamond Variable", serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 300;
  letter-spacing: 0.02em;
  color: #1a1a1a;
  line-height: 1.2;
  text-align: center;
  margin-bottom: clamp(2rem, 3vw, 3rem);
  text-transform: none;
  background: linear-gradient(90deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%);
  background-size: 200% 100%;
  background-position: 0% 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: ${highlightRun} 10s linear infinite;
  word-spacing: 0.25em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto clamp(2rem, 3vw, 3rem) auto;
  position: relative;
  padding: 0 1rem;

  &::before {
    content: '';
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(26, 26, 26, 0.2) 20%,
      rgba(26, 26, 26, 0.2) 80%,
      transparent 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(26, 26, 26, 0.2) 20%,
      rgba(26, 26, 26, 0.2) 80%,
      transparent 100%
    );
  }

  span {
    display: block;
    font-size: 0.4em;
    font-family: "Urbanist Variable", sans-serif;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 1rem;
    opacity: 0.7;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  color: #1a1a1a;
  font-family: "Urbanist Variable", "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: 
      radial-gradient(circle at 20% 20%, rgba(26, 26, 26, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(26, 26, 26, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`;

const Navbar = styled.nav`
  width: 100%;
  padding: 2.5rem 3vw 1.5rem 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  box-shadow: none;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

const Logo = styled(motion.div)`
  font-family: "Urbanist Variable", sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #1a1a1a;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(26, 26, 26, 0.1);
    transform: scale(1.1);
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    letter-spacing: 0.15em;
    
    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 6vw, 6rem) clamp(1rem, 2vw, 2rem);
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 3vw, 4rem);
  justify-content: center;
  margin-bottom: 6vw;
  max-width: 1400px;
  width: 100%;
  will-change: transform, opacity;
  animation: ${fadeIn} 0.8s ease-out forwards;
  padding: 0 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 600px));
  }
`;

const CardTitle = styled(motion.div)`
  font-family: "Urbanist Variable", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #ffffff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 1.5rem;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.8) 0%,
    rgba(0,0,0,0.4) 50%,
    rgba(0,0,0,0) 100%
  );
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const GalleryItem = styled(motion.div)`
  width: 100%;
  height: auto;
  min-height: 500px;
  background: #ffffff;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
  animation: ${shadowAnimation} 4s ease-in-out infinite;
  border: 1px solid rgba(26, 26, 26, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.2) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(26, 26, 26, 0.1) 0%,
      transparent 50%,
      rgba(26, 26, 26, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  &:hover {
    animation: none;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1),
                0 0 20px 2px rgba(26, 26, 26, 0.15);
    transform: translateY(-10px);
    
    &::before, &::after {
      opacity: 1;
    }

    ${CardTitle} {
      transform: translateY(0);
      opacity: 1;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #f5f5f5;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;

const CardDescription = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 3;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  h3 {
    font-family: "EB Garamond Variable", serif;
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 1rem;
    transform: translateY(20px);
    transition: transform 0.4s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 40px;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      transition: width 0.4s ease;
    }
  }

  p {
    font-family: "Urbanist Variable", sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    transform: translateY(20px);
    transition: transform 0.4s ease 0.1s;
  }

  ${GalleryItem}:hover & {
    opacity: 1;

    h3, p {
      transform: translateY(0);
    }

    h3::after {
      width: 60px;
    }
  }
`;

const ContactCardContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: #ffffff;
  border-radius: 0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(2px);
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(26, 26, 26, 0.05);
  animation: ${shadowAnimation} 4s ease-in-out infinite;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px) 0 0 / 20px 20px,
      linear-gradient(0deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px) 0 0 / 20px 20px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    animation: none;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1),
                0 0 20px 2px rgba(26, 26, 26, 0.15);
    
    &::before {
      opacity: 1;
    }
  }

  @media (min-width: 480px) {
    flex-direction: row;
    text-align: left;
    padding: 2.5rem;
    gap: 2rem;
  }
`;

const Philosophy = styled(motion.div)`
  text-align: center;
  font-size: 1.25rem;
  color: #1a1a1a;
  margin: 3rem 0 0 0;
  font-family: "EB Garamond Variable", serif;
  font-weight: 300;
  letter-spacing: 0.02em;
  opacity: 0.8;
  max-width: 800px;
  line-height: 1.6;
`;

const BlueprintOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px) 0 0 / 20px 20px,
    linear-gradient(0deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px) 0 0 / 20px 20px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const ContactPopup = styled(motion.div)`
  background: #ffffff;
  border-radius: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 800px;
  max-width: 96vw;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(26, 26, 26, 0.1) 20%,
      rgba(26, 26, 26, 0.1) 80%,
      transparent 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(26, 26, 26, 0.1) 20%,
      rgba(26, 26, 26, 0.1) 80%,
      transparent 100%
    );
  }
`;

const ContactHeader = styled.div`
  padding: 2rem 4rem 2rem 2rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid rgba(26, 26, 26, 0.1);
  background: linear-gradient(to right, rgba(26, 26, 26, 0.02), transparent);
`;

const ContactContent = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  overflow-y: auto;
  max-height: calc(92vh - 200px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(26, 26, 26, 0.1);
  background: rgba(26, 26, 26, 0.02);
  font-family: "Urbanist Variable", sans-serif;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: rgba(26, 26, 26, 0.2);
    background: #ffffff;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(26, 26, 26, 0.1);
  background: rgba(26, 26, 26, 0.02);
  font-family: "Urbanist Variable", sans-serif;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    border-color: rgba(26, 26, 26, 0.2);
    background: #ffffff;
  }
`;

const FormStatus = styled(motion.div)`
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  font-family: "Urbanist Variable", sans-serif;
  font-size: 0.9rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.success {
    background: rgba(46, 160, 67, 0.1);
    color: #2ea043;
  }

  &.error {
    background: rgba(218, 54, 51, 0.1);
    color: #da3633;
  }
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  border: none;
  background: #1a1a1a;
  color: #ffffff;
  font-family: "Urbanist Variable", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  overflow: hidden;

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:disabled::after {
    opacity: 1;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const PopupImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.1);
  flex-shrink: 0;
  width: 300px;
`;

const PopupTitle = styled.h2`
  font-family: "EB Garamond Variable", serif;
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0;
  color: #1a1a1a;
  position: relative;
  display: inline-block;
  max-width: calc(100% - 6rem);
  word-wrap: break-word;
  line-height: 1.2;
  flex: 1;
  min-width: 200px;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 60px;
    height: 1px;
    background: rgba(26, 26, 26, 0.2);
  }
`;

const SpecItem = styled.div`
  padding: 1rem;
  background: rgba(26, 26, 26, 0.02);
  border: 1px solid rgba(26, 26, 26, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  span:first-child {
    font-size: 0.9rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  span:last-child {
    font-size: 1.1rem;
    color: #1a1a1a;
    font-weight: 300;
  }
`;

const PopupCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 800px;
  max-width: 96vw;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(26, 26, 26, 0.1) 20%,
      rgba(26, 26, 26, 0.1) 80%,
      transparent 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(26, 26, 26, 0.1) 20%,
      rgba(26, 26, 26, 0.1) 80%,
      transparent 100%
    );
  }
`;

const PopupHeader = styled.div`
  padding: 2rem 4rem 2rem 2rem;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  border-bottom: 1px solid rgba(26, 26, 26, 0.1);
  background: linear-gradient(to right, rgba(26, 26, 26, 0.02), transparent);
  flex-wrap: wrap;
`;

const PopupContent = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  overflow-y: auto;
  max-height: calc(92vh - 200px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PopupDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PopupDescription = styled.p`
  font-family: "Urbanist Variable", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0;
`;

const PopupSpecs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

function App() {
  console.log('App component rendering');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cards = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      label: "Residential Design",
      description:
        "Minimalist living spaces that harmonize with nature, featuring clean lines and sustainable materials.",
    },
    {
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      label: "Commercial Architecture",
      description:
        "Innovative workspaces that inspire creativity and productivity through thoughtful design and natural elements.",
    },
  ];

  return (
    <Wrapper>
      <Navbar>
        <Logo
          initial={{ opacity: 0, scale: 0.7, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.1,
            type: "spring",
            stiffness: 120,
            damping: 18,
          }}
        >
          SCIOSCAPE
        </Logo>
      </Navbar>
      <Main>
        <RunningFadingTitle
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto 3rem auto",
            display: "block",
          }}
        >
          Crafting Spaces
          <span>That Inspire</span>
        </RunningFadingTitle>
        <Gallery>
          {cards.map((card, index) => (
            <GalleryItem
              key={card.label}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 180,
                damping: 24,
                delay: index * 0.1,
              }}
              onClick={() => setOpenIndex(index)}
              style={{ zIndex: openIndex === index ? 100 : 1 }}
            >
              <GalleryImage src={card.img} alt={card.label} />
              <CardTitle>{card.label}</CardTitle>
              <CardDescription>
                <h3>{card.label}</h3>
                <p>{card.description}</p>
              </CardDescription>
            </GalleryItem>
          ))}
        </Gallery>
        <ContactCardContent
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            type: "spring",
            stiffness: 80,
            delay: 0.3,
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          }}
          style={{ cursor: "pointer" }}
          onClick={() => setContactOpen(true)}
        >
          <img
            src="https://randomuser.me/api/portraits/women/61.jpg"
            alt="Anagha Vaidya"
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 1px 8px rgba(0,0,0,0.10)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontWeight: 300,
                fontSize: "1.2rem",
                color: "#1a1a1a",
                letterSpacing: "0.05em",
              }}
            >
              Anagha Vaidya
            </span>
            <span
              style={{ 
                fontSize: "0.9rem", 
                color: "#4a4a4a", 
                marginBottom: 2,
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}
            >
              Principal Architect
            </span>
          </div>
        </ContactCardContent>
        <Philosophy
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.7 }}
        >
          "The sun never knew how great it was until it hit the side of a
          building."
          <br />
        </Philosophy>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 300,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
            onClick={() => setContactOpen(false)}
          >
            <ContactPopup
              initial={{ scale: 0.92, opacity: 0, y: 64 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 64 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 24,
                duration: 0.5,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <BlueprintOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <ContactHeader>
                <PopupImage
                  src="https://randomuser.me/api/portraits/women/61.jpg"
                  alt="Anagha Vaidya"
                  style={{ width: 120, height: 120, borderRadius: '50%' }}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <div>
                  <PopupTitle>Anagha Vaidya</PopupTitle>
                  <span style={{ 
                    fontSize: "1.1rem", 
                    color: "#666",
                    display: "block",
                    marginTop: "0.5rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase"
                  }}>
                    Principal Architect
                  </span>
                </div>
              </ContactHeader>
              <ContactContent>
                <ContactForm
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setFormStatus({ type: null, message: '' });

                    try {
                      const form = e.currentTarget;
                      const formData = new FormData(form);
                      const name = formData.get("name");
                      const email = formData.get("email");
                      const message = formData.get("message");

                      await emailjs.send(
                        'service_i1ncop8', // Your EmailJS service ID
                        'template_hanu', // Your EmailJS template ID
                        {
                          to_email: 'hanupratap1999@gmail.com',
                          from_name: name,
                          from_email: email,
                          message: message,
                          reply_to: email,
                        },
                        'i1ncop8' // Your EmailJS public key
                      );

                      setFormStatus({
                        type: 'success',
                        message: 'Thank you for your message. We will get back to you soon.'
                      });
                      form.reset();
                    } catch (error) {
                      console.error('Error sending email:', error);
                      setFormStatus({
                        type: 'error',
                        message: 'Sorry, there was an error sending your message. Please try again or email us directly at hanupratap1999@gmail.com'
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <FormInput
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                  <FormInput
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    disabled={isSubmitting}
                  />
                  <FormTextarea
                    name="message"
                    placeholder="Message"
                    required
                    disabled={isSubmitting}
                  />
                  <SubmitButton 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </SubmitButton>
                  {formStatus.type && (
                    <FormStatus
                      className={formStatus.type}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {formStatus.message}
                    </FormStatus>
                  )}
                </ContactForm>
                <div style={{ padding: "1rem" }}>
                  <SpecItem>
                    <span>Experience</span>
                    <span>15+ Years</span>
                  </SpecItem>
                  <SpecItem>
                    <span>Specialization</span>
                    <span>Sustainable Design</span>
                  </SpecItem>
                  <SpecItem>
                    <span>Location</span>
                    <span>San Francisco, CA</span>
                  </SpecItem>
                  <SpecItem>
                    <span>Languages</span>
                    <span>English, Hindi, Marathi</span>
                  </SpecItem>
                </div>
              </ContactContent>
              <button
                onClick={() => setContactOpen(false)}
                style={{
                  position: "absolute",
                  top: 18,
                  right: 28,
                  background: "rgba(255,255,255,0.85)",
                  border: "none",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  fontSize: 28,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                aria-label="Close"
              >
                ×
              </button>
            </ContactPopup>
          </motion.div>
        )}
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 200,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
            onClick={() => setOpenIndex(null)}
          >
            <PopupCard
              initial={{ scale: 0.92, opacity: 0, y: 64 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 64 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 24,
                duration: 0.5,
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <BlueprintOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <PopupHeader>
                <PopupImage
                  src={cards[openIndex].img}
                  alt={cards[openIndex].label}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <PopupTitle>{cards[openIndex].label}</PopupTitle>
              </PopupHeader>
              <PopupContent>
                <PopupDetails>
                  <PopupDescription>{cards[openIndex].description}</PopupDescription>
                  <PopupSpecs>
                    <SpecItem>
                      <span>Project Type</span>
                      <span>{cards[openIndex].label}</span>
                    </SpecItem>
                    <SpecItem>
                      <span>Status</span>
                      <span>Completed</span>
                    </SpecItem>
                    <SpecItem>
                      <span>Location</span>
                      <span>San Francisco, CA</span>
                    </SpecItem>
                    <SpecItem>
                      <span>Year</span>
                      <span>2024</span>
                    </SpecItem>
                  </PopupSpecs>
                </PopupDetails>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <PopupImage
                    src={cards[openIndex].img}
                    alt={`${cards[openIndex].label} detail`}
                    style={{ height: '100%' }}
                  />
                </motion.div>
              </PopupContent>
              <button
                onClick={() => setOpenIndex(null)}
                style={{
                  position: "absolute",
                  top: 18,
                  right: 28,
                  background: "rgba(255,255,255,0.85)",
                  border: "none",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  fontSize: 28,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                aria-label="Close"
              >
                ×
              </button>
            </PopupCard>
          </motion.div>
        )}
      </Main>
    </Wrapper>
  );
}

export default App;
