import { motion, type Variants } from 'framer-motion';

type SvgProps = {
  paths: { d: string; stroke?: string; strokeWidth?: number }[];
};

export default function DynamicSvg({ paths }: SvgProps) {
  const variantsConfig = {
    hidden: { pathLength: 0, fill: 'rgba(255,255,255,0)' },
    visible: {
      pathLength: 1,
      fill: '#F7F9FF',
      stroke: 0,
      transition: {
        pathLength: { duration: 2, ease: 'easeInOut' },
        fill: { duration: 1, delay: 2 },
        stroke: { duration: 1, delay: 2 },
      },
    },
  };
  return (
    <motion.svg
      className={'view- z-1 h-[24px] w-[94px]'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="240 0 200 240"
      initial="hidden"
      animate="visible"
    >
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path.d}
          stroke={path.stroke || 'transparent'}
          strokeWidth={16}
          fill="transparent"
          variants={variantsConfig as Variants}
        />
      ))}
    </motion.svg>
  );
}
