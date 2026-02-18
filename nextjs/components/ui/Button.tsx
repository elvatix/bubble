import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ children, variant = 'primary', href, className = '', onClick, type = 'button' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer no-underline';

  const variants: Record<string, string> = {
    primary: 'bg-[var(--linkedin-blue)] text-white hover:bg-[var(--linkedin-blue-dark)] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[var(--linkedin-blue)] text-[var(--linkedin-blue)] bg-transparent hover:bg-[var(--linkedin-blue-light)]',
    white: 'bg-white text-[var(--linkedin-blue)] hover:bg-gray-50 shadow-md',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
