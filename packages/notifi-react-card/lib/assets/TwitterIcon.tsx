import React from 'react';

export type Props = Readonly<{
  className?: string;
}>;

export const TwitterIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.139 2.7007C26.1404 3.14353 25.0673 3.44283 23.941 3.57744C25.0906 2.88832 25.9734 1.79716 26.3892 0.497042C25.3134 1.13504 24.1218 1.59842 22.8535 1.84818C21.8378 0.766059 20.3908 0.0898438 18.7894 0.0898438C15.7144 0.0898438 13.2213 2.58277 13.2213 5.6576C13.2213 6.09399 13.2707 6.51895 13.3656 6.92645C8.73809 6.69426 4.63543 4.4776 1.88927 1.10903C1.41001 1.93137 1.13543 2.88782 1.13543 3.9082C1.13543 5.83986 2.11848 7.5441 3.61247 8.54254C2.6997 8.51365 1.84123 8.2632 1.09046 7.84617C1.09006 7.8694 1.09006 7.89273 1.09006 7.91615C1.09006 10.6139 3.00932 12.8643 5.55644 13.3757C5.08919 13.503 4.59731 13.571 4.08946 13.571C3.7307 13.571 3.38187 13.5361 3.04198 13.4711C3.75045 15.6832 5.8067 17.2929 8.24314 17.3379C6.33758 18.8312 3.93678 19.7213 1.32821 19.7213C0.878822 19.7213 0.435589 19.695 0 19.6436C2.46404 21.2234 5.39076 22.1451 8.53508 22.1451C18.7764 22.1451 24.3767 13.6609 24.3767 6.30324C24.3767 6.06182 24.3714 5.82169 24.3606 5.58295C25.4484 4.79794 26.3925 3.81727 27.139 2.7007Z"
        fill="#B6B8D5"
      />
    </svg>
  );
};