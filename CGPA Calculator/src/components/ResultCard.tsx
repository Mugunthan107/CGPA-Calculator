
import React from 'react';
import { cn } from '@/lib/utils';

interface ResultCardProps {
  cgpa: string;
  isCalculated: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ cgpa, isCalculated }) => {
  // Determine the grade color based on CGPA value
  const getGradeColor = (cgpa: number) => {
    if (cgpa >= 9) return 'text-green-500';
    if (cgpa >= 8) return 'text-emerald-500';
    if (cgpa >= 7) return 'text-blue-500';
    if (cgpa >= 6) return 'text-amber-500';
    return 'text-red-500';
  };

  const cgpaValue = parseFloat(cgpa || '0');
  const colorClass = getGradeColor(cgpaValue);

  return (
    <div className={cn(
      "mt-8 py-6 px-8 rounded-xl glass transition-all duration-500",
      isCalculated ? "opacity-100 scale-100" : "opacity-80 scale-95"
    )}>
      <div className="text-center">
        <h3 className="text-base font-medium text-foreground/60 mb-1">Your Result</h3>
        <div className="flex items-center justify-center mt-2">
          <div className={cn("text-5xl font-bold tracking-tight", colorClass)}>
            {cgpa}
          </div>
        </div>
        <p className="text-muted-foreground text-sm mt-2">CGPA</p>
      </div>
    </div>
  );
};

export default ResultCard;
