import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wider transition-all duration-300 rounded-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-[0.15em]",
    md: "px-6 py-3.5 text-xs sm:text-sm uppercase tracking-[0.2em]",
    lg: "px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.25em]"
  };

  const variantStyles = {
    primary: "bg-[#c5a880] text-[#0a0b0d] hover:bg-[#e2c99b] hover:shadow-[0_0_25px_rgba(197,168,128,0.3)] border border-[#c5a880]",
    secondary: "bg-[#181b20] text-[#f4f1ea] hover:bg-[#22262e] hover:text-[#c5a880] border border-[#2e3440]",
    outline: "bg-transparent text-[#e6e1d7] border border-[#c5a880]/40 hover:border-[#c5a880] hover:text-[#c5a880] hover:bg-[#c5a880]/5",
    text: "bg-transparent text-[#c5a880] hover:text-[#e2c99b] p-0 underline-offset-8 hover:underline"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
