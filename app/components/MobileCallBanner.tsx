'use client';

import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

interface MobileCallBannerProps {
  phoneNumber?: string; // Ex: "0123456789"
  displayPhone?: string; // Ex: "01 23 45 67 89"
}

export default function MobileCallBanner({
  phoneNumber = '0123456789',
  displayPhone = '01 23 45 67 89',
}: MobileCallBannerProps) {
  return (
    /* md:hidden permet de le masquer dès qu'on dépasse le format mobile (≥768px) */
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-lawyer-gold/30 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Bouton Appeler direct */}
        <motion.a
          href={`tel:${phoneNumber}`}
          whileTap={{ scale: 0.96 }}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-lawyer-green text-white font-medium text-sm rounded-lg shadow-md active:bg-lawyer-green/90 transition-colors"
        >
          <Phone className="w-4 h-4 animate-pulse" />
          <span>Appeler ({displayPhone})</span>
        </motion.a>


      </div>
    </div>
  );
}