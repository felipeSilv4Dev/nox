import { motion } from 'framer-motion';

type SvgProps = {
  color: string;
  paths: { d: string; stroke?: string; strokeWidth?: number }[];
};

export default function DynamicSvg({ paths, color }: SvgProps) {
  return (
    <motion.svg
      className={'w-25'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 650 170"
      initial="hidden"
      animate="visible"
    >
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path.d}
          stroke={color || 'transparent'}
          strokeWidth={2}
          fill="transparent"
          variants={{
            hidden: { pathLength: 0, fill: 'rgba(55, 58, 73, 0)' },
            visible: {
              pathLength: 1,
              fill: color,
              stroke: 0,
              transition: {
                pathLength: {
                  duration: 4,
                },
                fill: {
                  duration: 4,
                  delay: 4,
                },
                stroke: {
                  duration: 4,
                  delay: 4,
                },
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
}
