import { MouseEventHandler, PropsWithChildren, useCallback, useRef, useState } from 'react';
import { hwStyles } from './styles.css';

const initialState = {
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  shine: 5,
  isHovered: false,
  angle: 0,
};

type Props = PropsWithChildren<{
  width: number;
  height: number;
  rotation?: number;
  scale?: number;
  borderRadius?: number;
  shadow?: number;
}>;

export const HoverWrap = ({ height, width, rotation = 5, scale = 1, borderRadius = 0, shadow = 5, children }: Props) => {
  const [move, setState] = useState(initialState);
  const wRef = useRef<HTMLDivElement>(null);

  const shadowPositionModifier = move.rotateX + (shadow * shadow) / 2;
  const shadowBlurModifier = 20 + shadow * shadow;
  const opacityModifier = move.isHovered ? 1 : 0;
  const lightingShineModifier = move.shine * 0.1;

  const handleParallaxBegin = useCallback(() => {
    setState(v => ({
      ...v,
      isHovered: true,
    }));
  }, []);
  const handleParallaxEnd = useCallback(() => {
    setState(initialState);
  }, []);

  const handleParallaxMove: MouseEventHandler<HTMLDivElement> = useCallback(({ pageX, pageY }) => {
    const { scrollY: scrollTop, scrollX: scrollLeft } = window;

    const bounds = wRef.current!.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;

    const widthMultiplier = 360 / width;
    const offsetX = (pageX - bounds.left - scrollLeft) / width;
    const offsetY = (pageY - bounds.top - scrollTop) / height;
    const deltaX = pageX - bounds.left - scrollLeft - centerX;
    const deltaY = pageY - bounds.top - scrollTop - centerY;

    const rotateX = (deltaY - offsetY) * ((rotation / 100) * widthMultiplier);
    const rotateY = (offsetX - deltaX) * ((rotation / 100) * widthMultiplier);

    const angleRad = Math.atan2(deltaY, deltaX);
    const angleRaw = (angleRad * 180) / Math.PI - 90;
    const angle = angleRaw < 0 ? angleRaw + 360 : angleRaw;

    setState(v => ({
      ...v,
      angle,
      rotateX,
      rotateY,
      scale,
    }));
  }, []);

  const buildTransitionTimingString = useCallback((depth = 0) => {
    const START_SPEED = 160;
    const MAX_SPEED = 260;
    const DEPTH_MODIFIER = 15;
    let speedModifier;

    if (depth > 0) {
      speedModifier = START_SPEED + depth * DEPTH_MODIFIER;
    } else if (depth > 10) {
      speedModifier = MAX_SPEED;
    }

    return { transition: `all ${speedModifier}ms ease-out` };
  }, []);

  const buildTransformStrings = useCallback(
    (depth = 0) => {
      const { isHovered, rotateX, rotateY, scale } = move;

      const scaleModifier = isHovered ? 1 + scale / 100 : 1;
      const rotationXModifier = Math.floor(rotateX / depth);
      const rotationYModifier = Math.floor(rotateY / depth);

      const transformString = `scale(${scaleModifier}) rotateX(${rotationXModifier}deg) rotateY(${rotationYModifier}deg)`;

      return {
        WebkitTransform: transformString,
        MozTransform: transformString,
        MsTransform: transformString,
        OTransform: transformString,
        transform: transformString,
      };
    },
    [move.scale, move.isHovered, move.rotateX, move.rotateY],
  );

  const innerContainerStyles = {
    ...buildTransformStrings(1),
    ...buildTransitionTimingString(1),
  };

  const shadowStyles = {
    ...buildTransitionTimingString(2),
    borderRadius: `${borderRadius}px`,
    opacity: opacityModifier,
    boxShadow: `
      0px ${shadowPositionModifier}px ${shadowBlurModifier}px rgba(0, 0, 0, 0.5),
      0px ${shadowPositionModifier * 0.33}px ${shadowBlurModifier * 0.33}px 5px rgba(0, 0, 0, 0.5)`,
  };

  const renderLayers = useCallback(() => {
    const style = (depth: number) => ({
      height: `${height}px`,
      width: `${width}px`,
      borderRadius: `${borderRadius}px`,
      ...buildTransitionTimingString(depth),
    });

    if (!Array.isArray(children)) {
      return (
        <div style={style(1)} className={hwStyles.layer}>
          {children}
        </div>
      );
    }

    return children.map((layer, i) => {
      return (
        <div style={style(i + 2)} className={hwStyles.layer} key={i}>
          {layer}
        </div>
      );
    });
  }, []);

  const lightingStyles = {
    ...buildTransitionTimingString(2),
    borderRadius: borderRadius + 'px',
    opacity: opacityModifier,
    backgroundImage: `linear-gradient(${move.angle}deg, rgba(255,255,255, ${lightingShineModifier}) 0%, rgba(255,255,255,0) 80%)`,
  };

  return (
    <div
      className={hwStyles.wrapper}
      onMouseEnter={handleParallaxBegin}
      onMouseLeave={handleParallaxEnd}
      onMouseMove={handleParallaxMove}
      onTouchStart={handleParallaxBegin}
      onTouchMove={handleParallaxEnd}
      onTouchEnd={handleParallaxMove as any}
      ref={wRef}
      style={{
        width,
        height,
      }}
    >
      <div className={hwStyles.container} style={innerContainerStyles}>
        <div className={hwStyles.shadow} style={shadowStyles} />
        {renderLayers()}
        <div className={hwStyles.light} style={lightingStyles} />
      </div>
    </div>
  );
};
