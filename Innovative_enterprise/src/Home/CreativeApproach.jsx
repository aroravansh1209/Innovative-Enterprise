import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CreativeApproachImg from "../assets/MainBanner.png";

export default function CreativeApproach() {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true, amount: 0.3 });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left side - Single Image */}
        <div className="relative">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[480px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src={CreativeApproachImg}
              alt="Professional businesswoman working on laptop"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                🎨 CREATIVE APPROACH
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Powerful agency for corporate business.
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              We strive to develop real-world web solutions that are ideal for small to large projects with bespoke
              project requirements. We create compelling web designs, which are the right-fit for your target groups and
              also deliver optimized.
            </motion.p>
          </div>

          {/* Progress Bars */}
          <motion.div className="space-y-6" ref={progressRef}>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <motion.span
                  className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  BUSINESS GROWTH
                </motion.span>
                <motion.span
                  className="text-sm font-bold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  98%
                </motion.span>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-red-400 to-transparent rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-orange-400"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "98%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <motion.span
                  className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  NEW TECHNOLOGY
                </motion.span>
                <motion.span
                  className="text-sm font-bold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  85%
                </motion.span>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-purple-200 to-transparent rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
