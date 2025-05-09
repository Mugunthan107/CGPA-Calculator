
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-1/2 transform -translate-x-1/2 py-3 px-5 rounded-lg glass",
        "shadow-lg flex items-center gap-2 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      )}
    >
      <CheckCircle className="w-5 h-5 text-primary" />
      <span className="text-foreground font-medium">{message}</span>
    </div>
  );
};

export default Notification;
