import React from "react";

import design1 from "../images/servicesCardImages/design1.webp";
import design2 from "../images/servicesCardImages/design2.webp";
import design3 from "../images/servicesCardImages/design3.webp";

import development1 from "../images/servicesCardImages/development1.webp";
import development2 from "../images/servicesCardImages/development2.webp";
import development3 from "../images/servicesCardImages/development3.webp";

import eCommerce1 from "../images/servicesCardImages/eCommerce1.webp";
import eCommerce2 from "../images/servicesCardImages/eCommerce2.webp";
import eCommerce3 from "../images/servicesCardImages/eCommerce3.webp";

import social1 from "../images/servicesCardImages/social1.webp";
import social2 from "../images/servicesCardImages/social2.webp";
import social3 from "../images/servicesCardImages/social3.webp";

export const pageData = {
  design: {
    heading: "Web design",
    secondaryHeading: "UI/UX",
    headingIcons: [
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="45" r="45" fill="#42E2B8" fill-opacity="0.6" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.6209 21H61.0605C65.8269 21 69.6814 24.8534 69.6814 29.6209V59.8445C69.6814 64.611 65.828 68.4655 61.0605 68.4655H29.6209C24.8545 68.4655 21 64.612 21 59.8445V29.6209C21 24.8545 24.8534 21 29.6209 21ZM44.5905 49.4797H37.0449L35.5033 54.2461C35.4622 54.4289 35.2999 54.5501 35.1182 54.5295H31.3048C31.082 54.5295 31.0203 54.4084 31.082 54.1639L37.6139 35.361C37.63 35.3071 37.646 35.2518 37.6625 35.1951L37.6625 35.195L37.6626 35.1948C37.7082 35.0378 37.7569 34.8701 37.8173 34.6913C37.8984 34.2651 37.9385 33.8194 37.9385 33.3726C37.9179 33.2709 37.999 33.1692 38.1007 33.1498H38.1613H43.354C43.5163 33.1498 43.5974 33.2103 43.618 33.312L51.0219 54.2039C51.0824 54.4268 51.0219 54.5285 50.8185 54.5285H46.5789C46.4372 54.549 46.2954 54.4473 46.2543 54.3056L44.5905 49.4797ZM38.2219 45.3612H43.3735C43.2523 44.935 43.09 44.4287 42.9072 43.9008C42.7244 43.3534 42.5416 42.7649 42.3598 42.1569C42.2581 41.8426 42.1619 41.5332 42.0656 41.2239C41.9693 40.9144 41.873 40.605 41.7713 40.2908C41.5679 39.6622 41.3862 39.0737 41.2239 38.4852C41.1506 38.2287 41.0815 37.9804 41.0148 37.7403L41.0147 37.74C40.9336 37.4486 40.8559 37.1694 40.7782 36.9025H40.7371C40.5543 37.7745 40.3314 38.6464 40.0469 39.5194C39.9323 39.8864 39.8178 40.2592 39.7021 40.6355L39.7021 40.6357L39.702 40.6358C39.5108 41.258 39.3166 41.8899 39.1144 42.5215C38.8299 43.5557 38.5259 44.5098 38.2219 45.3612ZM53.6371 35.9096C54.1239 36.3759 54.773 36.6398 55.4426 36.6193C56.1317 36.6604 56.8208 36.3964 57.2882 35.9096C57.775 35.4022 58.0184 34.7337 57.9978 34.0435C58.0184 33.3738 57.7739 32.7248 57.3282 32.2379C56.8825 31.7717 56.2734 31.5283 55.4826 31.5283C54.813 31.5283 54.1639 31.7717 53.6771 32.2379C53.1903 32.7053 52.9263 33.3533 52.9469 34.0435C52.9274 34.7326 53.1708 35.4022 53.6371 35.9096ZM53.1708 38.6076V54.2257C53.1708 54.428 53.2714 54.5503 53.4748 54.5513H57.4504C57.6333 54.5513 57.7144 54.4496 57.7144 54.2268V38.6076C57.7144 38.4259 57.6333 38.3242 57.4504 38.3242H53.4348C53.2519 38.3242 53.1708 38.4043 53.1708 38.6076Z"
          fill="white"
        />
      </svg>,
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="45" r="45" fill="#42E2B8" fill-opacity="0.6" />
        <path
          d="M66 46.5001C66 51.5662 61.8544 55.6779 56.7465 55.6779C51.6385 55.6779 47.4929 51.5662 47.4929 46.5001C47.4929 41.4339 51.6385 37.3223 56.7465 37.3223C61.8544 37.3223 66 41.4339 66 46.5001Z"
          fill="white"
        />
        <path
          d="M47.4929 17.9833C47.4929 17.4403 47.9374 17 48.4857 17H56.7465C61.8544 17 66 21.1116 66 26.1778C66 31.2439 61.8544 35.3555 56.7465 35.3555H48.4857C47.9374 35.3555 47.4929 34.9153 47.4929 34.3722V17.9833Z"
          fill="white"
        />
        <path
          d="M36.2539 76C41.3619 76 45.5074 71.8884 45.5074 66.8222V58.6278C45.5074 58.0847 45.063 57.6445 44.5147 57.6445H36.2539C31.146 57.6445 27.0004 61.7561 27.0004 66.8222C27.0004 71.8884 31.146 76 36.2539 76Z"
          fill="white"
        />
        <path
          d="M27.0004 46.5001C27.0004 41.4339 31.146 37.3223 36.2539 37.3223H44.5147C45.063 37.3223 45.5074 37.7625 45.5074 38.3056V54.6945C45.5074 55.2376 45.063 55.6779 44.5147 55.6779H36.2539C31.146 55.6779 27.0004 51.5662 27.0004 46.5001Z"
          fill="white"
        />
        <path
          d="M27 26.1778C27 21.1116 31.1456 17 36.2535 17H44.5143C45.0626 17 45.507 17.4403 45.507 17.9833V34.3722C45.507 34.9153 45.0626 35.3555 44.5143 35.3555H36.2535C31.1456 35.3555 27 31.2439 27 26.1778Z"
          fill="white"
        />
      </svg>,
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="45" r="45" fill="#42E2B8" fill-opacity="0.6" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.6774 21L61.3226 21C66.1203 21 70 24.8786 70 29.6774V60.0987C70 64.8964 66.1214 68.7761 61.3226 68.7761H29.6774C24.8797 68.7761 21 64.8975 21 60.0987L21 29.6774C21 24.8797 24.8786 21 29.6774 21ZM32.0255 54.5041V33.4962C32.0255 33.3535 32.0865 33.2719 32.2302 33.2719C32.5776 33.2719 32.9042 33.2719 33.3735 33.2512C33.6259 33.2405 33.8836 33.2353 34.1496 33.23H34.1496C34.4002 33.225 34.658 33.2198 34.9252 33.2098C35.2102 33.1991 35.5062 33.1939 35.8131 33.1886H35.8132H35.8132C36.0997 33.1836 36.3958 33.1784 36.7012 33.1684C37.3338 33.1477 37.9469 33.1477 38.5588 33.1477C40.2335 33.1477 41.6208 33.3524 42.7641 33.7804C43.7855 34.1277 44.7241 34.6994 45.4994 35.4551C46.1528 36.1084 46.6634 36.9044 46.9901 37.7831C47.2961 38.6401 47.4594 39.5188 47.4594 40.4378C47.4594 42.1931 47.0511 43.6435 46.2344 44.7869C45.4177 45.9302 44.2744 46.7882 42.9471 47.2782C41.5587 47.7889 40.0277 47.9719 38.353 47.9719C37.863 47.9719 37.5364 47.9719 37.3317 47.9512C37.1269 47.9305 36.8417 47.9305 36.454 47.9305V54.4845C36.4747 54.6271 36.3723 54.7502 36.2297 54.7698H36.148H32.2705C32.1072 54.7698 32.0255 54.6881 32.0255 54.5041ZM36.4758 37.2115V44.0715L36.5406 44.0762C36.8022 44.0952 37.0454 44.1128 37.2718 44.1128H38.3541C39.1501 44.1128 39.9461 43.9909 40.7018 43.7448C41.3551 43.5608 41.9268 43.1731 42.3765 42.6624C42.8055 42.1517 43.0091 41.4581 43.0091 40.5598C43.0298 39.9271 42.8665 39.2945 42.5398 38.7424C42.1925 38.2111 41.7025 37.8038 41.1112 37.5784C40.3555 37.2724 39.5388 37.1494 38.7026 37.1701C38.1712 37.1701 37.7019 37.1701 37.3142 37.1908C36.9048 37.1701 36.6195 37.1908 36.4758 37.2115ZM58.2408 42.1309C58.9355 42.2746 59.5889 42.4989 60.2008 42.8256C60.2825 42.8669 60.3848 42.8669 60.571 42.8267C60.6331 42.7853 60.6734 42.7036 60.6734 42.6219V39.2943C60.6734 39.2126 60.6538 39.131 60.6331 39.0493C60.5917 38.9676 60.5101 38.886 60.4284 38.8653C59.8763 38.641 59.284 38.4776 58.672 38.396C57.8346 38.2729 56.9777 38.2119 56.1403 38.2119C54.691 38.2119 53.4856 38.4363 52.5263 38.9263C51.6476 39.3346 50.893 39.9879 50.3823 40.8046C49.9326 41.5603 49.6876 42.3976 49.6876 43.2753C49.6669 43.9896 49.8302 44.7039 50.1569 45.3572C50.5445 46.0519 51.0759 46.6443 51.7086 47.0929C52.6058 47.7049 53.5662 48.1949 54.6072 48.5629C55.6079 48.9506 56.2819 49.2565 56.6086 49.5222C56.9352 49.7879 57.0986 50.0536 57.0986 50.3389C57.0986 50.7069 56.8743 51.0543 56.5476 51.1969C56.1806 51.3799 55.6297 51.4822 54.8533 51.4822C54.0366 51.4822 53.2199 51.381 52.4446 51.1763C51.5463 50.9715 50.709 50.6449 49.913 50.1756C49.8509 50.1342 49.7899 50.1135 49.729 50.1549C49.668 50.1963 49.6473 50.2779 49.6473 50.3389V53.8909C49.6266 54.0542 49.729 54.1968 49.8716 54.2785C50.5249 54.5845 51.2393 54.8088 51.9536 54.9318C52.8726 55.1159 53.7905 55.1975 54.7302 55.1975C56.2002 55.1975 57.4252 54.9732 58.4259 54.5442C59.3449 54.1761 60.1409 53.5435 60.7126 52.7268C61.2429 51.9298 61.5293 50.9705 61.5086 50.0111C61.5293 49.2761 61.3659 48.5618 61.0393 47.9085C60.6516 47.2149 60.1006 46.6432 59.4266 46.2142C58.4466 45.6011 57.3839 45.0915 56.2819 44.7235C55.7919 44.5188 55.3019 44.2945 54.8326 44.0495C54.5669 43.9068 54.3219 43.7228 54.1379 43.4985C54.0148 43.3352 53.9332 43.1511 53.9332 42.9671C53.9332 42.7842 53.9941 42.5795 54.0965 42.4161C54.2391 42.2125 54.4635 42.0688 54.7291 42.0078C55.1168 41.9055 55.5458 41.8445 55.9541 41.8652C56.7294 41.8652 57.4851 41.9675 58.2408 42.1309Z"
          fill="white"
        />
      </svg>,
    ],
    cardsData: [
      {
        heading: "UI and UX design",
        description:
          "Ease of use and storytelling makes brands and business stand out.",
        image: design1,
      },
      {
        heading: "Brand identity",
        description:
          "Indentity and consistency ensures your customers perceive your brand in the right way.",
        image: design2,
      },
      {
        heading: "Motion design",
        description:
          "Customers prefer consuming content as video and offering emersive video experience is crucial to convey your message.",
        image: design3,
      },
    ],
  },
  development: {
    heading: "Website & application",
    secondaryHeading: "development",
    headingIcons: [
      <svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.0365"
          cy="45.0365"
          r="45.0365"
          fill="#755ABA"
          fill-opacity="0.6"
        />
        <path
          d="M45.5 26.9964C66.1216 26.9964 81.9788 35.5764 81.9788 45C81.9788 54.4237 66.1095 63.0036 45.5 63.0036C24.8784 63.0036 9.02125 54.4237 9.02125 45C9.02125 35.5764 24.8905 26.9964 45.5 26.9964ZM45.5 25C24.2408 25 7 33.9483 7 45C7 56.0517 24.2408 65 45.5 65C66.7592 65 84 56.0517 84 45C84 33.9483 66.7592 25 45.5 25ZM33.2522 43.3957C32.3017 48.2086 28.945 47.7094 24.8183 47.7094L26.4666 39.3197C31.0384 39.3197 34.1425 38.8324 33.2522 43.3957ZM18.7184 56.2062H23.1339L24.1806 50.8824C29.1255 50.8824 32.1934 51.2389 35.0328 48.6126C38.173 45.7605 38.9911 40.6863 36.7533 38.1432C35.5863 36.8122 33.7094 36.1586 31.1588 36.1586H22.6527L18.7184 56.2062ZM41.0605 30.8229H45.4519L44.4052 36.1468C48.195 36.1468 51.7081 35.8734 53.4045 37.4183C55.1852 39.0345 54.3309 41.1022 52.4059 50.8586H47.9544C49.8072 41.4231 50.1561 40.6387 49.4823 39.9257C48.8327 39.2365 47.3528 39.3791 43.7795 39.3791L41.5177 50.8586H37.1262L41.0605 30.8229ZM67.7578 43.3957C66.7953 48.2799 63.3423 47.7094 59.3239 47.7094L60.9722 39.3197C65.5681 39.3197 68.6481 38.8324 67.7578 43.3957ZM53.2241 56.2062H57.6516L58.6983 50.8824C63.8958 50.8824 66.7713 51.1794 69.5505 48.6126C72.6906 45.7605 73.5088 40.6863 71.2709 38.1432C70.1039 36.8122 68.227 36.1586 65.6764 36.1586H57.1703L53.2241 56.2062Z"
          fill="white"
        />
      </svg>,
      <svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.0365"
          cy="45.0365"
          r="45.0365"
          fill="#755ABA"
          fill-opacity="0.6"
        />
        <path
          d="M62.7991 25H52.5L45 37.0073L38.5714 25H15L45 77L75 25H62.7991ZM22.4598 29.3367H29.6652L45 56.1973L60.3214 29.3367H67.5268L45 68.3943L22.4598 29.3367Z"
          fill="white"
        />
      </svg>,
      <svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.0365"
          cy="45.0365"
          r="45.0365"
          fill="#755ABA"
          fill-opacity="0.6"
        />
        <path
          d="M64.191 35.8512C63.5688 35.6423 62.9465 35.445 62.3242 35.2593C62.4279 34.8298 62.5201 34.4004 62.6123 33.971C64.0297 27.0535 63.0963 21.494 59.9504 19.6601C56.9197 17.9075 51.9762 19.7298 46.975 24.117C46.4795 24.5465 45.9955 24.9991 45.5346 25.4518C45.2234 25.15 44.9008 24.8482 44.5781 24.5581C39.335 19.869 34.0803 17.8959 30.9344 19.7414C27.9152 21.5056 27.0164 26.7401 28.284 33.2862C28.4107 33.9361 28.549 34.5745 28.7104 35.2245C27.9729 35.4334 27.2469 35.6655 26.567 35.9093C20.4135 38.0565 16 41.4456 16 44.9507C16 48.572 20.7016 52.2048 27.0971 54.41C27.6156 54.5841 28.1342 54.7582 28.6643 54.9091C28.4914 55.6055 28.3416 56.2903 28.2033 56.9983C26.9934 63.4399 27.9383 68.5468 30.9574 70.2994C34.0688 72.11 39.3004 70.253 44.3937 65.7612C44.7971 65.4014 45.2004 65.03 45.6037 64.6354C46.1107 65.1345 46.6408 65.6103 47.1709 66.0746C52.1029 70.3458 56.9773 72.0752 59.985 70.3226C63.0963 68.512 64.1104 63.0221 62.7967 56.3367C62.693 55.826 62.5777 55.3038 62.451 54.7699C62.8197 54.6654 63.177 54.5493 63.5342 54.4333C70.1832 52.2164 75 48.63 75 44.9507C75 41.434 70.4598 38.0216 64.191 35.8512ZM48.5998 25.9973C52.8865 22.2368 56.8852 20.7627 58.7059 21.8189C60.6533 22.9448 61.4023 27.4945 60.1809 33.4719C60.1002 33.8665 60.0195 34.2495 59.9158 34.6325C57.3576 34.0522 54.7648 33.6344 52.1605 33.4022C50.6625 31.2434 49.0262 29.1775 47.2516 27.2392C47.701 26.8097 48.1389 26.4035 48.5998 25.9973ZM35.2672 50.9745C35.8549 51.9843 36.4541 52.9941 37.0879 53.9806C35.2902 53.7833 33.5041 53.4931 31.741 53.1101C32.248 51.4388 32.8818 49.7094 33.6193 47.9452C34.1494 48.9666 34.691 49.9764 35.2672 50.9745ZM31.7756 37.0119C33.435 36.6405 35.198 36.3387 37.0303 36.1066C36.4195 37.0699 35.8203 38.0565 35.2557 39.0546C34.691 40.0412 34.1379 41.0509 33.6193 42.0723C32.8934 40.3429 32.2826 38.6484 31.7756 37.0119ZM34.933 45.0088C35.6936 43.4071 36.5232 41.8402 37.399 40.2965C38.2748 38.7528 39.2197 37.2556 40.2107 35.7816C41.9393 35.6539 43.7023 35.5843 45.5 35.5843C47.2977 35.5843 49.0723 35.6539 50.7893 35.7816C51.7687 37.244 52.7021 38.7412 53.5895 40.2733C54.4768 41.8054 55.3064 43.3722 56.09 44.9623C55.318 46.564 54.4883 48.1425 53.601 49.6978C52.7252 51.2415 51.7918 52.7387 50.8123 54.2243C49.0953 54.352 47.3092 54.41 45.5 54.41C43.6908 54.41 41.9393 54.352 40.2453 54.2476C39.2428 52.7735 38.2979 51.2647 37.4105 49.721C36.5232 48.1773 35.7051 46.6105 34.933 45.0088ZM55.7443 50.9513C56.332 49.9299 56.8852 48.897 57.4268 47.8524C58.1643 49.5353 58.8096 51.2415 59.3742 52.9941C57.5881 53.4003 55.7789 53.7137 53.9582 53.9226C54.5805 52.9476 55.1682 51.9495 55.7443 50.9513ZM57.4037 42.0723C56.8621 41.0509 56.309 40.0296 55.7328 39.0314C55.1682 38.0449 54.5805 37.0699 53.9697 36.1066C55.825 36.3387 57.5996 36.6521 59.259 37.0351C58.7289 38.7528 58.1066 40.4242 57.4037 42.0723ZM45.523 29.015C46.733 30.3381 47.8738 31.7309 48.934 33.1701C46.6523 33.0657 44.3592 33.0657 42.0775 33.1701C43.2068 31.6729 44.3707 30.2801 45.523 29.015ZM32.1559 21.9002C34.0918 20.7627 38.39 22.3877 42.9188 26.4267C43.2068 26.6821 43.4949 26.9606 43.7945 27.2392C42.0084 29.1775 40.3605 31.2434 38.851 33.4022C36.2467 33.6344 33.6654 34.0406 31.1072 34.6093C30.9574 34.0174 30.8307 33.4138 30.7039 32.8103C29.6207 27.1928 30.3352 22.9564 32.1559 21.9002ZM29.3326 52.495C28.8486 52.3557 28.3762 52.2048 27.9037 52.0423C25.4492 51.2647 22.6605 50.0344 20.6439 48.4211C19.4801 47.6086 18.6965 46.3551 18.4775 44.9507C18.4775 42.8267 22.1189 40.1108 27.3736 38.2654C28.0305 38.0332 28.6988 37.8243 29.3672 37.627C30.1508 40.1456 31.0957 42.6178 32.1904 45.0088C31.0842 47.4345 30.1277 49.9415 29.3326 52.495ZM42.7689 63.8694C40.8676 65.6219 38.6666 67.0147 36.2697 67.9665C34.9906 68.5816 33.5156 68.6396 32.202 68.1174C30.3697 67.0496 29.6092 62.9524 30.6463 57.4394C30.773 56.7894 30.9113 56.1394 31.0727 55.5011C33.6539 56.0582 36.2582 56.4412 38.8971 56.6385C40.4182 58.8089 42.0891 60.8865 43.8752 62.8364C43.5064 63.1962 43.1377 63.5444 42.7689 63.8694ZM45.5922 61.049C44.4168 59.7723 43.2414 58.3563 42.1006 56.8358C43.2068 56.8822 44.3477 56.9055 45.5 56.9055C46.6869 56.9055 47.8508 56.8822 49.0031 56.8242C47.943 58.2982 46.8021 59.7026 45.5922 61.049ZM60.6533 64.5309C60.5496 65.9469 59.8582 67.2701 58.752 68.1638C56.9197 69.2316 53.0133 67.8388 48.7957 64.1943C48.3117 63.7765 47.8277 63.3239 47.3322 62.8596C49.0953 60.8981 50.7201 58.8205 52.1951 56.6385C54.834 56.418 57.4613 56.0117 60.0541 55.4198C60.1693 55.8957 60.273 56.3716 60.3652 56.8358C60.9299 59.3428 61.0221 61.9543 60.6533 64.5309ZM62.7506 52.0539C62.4279 52.1584 62.1053 52.2628 61.7711 52.3557C60.9645 49.8255 59.9734 47.3533 58.8326 44.9507C59.9389 42.583 60.8723 40.1456 61.6559 37.6502C62.2551 37.8243 62.8313 38.01 63.3844 38.1957C68.7543 40.0528 72.5225 42.8151 72.5225 44.9275C72.5225 47.2024 68.5008 50.1388 62.7506 52.0539ZM45.5 50.3129C48.4154 50.3129 50.7777 47.9336 50.7777 44.9972C50.7777 42.0607 48.4154 39.6814 45.5 39.6814C42.5846 39.6814 40.2223 42.0607 40.2223 44.9972C40.2223 47.9336 42.5846 50.3129 45.5 50.3129Z"
          fill="white"
        />
      </svg>,
    ],
    cardsData: [
      {
        heading: "Custom development",
        description:
          "Your business is unique and so should be the softwares that help your business run and grow",
        image: development1,
      },
      {
        heading: "Integrations",
        description:
          "Having all data in one place allows for better business decision making",
        image: development2,
      },
      {
        heading: "Process automations",
        description:
          "Automating processes allows for easy and cost efficient scaling",
        image: development3,
      },
    ],
  },
  eCommerce: {
    heading: "Shopify and e-commerce",
    secondaryHeading: "development",
    headingIcons: [
      <svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.0365"
          cy="45.0365"
          r="45.0365"
          fill="#00CDFF"
          fill-opacity="0.6"
        />
        <g clip-path="url(#clip0_330_204)">
          <path
            d="M57.1951 62.4249H30.4055C28.7103 62.4131 27.0879 61.7332 25.8892 60.5322C24.6905 59.3313 24.0118 57.7058 24 56.0075V20.4174C24.0017 18.716 24.6771 17.0846 25.878 15.8815C27.0789 14.6784 28.7072 14.0017 30.4055 14H57.1951C58.8935 14.0017 60.5217 14.6784 61.7226 15.8815C62.9235 17.0846 63.5989 18.716 63.6006 20.4174V56.0075C63.5989 57.709 62.9235 59.3403 61.7226 60.5434C60.5217 61.7465 58.8935 62.4232 57.1951 62.4249ZM30.4055 17.2313C29.5621 17.2313 28.7532 17.567 28.1568 18.1645C27.5604 18.762 27.2253 19.5724 27.2253 20.4174V56.0075C27.2253 56.4259 27.3076 56.8402 27.4674 57.2267C27.6272 57.6133 27.8615 57.9645 28.1568 58.2604C28.4521 58.5563 28.8027 58.7909 29.1885 58.951C29.5743 59.1112 29.9879 59.1936 30.4055 59.1936H57.1951C57.6128 59.1936 58.0263 59.1112 58.4121 58.951C58.798 58.7909 59.1486 58.5563 59.4439 58.2604C59.7392 57.9645 59.9734 57.6133 60.1332 57.2267C60.293 56.8402 60.3753 56.4259 60.3753 56.0075V20.4174C60.3753 19.5724 60.0403 18.762 59.4439 18.1645C58.8475 17.567 58.0386 17.2313 57.1951 17.2313H30.4055Z"
            fill="white"
          />
          <path
            d="M55.0668 33.6143H32.6701C31.9858 33.6143 31.3295 33.3419 30.8456 32.8571C30.3617 32.3723 30.0898 31.7148 30.0898 31.0292V22.3046C30.0898 21.619 30.3617 20.9614 30.8456 20.4766C31.3295 19.9918 31.9858 19.7195 32.6701 19.7195H55.0668C55.7512 19.7195 56.4075 19.9918 56.8914 20.4766C57.3752 20.9614 57.6471 21.619 57.6471 22.3046V31.0292C57.6471 31.7148 57.3752 32.3723 56.8914 32.8571C56.4075 33.3419 55.7512 33.6143 55.0668 33.6143ZM33.3345 30.3829H54.4024V22.9961H33.3345V30.3829Z"
            fill="white"
          />
          <path
            d="M36.2303 36.2446H30.6376C30.0498 36.2446 29.5732 36.722 29.5732 37.311V40.4389C29.5732 41.0278 30.0498 41.5053 30.6376 41.5053H36.2303C36.8182 41.5053 37.2947 41.0278 37.2947 40.4389V37.311C37.2947 36.722 36.8182 36.2446 36.2303 36.2446Z"
            fill="white"
          />
          <path
            d="M46.3963 36.2446H40.8036C40.2158 36.2446 39.7393 36.722 39.7393 37.311V40.4389C39.7393 41.0278 40.2158 41.5053 40.8036 41.5053H46.3963C46.9842 41.5053 47.4607 41.0278 47.4607 40.4389V37.311C47.4607 36.722 46.9842 36.2446 46.3963 36.2446Z"
            fill="white"
          />
          <path
            d="M56.5692 36.2446H50.9765C50.3886 36.2446 49.9121 36.722 49.9121 37.311V40.4389C49.9121 41.0278 50.3886 41.5053 50.9765 41.5053H56.5692C57.157 41.5053 57.6336 41.0278 57.6336 40.4389V37.311C57.6336 36.722 57.157 36.2446 56.5692 36.2446Z"
            fill="white"
          />
          <path
            d="M36.2303 44.213H30.6376C30.0498 44.213 29.5732 44.6904 29.5732 45.2794V48.4073C29.5732 48.9962 30.0498 49.4736 30.6376 49.4736H36.2303C36.8182 49.4736 37.2947 48.9962 37.2947 48.4073V45.2794C37.2947 44.6904 36.8182 44.213 36.2303 44.213Z"
            fill="white"
          />
          <path
            d="M46.3963 44.213H40.8036C40.2158 44.213 39.7393 44.6904 39.7393 45.2794V48.4073C39.7393 48.9962 40.2158 49.4736 40.8036 49.4736H46.3963C46.9842 49.4736 47.4607 48.9962 47.4607 48.4073V45.2794C47.4607 44.6904 46.9842 44.213 46.3963 44.213Z"
            fill="white"
          />
          <path
            d="M56.5692 44.213H50.9765C50.3886 44.213 49.9121 44.6904 49.9121 45.2794V48.4073C49.9121 48.9962 50.3886 49.4736 50.9765 49.4736H56.5692C57.157 49.4736 57.6336 48.9962 57.6336 48.4073V45.2794C57.6336 44.6904 57.157 44.213 56.5692 44.213Z"
            fill="white"
          />
          <path
            d="M36.2303 51.5482H30.6376C30.0498 51.5482 29.5732 52.0256 29.5732 52.6146V55.7425C29.5732 56.3314 30.0498 56.8088 30.6376 56.8088H36.2303C36.8182 56.8088 37.2947 56.3314 37.2947 55.7425V52.6146C37.2947 52.0256 36.8182 51.5482 36.2303 51.5482Z"
            fill="white"
          />
          <path
            d="M46.3963 51.5482H40.8036C40.2158 51.5482 39.7393 52.0256 39.7393 52.6146V55.7425C39.7393 56.3314 40.2158 56.8088 40.8036 56.8088H46.3963C46.9842 56.8088 47.4607 56.3314 47.4607 55.7425V52.6146C47.4607 52.0256 46.9842 51.5482 46.3963 51.5482Z"
            fill="white"
          />
          <path
            d="M56.5692 51.5482H50.9765C50.3886 51.5482 49.9121 52.0256 49.9121 52.6146V55.7425C49.9121 56.3314 50.3886 56.8088 50.9765 56.8088H56.5692C57.157 56.8088 57.6336 56.3314 57.6336 55.7425V52.6146C57.6336 52.0256 57.157 51.5482 56.5692 51.5482Z"
            fill="white"
          />
          <path
            d="M53.8533 63.4849V72.8751C53.8533 73.3774 53.6542 73.859 53.2997 74.2141C52.9453 74.5692 52.4645 74.7687 51.9633 74.7687H49.9119V63.4849H44.0096V74.7687H35.2238C34.7225 74.7687 34.2418 74.5692 33.8873 74.2141C33.5329 73.859 33.3337 73.3774 33.3337 72.8751V63.4849H30.1084V72.8751C30.1101 74.2338 30.6496 75.5364 31.6085 76.4971C32.5675 77.4579 33.8676 77.9983 35.2238 78.0001H51.9955C53.3517 77.9983 54.6518 77.4579 55.6107 76.4971C56.5697 75.5364 57.1092 74.2338 57.1109 72.8751V63.4849H53.8533Z"
            fill="white"
          />
          <path
            d="M67.9996 34.0214C67.9996 33.3004 67.4162 32.7159 66.6966 32.7159C65.9769 32.7159 65.3936 33.3004 65.3936 34.0214V58.7218C65.3936 59.4428 65.9769 60.0273 66.6966 60.0273C67.4162 60.0273 67.9996 59.4428 67.9996 58.7218V34.0214Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_330_204">
            <rect
              width="44"
              height="64"
              fill="white"
              transform="translate(24 14)"
            />
          </clipPath>
        </defs>
      </svg>,
      <svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.0365"
          cy="45.0365"
          r="45.0365"
          fill="#00CDFF"
          fill-opacity="0.6"
        />
        <path
          d="M65.2802 24.8211C65.2614 24.6889 65.1968 24.5674 65.0977 24.4776C64.9985 24.3878 64.871 24.3353 64.7371 24.3292C64.4903 24.3292 60.1417 24.2308 60.1417 24.2308C60.1417 24.2308 57.4743 21.6704 56.4856 20.6853V73.9016L72 70.0647C72 70.0647 65.3296 25.1162 65.2802 24.8211ZM52.9776 20.6853C52.7406 19.9405 52.4429 19.2162 52.0876 18.5197C50.7989 16.0589 48.8758 14.7246 46.6022 14.7246C46.4361 14.7188 46.2701 14.7354 46.1084 14.7738C46.0591 14.6754 45.9603 14.6262 45.9109 14.5278C44.9235 13.4493 43.6398 12.9574 42.1067 13.0029C39.1443 13.1013 36.1819 15.2165 33.8058 19.0079C32.1258 21.6667 30.8433 25.0142 30.4952 27.6237C27.086 28.6568 24.7148 29.3959 24.6654 29.4451C22.9374 29.9862 22.8868 30.0353 22.6905 31.6587C22.5424 32.8884 18 67.5461 18 67.5461L55.3487 74V20.095C55.1669 20.1018 54.9856 20.1183 54.8056 20.1442C54.8056 20.1442 54.1144 20.341 52.9776 20.6853ZM46.159 22.803C44.1841 23.3933 42.008 24.082 39.8837 24.7227C40.4761 22.4082 41.6623 20.095 43.046 18.5738C43.5891 18.0327 44.331 17.392 45.1703 16.9984C46.0109 18.7656 46.2084 21.1785 46.159 22.803ZM42.1067 15.0246C42.7291 15.0051 43.3449 15.1566 43.8866 15.4624C43.0966 15.856 42.3054 16.4967 41.5648 17.2346C39.6874 19.2539 38.2543 22.3996 37.6618 25.4065C35.8819 25.9488 34.1032 26.4899 32.4776 26.9818C33.5589 22.2607 37.5606 15.123 42.1067 15.0246ZM36.3757 42.1007C36.5731 45.2502 44.9235 45.9401 45.4172 53.3729C45.7628 59.2316 42.3042 63.2185 37.3138 63.5149C31.2865 63.9084 27.976 60.3642 27.976 60.3642L29.2597 54.9532C29.2597 54.9532 32.5702 57.4644 35.2388 57.2676C36.9669 57.1692 37.6112 55.7414 37.5606 54.7564C37.3138 50.6219 30.4952 50.8678 30.0509 44.0745C29.6559 38.3634 33.4108 32.6044 41.7117 32.062C44.921 31.8653 46.554 32.6535 46.554 32.6535L44.6766 39.7371C44.6766 39.7371 42.5523 38.7533 40.0318 38.95C36.3757 39.1972 36.3263 41.5092 36.3757 42.1007ZM48.1352 22.2115C48.1352 20.7357 47.9377 18.6181 47.2453 16.8459C49.5189 17.2887 50.6051 19.7974 51.1001 21.326C50.2106 21.572 49.2223 21.8671 48.1352 22.2115Z"
          fill="white"
        />
      </svg>,
      <svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.0365"
          cy="45.0365"
          r="45.0365"
          fill="#00CDFF"
          fill-opacity="0.6"
        />
        <path
          d="M63.0607 34.791L22.0791 24.9832C19.8071 24.4395 17.5402 25.7989 17.0095 28.0162L9.961 57.4683C9.43035 59.6856 10.8362 61.924 13.1082 62.4677L54.0898 72.2755C56.3619 72.8193 58.6288 71.4599 59.1594 69.2426L66.208 39.7905C66.7386 37.5732 65.3327 35.3348 63.0607 34.791ZM21.6304 29.1221L61.5871 38.6846C61.8689 38.752 62.0455 39.0331 61.9794 39.3093L61.1384 42.8234L20.1568 33.0156L20.9978 29.5015C21.0639 29.2253 21.3486 29.0546 21.6304 29.1221ZM54.5385 68.1367L14.5819 58.5742C14.3 58.5067 14.1235 58.2256 14.1896 57.9495L17.5937 43.7255L58.5753 53.5333L55.1712 67.7573C55.1051 68.0334 54.8204 68.2042 54.5385 68.1367ZM28.3629 53.026L27.5619 56.3728C27.4298 56.925 26.8604 57.2665 26.2967 57.1316L20.1469 55.6598C19.5831 55.5249 19.23 54.9627 19.3622 54.4104L20.1632 51.0636C20.2953 50.5114 20.8647 50.1699 21.4284 50.3049L27.5782 51.7766C28.142 51.9116 28.4951 52.4738 28.3629 53.026ZM44.7624 56.9507L43.9614 60.2976C43.8292 60.8498 43.2599 61.1912 42.6961 61.0563L31.0798 58.2763C30.5161 58.1414 30.163 57.5792 30.2952 57.0269L31.0961 53.6801C31.2283 53.1279 31.7977 52.7864 32.3614 52.9214L43.9777 55.7014C44.5414 55.8363 44.8945 56.3985 44.7624 56.9507Z"
          fill="white"
        />
        <path
          d="M84.3467 41.2156C83.9603 27.5231 73.0095 16.5771 59.3222 16.1911C58.8075 16.1765 58.3789 16.5948 58.3753 17.1101L58.3566 19.8498C58.3529 20.3414 58.7402 20.7392 59.2312 20.7552C70.4564 21.1257 79.4125 30.0794 79.783 41.307C79.799 41.798 80.1972 42.1849 80.6884 42.1816L83.428 42.1628C83.943 42.1589 84.3612 41.7303 84.3467 41.2156ZM75.2778 41.3652C74.8366 32.6473 67.8808 25.7005 59.1726 25.2599C58.6508 25.2334 58.2121 25.6547 58.21 26.1772L58.1985 28.9256C58.1965 29.4043 58.5641 29.8044 59.0421 29.8341C65.324 30.2234 70.3154 35.2279 70.7033 41.4953C70.733 41.9733 71.1327 42.3413 71.6118 42.3389L74.3602 42.3274C74.8831 42.3257 75.3043 41.8862 75.2778 41.3652Z"
          fill="white"
        />
      </svg>,
    ],
    cardsData: [
      {
        heading: "eCommerce store development",
        description:
          "A well thought out and implemented web store is key in scaling your eCommerce sales channel and business",
        image: eCommerce1,
      },
      {
        heading: "Marketing integrations",
        description:
          "Once acquired the customer`s life time value could be multiplied by optimized marketing and sales process integrations",
        image: eCommerce2,
      },
      {
        heading: "Sales funnels",
        description:
          "Automating and optimizing your sales funnels lets your business scale with ease",
        image: eCommerce3,
      },
    ],
  },
  socialMedia: {
    heading: "Design and Advertising",
    secondaryHeading: "for social media",
    headingIcons: [
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25.7224"
          cy="25.7224"
          r="25.7224"
          fill="#698ADC"
          fill-opacity="0.6"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.5581 16.6659C31.7564 16.5056 30.6737 16.3858 29.9927 16.3858C28.1489 16.3858 28.0291 17.1875 28.0291 18.4701V20.7535H32.6383L32.2365 25.4835H28.0291V39.8703H22.258V25.4835H19.2917V20.7535H22.258V17.8279C22.258 13.8204 24.1414 11.5757 28.8704 11.5757C30.5134 11.5757 31.7159 11.8162 33.2787 12.1369L32.5581 16.6659Z"
          fill="white"
        />
      </svg>,
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="26.2046"
          cy="25.7224"
          r="25.7224"
          fill="#698ADC"
          fill-opacity="0.6"
        />
        <path
          d="M26.2052 13.0696C30.3261 13.0696 30.8142 13.0854 32.4416 13.1596C33.9464 13.2282 34.7636 13.4796 35.3074 13.691C36.0278 13.971 36.5419 14.3054 37.0819 14.8454C37.622 15.3855 37.9565 15.8996 38.2364 16.62C38.4478 17.1639 38.6992 17.9811 38.7678 19.4858C38.8421 21.1132 38.8578 21.6013 38.8578 25.7222C38.8578 29.8431 38.8421 30.3312 38.7678 31.9586C38.6992 33.4634 38.4478 34.2806 38.2364 34.8244C37.9565 35.5448 37.622 36.0589 37.082 36.5989C36.5419 37.139 36.0278 37.4735 35.3074 37.7534C34.7636 37.9648 33.9464 38.2162 32.4416 38.2848C30.8145 38.3591 30.3264 38.3748 26.2052 38.3748C22.084 38.3748 21.596 38.3591 19.9687 38.2848C18.464 38.2162 17.6468 37.9648 17.103 37.7534C16.3826 37.4735 15.8685 37.139 15.3284 36.5989C14.7884 36.0589 14.4539 35.5448 14.1739 34.8244C13.9626 34.2806 13.7111 33.4634 13.6425 31.9586C13.5683 30.3312 13.5525 29.8431 13.5525 25.7222C13.5525 21.6013 13.5683 21.1132 13.6425 19.4858C13.7111 17.9811 13.9626 17.1639 14.1739 16.62C14.4539 15.8996 14.7883 15.3855 15.3284 14.8455C15.8685 14.3054 16.3826 13.971 17.103 13.691C17.6468 13.4796 18.464 13.2282 19.9687 13.1596C21.5961 13.0854 22.0843 13.0696 26.2052 13.0696ZM26.2052 10.2888C22.0137 10.2888 21.4881 10.3066 19.842 10.3817C18.1993 10.4566 17.0774 10.7175 16.0957 11.099C15.0808 11.4934 14.2201 12.0212 13.3621 12.8791C12.5041 13.7372 11.9763 14.5979 11.582 15.6128C11.2004 16.5944 10.9395 17.7163 10.8646 19.359C10.7895 21.0052 10.7717 21.5308 10.7717 25.7222C10.7717 29.9137 10.7895 30.4393 10.8646 32.0854C10.9395 33.7281 11.2004 34.85 11.582 35.8317C11.9763 36.8466 12.5041 37.7073 13.3621 38.5653C14.2201 39.4233 15.0808 39.951 16.0957 40.3454C17.0774 40.7269 18.1993 40.9878 19.842 41.0627C21.4881 41.1379 22.0137 41.1556 26.2052 41.1556C30.3967 41.1556 30.9222 41.1379 32.5684 41.0627C34.2111 40.9878 35.333 40.7269 36.3147 40.3454C37.3296 39.951 38.1903 39.4233 39.0483 38.5653C39.9063 37.7073 40.434 36.8466 40.8284 35.8317C41.2099 34.85 41.4708 33.7281 41.5458 32.0854C41.6209 30.4393 41.6386 29.9137 41.6386 25.7222C41.6386 21.5308 41.6209 21.0052 41.5458 19.359C41.4708 17.7163 41.2099 16.5944 40.8284 15.6128C40.434 14.5979 39.9063 13.7372 39.0483 12.8791C38.1903 12.0212 37.3296 11.4934 36.3147 11.099C35.333 10.7175 34.2111 10.4566 32.5684 10.3817C30.9222 10.3066 30.3967 10.2888 26.2052 10.2888Z"
          fill="white"
        />
        <path
          d="M26.2124 17.8047C21.8354 17.8047 18.2871 21.3529 18.2871 25.7299C18.2871 30.107 21.8354 33.6552 26.2124 33.6552C30.5894 33.6552 34.1377 30.107 34.1377 25.7299C34.1377 21.3529 30.5894 17.8047 26.2124 17.8047ZM26.2124 30.8744C23.3712 30.8744 21.0679 28.5712 21.0679 25.7299C21.0679 22.8887 23.3712 20.5855 26.2124 20.5855C29.0536 20.5855 31.3569 22.8887 31.3569 25.7299C31.3569 28.5712 29.0536 30.8744 26.2124 30.8744Z"
          fill="white"
        />
        <path
          d="M36.3022 17.4873C36.3022 18.5101 35.473 19.3393 34.4501 19.3393C33.4273 19.3393 32.5981 18.5101 32.5981 17.4873C32.5981 16.4645 33.4273 15.6353 34.4501 15.6353C35.473 15.6353 36.3022 16.4645 36.3022 17.4873Z"
          fill="white"
        />
      </svg>,
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25.9636"
          cy="25.7224"
          r="25.7224"
          fill="#698ADC"
          fill-opacity="0.6"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.4968 15.9196C41.0101 16.4329 41.3799 17.0717 41.5695 17.7724C42.6613 22.1671 42.4091 29.1079 41.5907 33.6722C41.4011 34.3729 41.0313 35.0117 40.518 35.525C40.0047 36.0383 39.3659 36.4082 38.6652 36.5978C36.1 37.2974 25.7757 37.2974 25.7757 37.2974C25.7757 37.2974 15.4514 37.2974 12.8862 36.5978C12.1855 36.4082 11.5467 36.0383 11.0334 35.525C10.5201 35.0117 10.1503 34.3729 9.96065 33.6722C8.8625 29.2966 9.16354 22.3515 9.93945 17.7936C10.1291 17.0929 10.4989 16.4541 11.0122 15.9408C11.5255 15.4275 12.1643 15.0576 12.865 14.868C15.4302 14.1684 25.7545 14.1472 25.7545 14.1472C25.7545 14.1472 36.0788 14.1472 38.644 14.8468C39.3447 15.0364 39.9835 15.4063 40.4968 15.9196ZM31.0333 25.7223L22.4685 30.683V20.7615L31.0333 25.7223Z"
          fill="white"
        />
      </svg>,
    ],
    cardsData: [
      {
        heading: "Video and static content",
        description:
          "Having engaging content allows your business to have a strong connection with your customer base",
        image: social1,
      },
      {
        heading: "Communication strategies",
        description:
          "Planning communications across platforms allows for consistency, high reach and better results",
        image: social2,
      },
      {
        heading: "Performance marketing",
        description:
          "360 degree view of all paid marketing efforts ensures all add spent is optimized to maximize results",
        image: social3,
      },
    ],
  },
};

// const dataSelector = (page) => {};