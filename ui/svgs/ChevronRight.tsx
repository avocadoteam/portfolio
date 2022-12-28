export type Props = {
  className?: string;
};

export const ChevronRight = ({ className }: Props) => {
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M7.22721 8L3.8636 4.63639C3.51213 4.28492 3.51213 3.71507 3.8636 3.3636C4.21507 3.01213 4.78492 3.01213 5.13639 3.3636L9.13639 7.3636C9.48787 7.71507 9.48787 8.28492 9.13639 8.63639L5.13639 12.6364C4.78492 12.9879 4.21507 12.9879 3.8636 12.6364C3.51213 12.2849 3.51213 11.7151 3.8636 11.3636L7.22721 8Z"
        fill="currentColor"
      />
    </svg>
  );
};
