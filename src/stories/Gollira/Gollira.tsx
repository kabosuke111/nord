import React from 'react';

import './gollira.css';

export interface GolliraProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Gollira = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: GolliraProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
      <p className='text-violet-600'>※あっ　一発で折れた</p>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        {...props}
      >
        {label}
        <style jsx>{`
          button {
            background-color: ${backgroundColor};
          }
        `}</style>
      </button>
    </>
  );
};
