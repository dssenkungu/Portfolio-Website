"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function ProjectGallery({ images }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

    if (!images || images.length === 0) return null;

  const close = () => setSelected(null);

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
  };

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + images.length) % images.length);
  };

  // ✅ Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;

      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Screenshots</h2>

      {/* GRID */}
        <div className="grid md:grid-cols-2 gap-5">
        {images.map((img, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-muted/20 shadow-sm hover:shadow-lg transition"
            onClick={() => setSelected(i)}
            >
            {/* IMAGE WRAPPER (fixed ratio) */}
            <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain bg-black/40 transition duration-500 group-hover:scale-110"
                />
            </div>

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition" />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium line-clamp-2">
                {img.alt}
                </p>
            </div>

            {/* HOVER ACTION */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="bg-white/90 text-black text-xs px-3 py-1 rounded-full shadow">
                View
                </div>
            </div>
            </motion.div>
        ))}
        </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            {/* CONTENT */}
            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                width={1400}
                height={900}
                className="w-full h-auto rounded-lg"
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={close}
                className="absolute top-3 right-3 text-white text-2xl bg-black/50 px-3 py-1 rounded"
              >
                ×
              </button>

              {/* LEFT ARROW */}
              {images.length > 1 && (
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 px-3 py-1 rounded"
                >
                  ←
                </button>
              )}

              {/* RIGHT ARROW */}
              {images.length > 1 && (
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 px-3 py-1 rounded"
                >
                  →
                </button>
              )}

              {/* CAPTION */}
              <p className="text-center text-sm text-gray-300 mt-4">
                {images[selected].alt}
              </p>

              {/* COUNTER */}
              <p className="text-center text-xs text-gray-400 mt-1">
                {selected + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}