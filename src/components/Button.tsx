import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
};

const variantStyles: Record<'primary' | 'secondary' | 'danger', string> = {
    primary: 'bg-indigo-700 hover:bg-indigo-800 text-white border-transparent',
    secondary: 'bg-green-700 hover:bg-green-800 text-white border-transparent',
    danger: 'bg-red-700 hover:bg-red-800 text-white border-transparent',
};

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
    const buttonClass = variantStyles[variant];

    return (
        <button
            onClick={onClick}
            className={`relative inline-block px-6 py-3 font-medium text-sm leading-tight transition-colors duration-300 ease-in-out border rounded-lg ${buttonClass}`}
        >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight">
                <span className="absolute inset-0 w-full h-full rounded-lg bg-opacity-50" />
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-opacity-40" />
                <span className="relative">{children}</span>
            </span>
            <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-opacity-40"
                data-rounded="rounded-lg"
            />
        </button>
    );
}
