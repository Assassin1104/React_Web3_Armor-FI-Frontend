import React from 'react'

const MediumIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM18 7.44609L17.0438 8.3625C16.9594 8.42578 16.9195 8.52891 16.9359 8.62969V15.3727C16.9195 15.4758 16.9594 15.5789 17.0438 15.6398L17.9813 16.5563V16.7602H13.275V16.5656L14.243 15.6258C14.3391 15.5297 14.3391 15.5016 14.3391 15.3586V9.90234L11.6437 16.7367H11.2805L8.14453 9.90234V14.4844C8.11641 14.6766 8.18437 14.8711 8.32031 15.0094L9.58125 16.5352V16.7391H6V16.5352L7.26094 15.0094C7.32737 14.9408 7.37681 14.8575 7.4053 14.7664C7.43379 14.6752 7.44054 14.5786 7.425 14.4844V9.1875C7.44141 9.03984 7.38516 8.89687 7.27266 8.79609L6.15234 7.44609V7.24219H9.63281L12.3187 13.1367L14.6836 7.24688H18V7.44609Z"
        fill={color}
      />
    </svg>
  )
}

export default MediumIcon
