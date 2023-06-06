/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Theme } from '../../types/theme.type'
import { LogoSize, fontColorMap, sizeMap } from './properties'

const LogoVector = (theme: Theme = 'dark', size: LogoSize = 'S') => (
  <svg width={sizeMap[size]} height="auto" viewBox="0 0 495 126" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_32_3698)">
      <path
        d="M92.5517 125.442C143.347 125.442 184.525 97.5116 184.525 63.0582C184.525 28.6048 143.347 0.674805 92.5517 0.674805C41.7561 0.674805 0.578125 28.6048 0.578125 63.0582C0.578125 97.5116 41.7561 125.442 92.5517 125.442Z"
        fill="#11228C"
      />
      <path
        d="M92.5502 114.306C141.176 114.306 180.595 89.3188 180.595 58.4959C180.595 27.673 141.176 2.68604 92.5502 2.68604C43.9247 2.68604 4.50586 27.673 4.50586 58.4959C4.50586 89.3188 43.9247 114.306 92.5502 114.306Z"
        fill="#FFE600"
      />
      <path
        d="M45.474 69.3339C45.474 69.3339 31.0979 58.1608 3.68643 55.9075C3.68643 55.9075 0.557961 44.0081 22.7553 23.6357C22.7553 23.6357 48.8259 33.7475 64.5614 29.6693C77.4478 26.2987 95.2317 33.8405 99.2913 34.753C122.029 39.8554 101.153 30.9169 109.068 28.4961C112.55 27.416 119.03 36.28 124.207 38.5333C129.906 41.0472 127.783 38.8126 134.002 38.403C140.222 37.9933 135.399 46.4848 143.109 42.6673C143.109 42.6673 151.973 38.8126 144.04 49.9671C144.04 49.9671 161.47 56.522 142.55 67.8069C142.55 67.8069 148.509 80.1905 132.848 79.6132C132.848 79.6132 134.71 90.1532 120.353 88.2724C120.353 88.2724 120.818 97.9185 109.068 95.0507C109.068 95.0507 102.401 103.431 92.7922 96.0936"
        fill="white"
      />
      <path
        d="M45.474 69.3339C45.474 69.3339 31.0979 58.1608 3.68643 55.9075C3.68643 55.9075 0.55796 44.0081 22.7553 23.6357C22.7553 23.6357 48.8259 33.7475 64.5614 29.6693C77.4478 26.2987 95.2317 33.8405 99.2913 34.753C122.029 39.8554 101.153 30.9169 109.068 28.4961C112.55 27.416 119.03 36.28 124.207 38.5333C129.906 41.0472 127.783 38.8126 134.002 38.403C140.222 37.9933 135.399 46.4848 143.109 42.6673C143.109 42.6673 151.973 38.8126 144.04 49.9671C144.04 49.9671 161.47 56.522 142.55 67.8069C142.55 67.8069 148.509 80.1905 132.848 79.6132C132.848 79.6132 134.71 90.1532 120.353 88.2724C120.353 88.2724 120.818 97.9185 109.068 95.0507C109.068 95.0507 102.401 103.431 92.7922 96.0936"
        stroke="#11228C"
        stroke-width="2.42085"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M122.048 27.4719C139.888 36.0007 152.551 32.4439 167.579 28.7567C167.579 28.7567 180.614 40.0975 181.434 55.833C167.958 57.905 154.858 61.9391 142.551 67.8069C142.551 67.8069 115.922 46.5779 109.162 41.0845C97.3558 31.4942 90.5402 36.28 90.5402 36.28L80.8754 43.0584C77.0992 45.7853 72.487 47.1031 67.8401 46.7828C58.3802 45.982 64.7302 39.5575 64.7302 39.5575C70.7455 32.9958 77.9082 27.5874 85.8661 23.5985C85.8661 23.5985 98.3241 16.1311 122.048 27.4719Z"
        fill="white"
        stroke="#11228C"
        stroke-width="2.42085"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M132.829 79.6133L117.895 65.8145"
        stroke="#11228C"
        stroke-width="2.42085"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M120.353 88.2723L109.068 76.6895"
        stroke="#11228C"
        stroke-width="2.42085"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M109.068 95.0504L101.229 86.2236"
        stroke="#11228C"
        stroke-width="2.42085"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M88.6049 82.7666C86.9651 82.2738 85.2716 82.1558 83.6319 82.6486C84.3581 77.5835 82.2725 72.9467 78.3805 71.6804C76.9982 71.3116 75.5429 71.3155 74.1625 71.6916C72.7822 72.0678 71.5261 72.8028 70.522 73.8219C70.0006 69.8927 67.7474 66.7642 64.4886 66.0752C62.9789 65.8536 61.4373 66.0649 60.0429 66.6847C58.6486 67.3044 57.4587 68.307 56.6115 69.5761C56.3201 68.71 55.8323 67.9232 55.1862 67.2771C54.5401 66.6309 53.7532 66.1431 52.8871 65.8517C51.2144 65.5487 49.4887 65.8629 48.0301 66.7359C46.5715 67.609 45.4792 68.9816 44.956 70.599C44.4328 72.2163 44.5142 73.9686 45.1851 75.5305C45.856 77.0924 47.0709 78.3578 48.6041 79.0919C49.4676 79.349 50.3787 79.4039 51.2668 79.2521C52.1549 79.1003 52.9961 78.746 53.7251 78.2167C53.7251 82.8349 56.2204 86.671 59.8703 87.5276C60.9618 87.7263 62.0842 87.6736 63.1523 87.3735C64.2203 87.0734 65.2059 86.5338 66.0342 85.7957C66.1105 87.4183 66.6537 88.9843 67.5985 90.3057C68.5432 91.627 69.8494 92.6475 71.3601 93.2445C72.3871 93.5491 73.4676 93.6286 74.5282 93.4775C75.5887 93.3265 76.6041 92.9485 77.5053 92.3693C77.7595 93.8717 78.4091 95.2794 79.3873 96.4478C80.3655 97.6162 81.637 98.5031 83.0714 99.0175C84.5057 99.532 86.0511 99.6554 87.5489 99.3751C89.0467 99.0947 90.4429 98.4208 91.5941 97.4224C92.7453 96.4241 93.61 95.1373 94.0994 93.6943C94.5889 92.2512 94.6854 90.7039 94.3791 89.2112C94.0728 87.7185 93.3747 86.3342 92.3565 85.2006C91.3383 84.0669 90.0367 83.2247 88.5853 82.7604L88.6049 82.7666Z"
        fill="white"
        stroke="#11228C"
        stroke-width="2.42085"
        stroke-linejoin="round"
      />
      <path
        d="M92.5508 0.674805C41.7502 0.674805 0.558594 28.6077 0.558594 63.0582C0.558594 97.5087 41.7502 125.442 92.5508 125.442C143.351 125.442 184.562 97.5087 184.562 63.0582C184.562 28.6077 143.351 0.674805 92.5508 0.674805ZM92.5508 117.527C43.9104 117.527 4.50643 91.8104 4.50643 60.0973C4.50643 28.3842 43.9104 2.68594 92.5508 2.68594C141.191 2.68594 180.576 28.3842 180.576 60.0973C180.576 91.8104 141.173 117.527 92.5508 117.527Z"
        fill="#11228C"
        stroke="#11228C"
        stroke-width="1.11731"
        stroke-miterlimit="10"
      />
      <path
        d="M220.986 31.2524V56.4106H210.93V33.2636C210.93 22.0904 216.516 16.5038 227.838 16.5038C232.029 16.2486 236.18 17.4311 239.607 19.8558C243.069 17.5169 247.207 16.3906 251.376 16.6528C262.624 16.6528 268.211 22.2394 268.136 33.4125V56.5782H262.997C259.719 56.3547 258.08 54.716 258.08 51.662V31.4014C257.857 27.2859 255.622 25.2934 251.227 25.2934C246.833 25.2934 244.598 27.2859 244.524 31.4014V56.4106H234.542V31.2524C234.319 27.137 232.084 25.1444 227.689 25.1444C223.295 25.1444 221.06 27.137 220.986 31.2524Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M292.122 57.304C279.757 56.9316 273.5 50.0042 273.5 36.5965C273.5 23.1887 279.831 16.5034 292.289 16.5034C305.263 16.5034 311.364 24.1943 310.595 39.576H284.17C284.543 45.6095 287.262 48.6634 292.289 48.6634C294.787 48.6111 297.169 47.5972 298.938 45.8329C299.381 45.3646 299.92 44.9962 300.517 44.7522C301.114 44.5082 301.756 44.3941 302.401 44.4176H309.98C307.746 52.6857 302.178 57.304 292.122 57.304ZM284.319 32.4251H299.701C299.086 27.211 296.535 24.5481 292.122 24.5481C287.709 24.5481 285.12 27.211 284.319 32.4251Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M315.176 36.0751C315.474 23.3564 322.252 17.0249 335.436 17.0249H336.852V27.2856H333.537C327.95 27.2856 325.269 30.2092 325.269 35.9261V56.4102H315.213L315.176 36.0751Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M359.496 57.3041C347.578 57.3041 341.47 50.4513 341.172 36.82C341.172 23.3564 347.205 16.578 359.347 16.3359C368.881 16.3359 374.542 20.5817 376.256 29.1292H365.455C364.954 27.8603 364.065 26.7823 362.914 26.0498C361.763 25.3172 360.41 24.9676 359.049 25.051C353.835 25.051 351.228 28.9802 351.228 36.8014C351.228 44.6226 353.984 48.5704 359.496 48.4959C360.636 48.4931 361.762 48.2379 362.792 47.7485C363.823 47.2591 364.732 46.5477 365.455 45.6654C365.887 45.2122 366.407 44.8527 366.984 44.6092C367.56 44.3657 368.181 44.2435 368.807 44.2501H376.256C374.505 52.3879 368.658 57.4717 359.496 57.3041Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M391.675 27.2858H381.768C382.96 20.0046 388.099 16.4292 397.187 16.4292C408.062 16.4292 413.574 20.0046 413.798 27.2858V40.7122C413.798 51.5874 407.243 56.429 396.591 57.1739C387.131 57.9188 380.576 53.4496 380.576 44.809C380.8 35.3491 387.653 32.8165 397.634 31.7737C401.88 31.2709 404.04 29.9115 404.04 27.8444C404.04 25.7774 401.731 24.4925 397.634 24.4925C394.133 24.5484 392.196 25.4236 391.675 27.2858ZM404.189 40.3211V36.5967C401.64 37.6434 398.996 38.4417 396.293 38.9803C392.345 39.7252 390.334 41.5874 390.334 44.5669C390.298 45.2154 390.406 45.8638 390.649 46.4658C390.893 47.0679 391.266 47.6087 391.743 48.0498C392.22 48.4909 392.788 48.8214 393.407 49.0176C394.026 49.2139 394.681 49.2711 395.325 49.1851C396.524 49.299 397.733 49.1454 398.865 48.7353C399.997 48.3253 401.024 47.669 401.872 46.814C402.72 45.9589 403.368 44.9263 403.769 43.7906C404.169 42.6549 404.313 41.4445 404.189 40.2466V40.3211Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M454.914 10.7681V39.3526C454.914 51.1962 448.732 57.0807 436.441 57.0062C424.151 56.9317 418.117 50.1534 418.117 37.0435C418.117 23.9337 423.331 16.8015 433.834 16.4291C436.074 16.3441 438.296 16.867 440.263 17.9423C442.23 19.0177 443.869 20.6054 445.007 22.5371M428.247 36.5966C428.247 44.5668 430.855 48.5891 436.516 48.5891C442.177 48.5891 445.007 44.5668 445.007 36.5966C444.784 28.9989 442.028 25.2931 436.665 25.2931C431.301 25.2931 428.62 28.9989 428.322 36.5966H428.247Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M494.914 36.9875C494.914 50.5443 488.881 57.4716 476.963 57.4716C465.045 57.4716 459.086 50.6187 459.086 36.9875C459.086 23.3563 465.045 16.5034 476.963 16.5034C488.881 16.5034 494.914 23.2073 494.914 36.9875ZM469.142 36.9875C469.142 44.6597 471.823 48.5331 476.888 48.5331C481.954 48.5331 484.486 44.5108 484.561 36.6896C484.635 28.8684 482.028 25.2371 476.963 25.2371C471.898 25.2371 469.142 29.0732 469.142 36.9875Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M215.697 65.3672H220.837V116H210.93V70.2089C210.934 68.9391 211.436 67.7215 212.327 66.8166C213.218 65.9118 214.427 65.3915 215.697 65.3672Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M237.821 65.3672V73.1139H227.914V65.3672M233.054 76.5403C233.702 76.4427 234.365 76.4986 234.988 76.7037C235.611 76.9087 236.177 77.2571 236.64 77.7208C237.104 78.1846 237.453 78.7507 237.658 79.3737C237.863 79.9966 237.919 80.659 237.821 81.3075V115.926H227.914V76.6148L233.054 76.5403Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M253.313 70.3579V82.1269C254.44 80.1855 256.077 78.5899 258.047 77.5131C260.017 76.4364 262.244 75.9196 264.486 76.0189C274.989 76.3914 280.203 83.2442 280.203 96.6334C280.203 110.023 274.095 116.373 261.879 116.596C249.663 116.82 243.406 110.786 243.406 98.9425M253.313 96.1865C253.313 104.157 255.92 108.179 261.581 108.179C267.242 108.179 270.073 104.157 270.073 96.1865C269.849 88.5887 267.093 84.883 261.73 84.883C256.367 84.883 253.611 88.5887 253.313 96.1865Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M243.406 98.9425V73.1139C243.406 69.8364 247.764 65.3672 251.041 65.3672H253.313V98.8866"
        fill={fontColorMap[theme]}
      />
      <path
        d="M445.082 39.3526V13.5241C445.082 10.2466 449.44 5.77734 452.717 5.77734H454.989V39.2968"
        fill={fontColorMap[theme]}
      />
      <path
        d="M284.674 95.665C284.972 82.9462 291.75 76.6147 304.934 76.6147H306.35V86.8754H302.998C297.411 86.8754 294.73 89.799 294.73 95.516V116H284.674V95.665Z"
        fill={fontColorMap[theme]}
      />
      <path
        d="M329.328 116.745C316.739 116.373 310.445 109.445 310.445 96.0376C310.445 82.6298 316.814 75.9446 329.477 75.8701C342.698 75.8701 348.906 83.5609 348.099 98.9426H321.227C321.618 104.976 324.374 108.03 329.477 108.03C332.014 107.984 334.439 106.972 336.255 105.2C336.714 104.73 337.266 104.362 337.875 104.118C338.484 103.875 339.138 103.761 339.793 103.784H347.503C345.231 112.127 339.551 116.745 329.328 116.745ZM321.376 91.885H337.037C336.404 86.6708 333.816 83.9892 329.328 83.9892C324.84 83.9892 322.177 86.6708 321.376 91.885Z"
        fill={fontColorMap[theme]}
      />
    </g>
    <defs>
      <clipPath id="clip0_32_3698">
        <rect width="494.896" height="125.884" fill="white" transform="translate(0 0.116211)" />
      </clipPath>
    </defs>
  </svg>
)

export { LogoVector }