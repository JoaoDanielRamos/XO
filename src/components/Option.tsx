export default function Option({
  option,
  color,
  cssClass,
  size,
}: {
  option: string;
  color: string;
  cssClass: any;
  size: number;
}) {
  let iconColor;

  if (color.toLowerCase().replace(/\s+/g, '') === 'yellow')
    iconColor = '#F2B137';
  if (color.toLowerCase().replace(/\s+/g, '') === 'blue') iconColor = '#31C3BD';
  if (color.toLowerCase().replace(/\s+/g, '') === 'darknavy')
    iconColor = '#1A2A33';
  if (color.toLowerCase().replace(/\s+/g, '') === 'silver')
    iconColor = '#A8BFC9';

  if (option === 'X') {
    return (
      <svg
        className={cssClass}
        width={`${size}px`}
        height={`${size}px`}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        viewBox='0 0 64 64'
      >
        <path
          d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
          fill={iconColor}
          fill-rule='evenodd'
        />
      </svg>
    );
  } else {
    return (
      <svg
        className={cssClass}
        width={`${size}px`}
        height={`${size}px`}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        viewBox='0 0 64 64'
      >
        <path
          d='M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z'
          fill={iconColor}
        />
      </svg>
    );
  }
}
