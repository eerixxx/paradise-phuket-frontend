import React, { useMemo } from 'react';
import styles from './Vignette.module.css';

export interface VignetteProps {
  /**
   * Горизонтальный размер виньетки (0-1, где 0 = нет виньетки, 1 = максимальная виньетка)
   * @default 0.5
   */
  horizontal?: number;
  /**
   * Вертикальный размер виньетки (0-1, где 0 = нет виньетки, 1 = максимальная виньетка)
   * @default 0.5
   */
  vertical?: number;
  /**
   * Интенсивность блюра виньетки в пикселях
   * @default 0
   */
  blur?: number;
  /**
   * Цвет виньетки
   * @default 'rgba(0, 0, 0, 0.5)'
   */
  color?: string;
  /**
   * Интенсивность виньетки (0-1)
   * @default 0.5
   */
  intensity?: number;
}

const Vignette: React.FC<VignetteProps> = ({
  horizontal = 0.5,
  vertical = 0.5,
  blur = 0,
  color = 'rgba(0, 0, 0, 0.5)',
  intensity = 0.5,
}) => {
  // Нормализуем параметры
  const horizontalSize = Math.max(0, Math.min(1, horizontal));
  const verticalSize = Math.max(0, Math.min(1, vertical));
  
  // Преобразуем параметры в размеры эллипса для радиального градиента
  // Чем больше значение (0-1), тем больше размер эллипса и тем сильнее виньетка
  // Используем более широкий диапазон для лучшей видимости
  const horizontalRadius = 20 + horizontalSize * 80; // от 20% до 100%
  const verticalRadius = 20 + verticalSize * 80; // от 20% до 100%

  // Извлекаем RGB из цвета
  const colorMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  let r = 0, g = 0, b = 0, baseAlpha = intensity;
  
  if (colorMatch) {
    r = parseInt(colorMatch[1]);
    g = parseInt(colorMatch[2]);
    b = parseInt(colorMatch[3]);
    baseAlpha = colorMatch[4] ? parseFloat(colorMatch[4]) : 1;
  } else if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  }

  const finalAlpha = Math.min(1, baseAlpha * intensity);
  const vignetteColor = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;
  const transparentColor = `rgba(${r}, ${g}, ${b}, 0)`;

  // Вычисляем точку перехода от прозрачного к цветному
  // Чем больше параметры, тем раньше начинается виньетка (меньше прозрачная область)
  // Используем более агрессивный переход для лучшей видимости
  const avgSize = (horizontalSize + verticalSize) / 2;
  // Более ранний переход для большей видимости
  const transitionStart = Math.max(10, 80 - avgSize * 60);

  // Создаем градиент с более простым синтаксисом для лучшей совместимости
  // Используем более простой синтаксис радиального градиента
  const gradientString = useMemo(() => {
    return `radial-gradient(ellipse ${horizontalRadius}% ${verticalRadius}% at center, ${transparentColor} 0%, ${transparentColor} ${transitionStart}%, ${vignetteColor} 100%)`;
  }, [horizontalRadius, verticalRadius, transparentColor, transitionStart, vignetteColor]);

  const vignetteStyle: React.CSSProperties = useMemo(() => ({
    background: gradientString,
    backdropFilter: blur > 0 ? `blur(${blur}px)` : 'none',
    WebkitBackdropFilter: blur > 0 ? `blur(${blur}px)` : 'none',
  }), [gradientString, blur]);

  return (
    <div 
      className={styles.vignette} 
      style={vignetteStyle} 
      aria-hidden="true"
    />
  );
};

export default Vignette;

