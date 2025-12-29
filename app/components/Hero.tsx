'use client';

import { FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-32 max-w-3xl">
      <div className="space-y-8">
        
        {/* Name & Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h1 className="text-5xl font-semibold tracking-tighter text-white sm:text-6xl">
            Lucas Mougeot
          </h1>
          <h2 className="text-xl text-neutral-400 font-normal">
            Systems Engineer <span className="text-neutral-600 mx-2">//</span> Platform & Applied AI
          </h2>
        </motion.div>

        {/* The Pitch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl space-y-4"
        >
          <p className="text-lg text-neutral-300 leading-relaxed">
            Bridging the gap between hardware and code.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Formerly in NASA research, now building reliable full-stack tools and automation pipelines. I focus on clean systems and getting functional software into production.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a 
            href="mailto:lucas@lucasmougeot.ai" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors"
          >
            <Mail className="w-4 h-4" /> 
            Contact Me
          </a>
          
          <a 
            href="/Lucas-Mougeot-Resume-Dec-2025.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium rounded hover:bg-neutral-800 hover:text-white transition-all"
          >
            <FileText className="w-4 h-4" /> 
            Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}