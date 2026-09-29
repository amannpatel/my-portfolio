import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

type Variant = 'ticket' | 'ai';

type Props = {
  variant: Variant;
  className?: string;
};

/** Themed SVG illustration used as the visual stage of a project card. */
export function ProjectArt({ variant, className }: Props) {
  if (variant === 'ticket') return <TicketArt className={className} />;
  return <AiArt className={className} />;
}

/* -------------------------------------------------------------------------- */
/*  BookMyShow-inspired ticket + seat map                                     */
/* -------------------------------------------------------------------------- */

function TicketArt({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const bookedSeats = ['C4', 'C5', 'E2', 'E3', 'E4', 'G6', 'G7'];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={cn('absolute inset-0 flex items-center justify-center p-6 md:p-8', className)}>
      <motion.div
        initial={{ opacity: 0, y: 12, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative w-full max-w-[320px]"
      >
        <svg
          viewBox="0 0 340 420"
          className="h-auto w-full drop-shadow-[0_25px_50px_rgba(15,23,42,0.35)]"
          aria-hidden
        >
          <defs>
            <linearGradient id="ticketBody" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.92" />
            </linearGradient>
            <linearGradient id="ticketBrand" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#7c5cff" />
              <stop offset="1" stopColor="#f472b6" />
            </linearGradient>
            <pattern id="perf" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="2.4" fill="#0a0d24" fillOpacity="0.18" />
            </pattern>
          </defs>

          {/* Ticket body with left notch cutouts */}
          <path
            d="M20 24 h300 a12 12 0 0 1 12 12 v50 a12 12 0 0 0 -12 12 v10 a12 12 0 0 1 12 12 v264 a12 12 0 0 1 -12 12 h-300 a12 12 0 0 1 -12 -12 v-264 a12 12 0 0 1 12 -12 v-10 a12 12 0 0 0 -12 -12 v-50 a12 12 0 0 1 12 -12 z"
            fill="url(#ticketBody)"
          />

          {/* Brand strip */}
          <rect x="20" y="24" width="300" height="46" rx="10" fill="url(#ticketBrand)" />
          <text
            x="36"
            y="53"
            fill="#ffffff"
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            fontWeight="700"
            fontSize="18"
            letterSpacing="4"
          >
            BOOK · MY · SHOW
          </text>
          <circle cx="300" cy="47" r="7" fill="#ffffff" fillOpacity="0.9" />
          <path
            d="M296 47 l3 3 l6 -6"
            stroke="#7c5cff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Perforation strip */}
          <rect x="20" y="96" width="300" height="12" fill="url(#perf)" />

          {/* Details row */}
          <g fontFamily="'JetBrains Mono', ui-monospace, monospace" fontSize="9" fill="#0a0d24" fillOpacity="0.55">
            <text x="30" y="130" letterSpacing="2">
              SCREEN
            </text>
            <text
              x="30"
              y="150"
              fontFamily="'Space Grotesk', system-ui, sans-serif"
              fontSize="20"
              fontWeight="700"
              fill="#0a0d24"
            >
              05
            </text>

            <text x="110" y="130" letterSpacing="2">
              SHOW
            </text>
            <text
              x="110"
              y="150"
              fontFamily="'Space Grotesk', system-ui, sans-serif"
              fontSize="20"
              fontWeight="700"
              fill="#0a0d24"
            >
              21:30
            </text>

            <text x="200" y="130" letterSpacing="2">
              SEATS
            </text>
            <text
              x="200"
              y="150"
              fontFamily="'Space Grotesk', system-ui, sans-serif"
              fontSize="20"
              fontWeight="700"
              fill="#0a0d24"
            >
              G6 · G7
            </text>
          </g>

          {/* Curved screen */}
          <path
            d="M50 190 Q 170 172 290 190"
            stroke="#7c5cff"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <text
            x="170"
            y="207"
            textAnchor="middle"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="8"
            fill="#0a0d24"
            fillOpacity="0.5"
            letterSpacing="3"
          >
            SCREEN
          </text>

          {/* Seat grid */}
          <g transform="translate(56 224)">
            {rows.map((r, ri) =>
              cols.map((c, ci) => {
                const id = `${r}${c}`;
                const isBooked = bookedSeats.includes(id);
                const cx = ci * 28;
                const cy = ri * 22;
                return (
                  <motion.rect
                    key={id}
                    x={cx}
                    y={cy}
                    width="20"
                    height="16"
                    rx="4"
                    fill={isBooked ? '#7c5cff' : '#0a0d24'}
                    fillOpacity={isBooked ? 0.95 : 0.09}
                    stroke={isBooked ? '#5c78ff' : 'none'}
                    strokeWidth={isBooked ? 1 : 0}
                    initial={reduce ? undefined : { opacity: 0, y: 4 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.4 + (ri * 8 + ci) * 0.015 }}
                  />
                );
              })
            )}
            {/* Row labels */}
            {rows.map((r, ri) => (
              <text
                key={r}
                x="-14"
                y={ri * 22 + 12}
                fontFamily="'JetBrains Mono', monospace"
                fontSize="9"
                fill="#0a0d24"
                fillOpacity="0.45"
              >
                {r}
              </text>
            ))}
          </g>

          {/* Live seat-lock pulse */}
          {!reduce && (
            <motion.circle
              cx="196"
              cy="358"
              r="5"
              fill="#f472b6"
              animate={{ opacity: [0.9, 0.2, 0.9], scale: [1, 1.9, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '196px 358px' }}
            />
          )}
        </svg>

        {/* Floating "book now" pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink-950 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-white shadow-lg"
        >
          Distributed seat lock
        </motion.div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  StrideCal — AI + EdTech knowledge graph                                   */
/* -------------------------------------------------------------------------- */

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  radius?: number;
  color?: string;
};

const aiNodes: Node[] = [
  { id: 'math', label: 'DSA', x: 60, y: 90, color: '#22d3ee' },
  { id: 'cs', label: 'System', x: 260, y: 70, color: '#7c5cff' },
  { id: 'oop', label: 'OOP', x: 40, y: 200, color: '#f472b6' },
  { id: 'net', label: 'Networks', x: 280, y: 180, color: '#22d3ee' },
  { id: 'ai', label: 'ML', x: 70, y: 300, color: '#f5b544' },
  { id: 'sec', label: 'Security', x: 260, y: 300, color: '#7c5cff' },
];

const centerX = 160;
const centerY = 195;

function AiArt({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={cn('absolute inset-0 flex items-center justify-center p-6 md:p-8', className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative w-full max-w-[340px]"
      >
        <svg
          viewBox="0 0 340 400"
          className="h-auto w-full"
          aria-hidden
        >
          <defs>
            <radialGradient id="core" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.7" />
            </radialGradient>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#7c5cff" />
            </linearGradient>
          </defs>

          {/* Connecting lines from nodes to core */}
          {aiNodes.map((n) => (
            <motion.line
              key={`l-${n.id}`}
              x1={n.x}
              y1={n.y}
              x2={centerX}
              y2={centerY}
              stroke="#ffffff"
              strokeOpacity="0.35"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
            />
          ))}

          {/* Traveling data pulses along links */}
          {!reduce &&
            aiNodes.map((n, i) => (
              <motion.circle
                key={`p-${n.id}`}
                r="3"
                fill={n.color}
                animate={{
                  cx: [n.x, centerX],
                  cy: [n.y, centerY],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.4,
                  delay: i * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}

          {/* Nodes */}
          {aiNodes.map((n, i) => (
            <motion.g
              key={n.id}
              initial={reduce ? undefined : { opacity: 0, scale: 0.6 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <circle
                cx={n.x}
                cy={n.y}
                r={n.radius ?? 22}
                fill="#ffffff"
                fillOpacity="0.14"
                stroke="#ffffff"
                strokeOpacity="0.4"
              />
              <circle cx={n.x} cy={n.y} r={5} fill={n.color} />
              <text
                x={n.x}
                y={n.y + 42}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize="9"
                fill="#ffffff"
                fillOpacity="0.85"
                letterSpacing="1.5"
              >
                {n.label.toUpperCase()}
              </text>
            </motion.g>
          ))}

          {/* Rotating orbits */}
          <motion.circle
            cx={centerX}
            cy={centerY}
            r="70"
            fill="none"
            stroke="url(#ring)"
            strokeOpacity="0.65"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
            style={{ transformOrigin: `${centerX}px ${centerY}px` }}
          />
          <motion.circle
            cx={centerX}
            cy={centerY}
            r="95"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.2"
            strokeWidth="1"
            strokeDasharray="2 6"
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 42, ease: 'linear', repeat: Infinity }}
            style={{ transformOrigin: `${centerX}px ${centerY}px` }}
          />

          {/* Central AI core */}
          <g>
            <circle
              cx={centerX}
              cy={centerY}
              r="48"
              fill="url(#core)"
              stroke="#7c5cff"
              strokeOpacity="0.35"
            />
            {/* Brain-ish arcs */}
            <path
              d="M136 190 Q 160 170 184 190 M136 200 Q 160 220 184 200"
              stroke="#7c5cff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M144 180 L144 210 M176 180 L176 210 M160 172 L160 218"
              stroke="#22d3ee"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <text
              x={centerX}
              y={centerY + 60}
              textAnchor="middle"
              fontFamily="'Space Grotesk', system-ui, sans-serif"
              fontSize="12"
              fontWeight="700"
              fill="#ffffff"
              letterSpacing="6"
            >
              STRIDECAL · AI
            </text>
          </g>

          {/* Learning curve */}
          <path
            d="M40 370 Q 100 340 160 335 T 300 300"
            stroke="#f5b544"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {!reduce && (
            <motion.circle
              r="4"
              fill="#f5b544"
              animate={{
                offsetDistance: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                offsetPath: `path("M40 370 Q 100 340 160 335 T 300 300")`,
              }}
            />
          )}

          {/* Sparkles */}
          {[
            { x: 300, y: 60 },
            { x: 40, y: 60 },
            { x: 320, y: 260 },
          ].map((s, i) => (
            <motion.g
              key={i}
              animate={reduce ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.2, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: `${s.x}px ${s.y}px` }}
            >
              <path
                d={`M${s.x} ${s.y - 6} L${s.x} ${s.y + 6} M${s.x - 6} ${s.y} L${s.x + 6} ${s.y}`}
                stroke="#ffffff"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </motion.g>
          ))}
        </svg>

        {/* Corner badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute -top-2 right-0 rounded-full bg-ink-950 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-white shadow-lg"
        >
          EdTech · OAuth2
        </motion.div>
      </motion.div>
    </div>
  );
}
