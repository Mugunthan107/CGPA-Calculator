
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubjectRowProps {
  index: number;
  onDelete: () => void;
  defaultGrade?: string;
  defaultCredit?: string;
}

const SubjectRow: React.FC<SubjectRowProps> = ({ 
  index, 
  onDelete,
  defaultGrade = '',
  defaultCredit = ''
}) => {
  return (
    <tr className="border-b border-secondary/80 transition-colors hover:bg-secondary/30">
      <td className="py-4 px-4 text-foreground/80 font-medium text-sm">
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-medium">
          {index}
        </span>
      </td>
      <td className="py-3 px-4">
        <input
          type="number"
          id={`grade${index}`}
          min="1"
          max="10"
          step="0.1"
          defaultValue={defaultGrade}
          className="input-field"
          onInput={(e) => {
            const input = e.currentTarget;
            const value = parseFloat(input.value);
            if (value > 10) input.value = '10';
            if (value < 1 && input.value !== '') input.value = '1';
          }}
          aria-label={`Grade for subject ${index}`}
        />
      </td>
      <td className="py-3 px-4">
        <input
          type="number"
          id={`credit${index}`}
          min="1"
          max="5"
          defaultValue={defaultCredit}
          className="input-field"
          onInput={(e) => {
            const input = e.currentTarget;
            const value = parseFloat(input.value);
            if (value > 5) input.value = '5';
            if (value < 1 && input.value !== '') input.value = '1';
          }}
          aria-label={`Credit for subject ${index}`}
        />
      </td>
      <td className="py-3 px-4">
        <button 
          onClick={onDelete}
          className="button-danger group"
          aria-label="Delete subject"
        >
          <X className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>
      </td>
    </tr>
  );
};

export default SubjectRow;
