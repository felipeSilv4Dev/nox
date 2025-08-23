import { motion } from 'framer-motion';

type SvgProps = {
  color: string;
  paths: { d: string; stroke?: string; strokeWidth?: number }[];
};

export default function DynamicSvg({ paths, color }: SvgProps) {
  return (
    <motion.svg
      className={'z-1 h-[32vw] w-[32vw]'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 680"
      initial="hidden"
      animate="visible"
    >
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path.d}
          stroke={path.stroke || 'transparent'}
          strokeWidth={1}
          fill="transparent"
          variants={{
            hidden: { pathLength: 0, fill: 'rgba(55, 58, 73, 0)' },
            visible: {
              pathLength: 1,
              fill: color,
              stroke: 0,
              transition: {
                pathLength: {
                  duration: (i + 1) * 2,
                },
                fill: {
                  duration: 1,
                  delay: (i + 1) * 2,
                },
                stroke: {
                  duration: 1,
                  delay: (i + 1) * 2,
                },
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
}
