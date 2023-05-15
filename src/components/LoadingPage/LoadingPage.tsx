import { Box, Typography } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom"
import classes from "./_.module.scss"
import { combineClasses } from "@/utils/styles"

export const LoadingScreen: React.FC = () => {
  return (
    <Box className={combineClasses([classes.Container, classes.Screen])}>
      <Box className={classes.Content}>
        <Illustration trackColor="#e2e8f0" />

        <Typography className={classes.Title}>Preparing your experience</Typography>
        <Typography className={classes.Subtitle}>Setting up the info required</Typography>
      </Box>
    </Box>
  )
}

const LoadingPage: React.FC = () => {
  return ReactDOM.createPortal(
    <Box className={classes.Container}>
      <Box className={classes.Content}>
        <Illustration />

        <Typography className={classes.Title}>Preparing your experience</Typography>
        <Typography className={classes.Subtitle}>Setting up the info required</Typography>
      </Box>
    </Box>,
    document.getElementById("overlay") as HTMLElement
  )
}

export default LoadingPage

const Illustration: React.FC<{ trackColor?: string }> = ({ trackColor = "#F2F4F7" }) => {
  return (
    <svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.Loading}
    >
      <path
        d="M121.571 64C121.571 71.0351 120.186 78.0013 117.493 84.5009C114.801 91.0005 110.855 96.9062 105.881 101.881C100.906 106.855 95.0004 110.801 88.5008 113.494C82.0012 116.186 75.035 117.571 67.9999 117.571C60.9648 117.571 53.9986 116.186 47.499 113.494C40.9994 110.801 35.0937 106.855 30.1192 101.881C25.1446 96.9061 21.1986 91.0005 18.5063 84.5009C15.8141 78.0013 14.4285 71.0351 14.4285 64C14.4285 56.9649 15.8141 49.9987 18.5064 43.4991C21.1986 36.9995 25.1446 31.0938 30.1192 26.1193C35.0938 21.1447 40.9994 17.1987 47.499 14.5064C53.9986 11.8142 60.9648 10.4286 67.9999 10.4286C75.035 10.4286 82.0012 11.8142 88.5008 14.5065C95.0004 17.1987 100.906 21.1447 105.881 26.1193C110.855 31.0939 114.801 36.9995 117.493 43.4991C120.186 49.9987 121.571 56.9649 121.571 64L121.571 64Z"
        stroke={trackColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={classes.Loading_Progress}
        d="M67.9999 10.4286C75.035 10.4286 82.0012 11.8142 88.5008 14.5065C95.0004 17.1987 100.906 21.1447 105.881 26.1193C110.855 31.0939 114.801 36.9995 117.493 43.4991C120.186 49.9987 121.571 56.9649 121.571 64"
        stroke="url(#paint0_linear_1907_14741)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g filter="url(#filter0_d_1907_14741)">
        <circle cx="68" cy="64" r="36" fill="url(#paint1_linear_1907_14741)" />
      </g>
      <path
        className={classes.Logo}
        d="M81.9734 60.8C80.4801 54.24 74.7334 49.6667 68.0001 49.6667C61.2667 49.6667 55.5201 54.24 54.0267 60.8C53.8667 61.4933 54.0267 62.2 54.4801 62.76C54.9334 63.32 55.6001 63.64 56.3201 63.64H79.6934C80.4134 63.64 81.0801 63.32 81.5334 62.76C81.9734 62.2 82.1334 61.48 81.9734 60.8Z"
        fill="white"
      />
      <path
        className={classes.Logo_Down}
        opacity="0.4"
        d="M65.6532 67.6533C65.2132 67.2133 64.6265 66.96 63.9998 66.96H57.2265C56.4132 66.96 55.6665 67.3733 55.2398 68.0667C54.8132 68.7467 54.7732 69.56 55.1198 70.28C56.7598 73.64 59.7198 76.28 63.2398 77.52C63.4798 77.6 63.7465 77.6533 63.9998 77.6533C64.4665 77.6533 64.9332 77.5067 65.3332 77.2267C65.9598 76.7867 66.3332 76.0667 66.3332 75.3067L66.3465 69.3067C66.3332 68.68 66.0932 68.0933 65.6532 67.6533Z"
        fill="white"
      />
      <path
        opacity="0.4"
        className={classes.Logo_Down}
        d="M80.7465 68.1333C80.3198 67.44 79.5732 67.0133 78.7465 67.0133L71.9998 67C71.3732 67 70.7865 67.24 70.3465 67.68C69.9065 68.12 69.6665 68.7067 69.6665 69.3333L69.6798 75.3067C69.6798 76.0667 70.0532 76.7867 70.6798 77.2267C71.0798 77.5067 71.5465 77.6533 72.0132 77.6533C72.2665 77.6533 72.5198 77.6133 72.7598 77.52C76.2532 76.2933 79.2132 73.6667 80.8532 70.3467C81.1998 69.64 81.1598 68.8133 80.7465 68.1333Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1907_14741"
          x="0"
          y="0"
          width="136"
          height="136"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.882353 0 0 0 0 0.282353 0 0 0 0 0.14902 0 0 0 0.32 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1907_14741" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1907_14741" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_1907_14741"
          x1="14.4285"
          y1="117.571"
          x2="137.061"
          y2="95.1505"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1907_14741"
          x1="32"
          y1="100"
          x2="114.409"
          y2="84.9331"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
    </svg>
  )
}
