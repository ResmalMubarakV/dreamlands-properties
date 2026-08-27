import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-[#c5a880]"></span>
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#c5a880] uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight ${light ? 'text-[#0a0b0d]' : 'text-[#f4f1ea]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${light ? 'text-[#4a4d55]' : 'text-[#9e9a90]'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
