import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'motion/react';
import styles from './AnimatedStandCards.module.css';

interface AnimatedStandCardsProps {
  children: ReactNode[];
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const AnimatedStandCards: React.FC<AnimatedStandCardsProps> = ({
  children,
  blurAmount = 3,
  borderColor = '#7eff29',
  glowColor = 'rgba(126, 255, 41, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1.5,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]> = useRef([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prev) => (prev + 1) % children.length);
      },
      (animationDuration + pauseBetweenAnimations) * 1000
    );

    return () => clearInterval(interval);
  }, [animationDuration, pauseBetweenAnimations, children.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!cardRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = cardRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, children.length]);

  return (
    <div className={styles.focusContainer} ref={containerRef}>
      {children.map((child, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                cardRefs.current[index] = el;
              }
            }}
            className={styles.focusCard}
            style={
              {
                filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
                transition: `filter ${animationDuration}s ease`,
              } as React.CSSProperties
            }
          >
            {child}
          </div>
        );
      })}
      <motion.div
        className={styles.focusFrame}
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={
          {
            '--border-color': borderColor,
            '--glow-color': glowColor,
          } as React.CSSProperties
        }
      >
        <span className={`${styles.corner} ${styles.topLeft}`}></span>
        <span className={`${styles.corner} ${styles.topRight}`}></span>
        <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
        <span className={`${styles.corner} ${styles.bottomRight}`}></span>
      </motion.div>
    </div>
  );
};

