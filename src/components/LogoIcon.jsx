export const LogoIcon = ({ mobile }) => {
  
  switch (!mobile) {
    case (false):  return (
    <svg width="128" height="55" viewBox="0 0 128 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2_734)">
      <circle cx="21.4021" cy="27.4021" r="20.026" transform="rotate(-25.7323 21.4021 27.4021)" fill="url(#paint0_radial_2_734)" stroke="url(#paint1_radial_2_734)"/>
      <path d="M78.5782 13V42H75.0937L58.891 19.2305H58.6006V42H55V13H58.4845L74.7453 35.8262H75.0356V13H78.5782Z" fill="white"/>
      <path d="M84.5565 42V13H102.385V16.1152H88.1571V25.9141H101.05V29.0293H88.1571V42H84.5565Z" fill="white"/>
      <path d="M105.699 16.1152V13H128V16.1152H118.65V42H115.049V16.1152H105.699Z" fill="white"/>
      </g>
      <defs>
      <radialGradient id="paint0_radial_2_734" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.7179 8.77089) rotate(90.4621) scale(39.1585)">
      <stop stopColor="#DEA8FF"/>
      <stop offset="0.445112" stopColor="#9D6AD9"/>
      <stop offset="1" stopColor="#7A2BF6"/>
      </radialGradient>
      <radialGradient id="paint1_radial_2_734" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.8389 10.37) rotate(80.1061) scale(38.1251)">
      <stop stopColor="#E2C1FF" stopOpacity="0.53"/>
      <stop offset="1" stopColor="#853DF2" stopOpacity="0.55"/>
      </radialGradient>
      <clipPath id="clip0_2_734">
      <rect width="128" height="55" fill="white"/>
      </clipPath>
      </defs>
    </svg>
    );
    case (true): return (
      <svg width="89" height="37" viewBox="0 0 89 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18.1999" cy="18.5" r="13.1329" transform="rotate(-25.7323 18.1999 18.5)" fill="url(#paint0_radial_10_67)" stroke="url(#paint1_radial_10_67)"/>
        <path d="M56.175 8.93439V28.1956H53.8607L43.0992 13.0725H42.9063V28.1956H40.5149V8.93439H42.8292L53.6293 24.0951H53.8221V8.93439H56.175Z" fill="white"/>
        <path d="M60.1457 28.1956V8.93439H71.9872V11.0035H62.5371V17.5116H71.1001V19.5807H62.5371V28.1956H60.1457Z" fill="white"/>
        <path d="M74.1884 11.0035V8.93439H89V11.0035H82.7899V28.1956H80.3985V11.0035H74.1884Z" fill="white"/>
        <defs>
        <radialGradient id="paint0_radial_10_67" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.4097 6.12548) rotate(90.4621) scale(26.0082)">
        <stop stopColor="#DEA8FF"/>
        <stop offset="0.445112" stopColor="#9D6AD9"/>
        <stop offset="1" stopColor="#7A2BF6"/>
        </radialGradient>
        <radialGradient id="paint1_radial_10_67" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.49 7.18755) rotate(80.1061) scale(25.3219)">
        <stop stopColor="#E2C1FF" stopOpacity="0.53"/>
        <stop offset="1" stopColor="#853DF2" stopOpacity="0.55"/>
        </radialGradient>
        </defs>
      </svg>
    ) 
  default: return null;
  }
}