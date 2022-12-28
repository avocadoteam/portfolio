export type Props = {
  className?: string;
};

export const CheckIcon = ({ className }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8911 4.37497C11.9233 3.15956 10.0767 3.15956 9.10898 4.37497C8.5903 5.02638 7.77286 5.36498 6.94548 5.27112C5.40175 5.096 4.09603 6.40173 4.27115 7.94546C4.365 8.77284 4.02641 9.59028 3.37499 10.109C2.15958 11.0767 2.15958 12.9233 3.37499 13.891C4.02641 14.4097 4.365 15.2272 4.27115 16.0545C4.09603 17.5983 5.40175 18.904 6.94548 18.7289C7.77286 18.635 8.5903 18.9736 9.10898 19.625C10.0767 20.8404 11.9233 20.8404 12.8911 19.625C13.4097 18.9736 14.2272 18.635 15.0546 18.7289C16.5983 18.904 17.904 17.5983 17.7289 16.0545C17.635 15.2272 17.9736 14.4097 18.6251 13.891C19.8405 12.9233 19.8405 11.0767 18.6251 10.109C17.9736 9.59028 17.635 8.77284 17.7289 7.94546C17.904 6.40173 16.5983 5.096 15.0546 5.27112C14.2272 5.36498 13.4097 5.02638 12.8911 4.37497ZM14.797 10.104C15.1306 9.66387 15.0442 9.03662 14.604 8.70303C14.1639 8.36944 13.5366 8.45583 13.203 8.89598L10.0517 13.054L8.64686 11.8624C8.22568 11.5051 7.59464 11.557 7.23739 11.9781C6.88014 12.3993 6.93196 13.0304 7.35314 13.3876L9.56367 15.2626C9.77319 15.4403 10.0466 15.524 10.3197 15.494C10.5928 15.464 10.8415 15.323 11.0075 15.104L14.797 10.104Z"
        fill="currentColor"
      />
    </svg>
  );
};