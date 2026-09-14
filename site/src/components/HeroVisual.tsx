import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const examples = [
  { input: 'factorise(123456789)', factors: '3² · 3607 · 3803' },
  { input: 'factorise(10**18 + 9)', factors: '7² · 11 · 13 · 19 · 52579 · 99991' },
  { input: 'is_prime(2**61 - 1)', factors: 'True' },
];

export default function HeroVisual() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState(examples[0].input);
  const [showFactors, setShowFactors] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const ex = examples[step];
    let i = 0;
    setTyped('');
    setShowFactors(false);

    const type = () => {
      if (cancelled) return;
      if (i <= ex.input.length) {
        setTyped(ex.input.slice(0, i));
        i++;
        setTimeout(type, 28);
      } else {
        setTimeout(() => {
          if (!cancelled) setShowFactors(true);
          setTimeout(() => {
            if (!cancelled) setStep((s) => (s + 1) % examples.length);
          }, 3000);
        }, 380);
      }
    };
    const t = setTimeout(type, 600);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [step]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-950/80 shadow-card backdrop-blur-xl">
        {/* Soft inner highlight */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
          </div>
          <div className="flex items-center gap-2 rounded-md bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-ink-400">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 17l6-6-6-6M12 19h8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            factorise.py
          </div>
          <div className="flex items-center gap-1.5">
            <span className="hidden text-[11px] font-mono text-ink-500 sm:inline">deterministic · v0.7.0</span>
          </div>
        </div>

        {/* Code area */}
        <div className="relative grid gap-0 md:grid-cols-[1fr_280px]">
          <div className="px-6 py-7 sm:px-8 sm:py-9">
            <pre className="overflow-hidden font-mono text-[13px] leading-[1.85] sm:text-[14px]">
              <code className="block">
                <span className="select-none text-ink-600">1  </span>
                <span className="text-[#c084fc]">from</span>
                <span className="text-ink-100"> factorise </span>
                <span className="text-[#c084fc]">import</span>
                <span className="text-ink-100"> factorise, is_prime</span>
                {'\n'}
                <span className="select-none text-ink-600">2  </span>
                {'\n'}
                <span className="select-none text-ink-600">3  </span>
                <span className="text-ink-500">›</span>{' '}
                <span className="text-ink-100">{typed}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block h-[1.1em] w-[7px] -mb-0.5 bg-accent-400"
                />
              </code>
            </pre>

            <motion.div
              initial={false}
              animate={{
                opacity: showFactors ? 1 : 0,
                y: showFactors ? 0 : 8,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 font-mono text-[13px] leading-[1.85] sm:text-[14px]"
            >
              <code>
                <span className="select-none text-ink-600">4  </span>
                <span className="text-accent-300">{examples[step].factors}</span>
              </code>
            </motion.div>
          </div>

          {/* Side panel: pipeline */}
          <div className="relative border-t border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent px-5 py-6 md:border-l md:border-t-0">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-500">Pipeline</div>
            <ul className="mt-3 space-y-1.5 text-[11px] font-mono text-ink-400">
              <li className="flex items-center justify-between">
                <span>Trial division</span>
                <span className="text-emerald-400/80">skip</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Miller-Rabin</span>
                <span className="text-accent-300">composite</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Pollard p-1</span>
                <span className="text-ink-500">—</span>
              </li>
              <li className="flex items-center justify-between text-ink-200">
                <span>Pollard's Rho (Brent)</span>
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                  className="text-accent-300"
                >
                  ●
                </motion.span>
              </li>
              <li className="flex items-center justify-between text-ink-500">
                <span>ECM</span>
                <span>·</span>
              </li>
              <li className="flex items-center justify-between text-ink-500">
                <span>QS / SIQS</span>
                <span>·</span>
              </li>
              <li className="flex items-center justify-between text-ink-500">
                <span>GNFS</span>
                <span>·</span>
              </li>
            </ul>
            <div className="mt-5 border-t border-white/[0.06] pt-3 text-[10px] text-ink-500">
              <div className="flex items-center justify-between">
                <span>seeds tried</span>
                <span className="font-mono text-ink-300">12</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span>wall time</span>
                <span className="font-mono text-ink-300">8.4 ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tokens */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute -left-6 -bottom-6 hidden rotate-[-6deg] rounded-xl border border-white/[0.08] bg-ink-900/80 px-3 py-2 font-mono text-[11px] text-ink-300 shadow-soft backdrop-blur-md sm:block"
      >
        <span className="text-emerald-400">✓</span> 97% test coverage
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute -right-4 -top-6 hidden rotate-[5deg] rounded-xl border border-white/[0.08] bg-ink-900/80 px-3 py-2 font-mono text-[11px] text-ink-300 shadow-soft backdrop-blur-md sm:block"
      >
        <span className="text-accent-300">●</span> deterministic
      </motion.div>
    </motion.div>
  );
}