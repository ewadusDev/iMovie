import * as React from "react";
import { SVGProps } from "react";

export const Add = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#2A2A2A" />
    <circle
      cx={20}
      cy={20}
      r={19}
      stroke="#fff"
      strokeOpacity={0.5}
      strokeWidth={2}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M19.2 19.2V12h1.6v7.2H28v1.6h-7.2V28h-1.6v-7.2H12v-1.6h7.2Z"
      clipRule="evenodd"
    />
  </svg>
);

export const AddHover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle
      cx={20}
      cy={20}
      r={19}
      fill="#414141"
      stroke="#fff"
      strokeWidth={2}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M19.2 19.2V12h1.6v7.2H28v1.6h-7.2V28h-1.6v-7.2H12v-1.6h7.2Z"
      clipRule="evenodd"
    />
  </svg>
);

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#2A2A2A" />
    <circle
      cx={20}
      cy={20}
      r={19}
      stroke="#fff"
      strokeOpacity={0.5}
      strokeWidth={2}
    />
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeWidth={1.6}
      d="m14 18 6 6 6-6"
    />
  </svg>
);

export const ArrowDownHover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle
      cx={20}
      cy={20}
      r={19}
      fill="#414141"
      stroke="#fff"
      strokeWidth={2}
    />
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeWidth={1.6}
      d="m14 18 6 6 6-6"
    />
  </svg>
);

export const Mute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle
      cx={20}
      cy={20}
      r={19}
      stroke="#fff"
      strokeOpacity={0.2}
      strokeWidth={2}
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M20.342 14.066a.8.8 0 0 0-.8.096l-3.823 3.023h-2.92a.8.8 0 0 0-.799.8v4.798a.8.8 0 0 0 .8.8h2.919l3.783 3.023a.8.8 0 0 0 .496.176.729.729 0 0 0 .344-.08.799.799 0 0 0 .456-.72V14.786a.8.8 0 0 0-.456-.72Zm-1.144 10.253-2.703-2.16a.8.8 0 0 0-.496-.175h-2.4v-3.2H16a.8.8 0 0 0 .496-.176l2.703-2.159v7.87Zm7.126-3.935 1.44-1.432a.801.801 0 0 0-.261-1.31.802.802 0 0 0-.875.175l-1.432 1.44-1.431-1.44a.803.803 0 0 0-1.136 1.135l1.44 1.432-1.44 1.431a.8.8 0 0 0 .26 1.311.8.8 0 0 0 .876-.175l1.431-1.44 1.432 1.44a.8.8 0 0 0 1.31-.26.8.8 0 0 0-.175-.875l-1.44-1.432Z"
    />
  </svg>
);

export const MuteHover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle
      cx={20}
      cy={20}
      r={19}
      fill="#2A2A2A"
      stroke="#fff"
      strokeWidth={2}
    />
    <path
      fill="#fff"
      d="M20.342 14.066a.8.8 0 0 0-.8.096l-3.823 3.023h-2.92a.8.8 0 0 0-.799.8v4.798a.8.8 0 0 0 .8.8h2.919l3.783 3.023a.8.8 0 0 0 .496.176.729.729 0 0 0 .344-.08.799.799 0 0 0 .456-.72V14.786a.8.8 0 0 0-.456-.72Zm-1.144 10.253-2.703-2.16a.8.8 0 0 0-.496-.175h-2.4v-3.2H16a.8.8 0 0 0 .496-.176l2.703-2.159v7.87Zm7.126-3.935 1.44-1.432a.801.801 0 0 0-.261-1.31.802.802 0 0 0-.875.175l-1.432 1.44-1.431-1.44a.803.803 0 0 0-1.136 1.135l1.44 1.432-1.44 1.431a.8.8 0 0 0 .26 1.311.8.8 0 0 0 .876-.175l1.431-1.44 1.432 1.44a.8.8 0 0 0 1.31-.26.8.8 0 0 0-.175-.875l-1.44-1.432Z"
    />
  </svg>
);

export const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <circle cx={18} cy={18} r={18} fill="#fff" />
    <path
      fill="#2A2A2A"
      d="M26.38 17.137a1.2 1.2 0 0 1-.016 2.035l-12.536 7.704A1.2 1.2 0 0 1 12 25.854v-15.67a1.2 1.2 0 0 1 1.844-1.013l12.535 7.966Z"
    />
  </svg>
);

export const PlayHover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <circle cx={18} cy={18} r={18} fill="#E5E5E5" />
    <path
      fill="#2A2A2A"
      d="M26.38 17.137a1.2 1.2 0 0 1-.016 2.035l-12.536 7.704A1.2 1.2 0 0 1 12 25.854v-15.67a1.2 1.2 0 0 1 1.844-1.013l12.535 7.966Z"
    />
  </svg>
);

export const ThumUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#2A2A2A" />
    <circle
      cx={20}
      cy={20}
      r={19}
      stroke="#fff"
      strokeOpacity={0.5}
      strokeWidth={2}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M18.982 13.376v2.62c0 .176-.035.355-.109.521-1.163 2.636-2.88 3.928-4.525 4.222a.167.167 0 0 0-.091.047.059.059 0 0 0-.012.017v4.23s0 .002.003.004c.006.006.016.01.027.01 1.348-.082 2.222.062 2.893.29.33.113.596.24.82.351l.058.029c.204.1.355.174.517.232.091.032.367.073.847.095.449.02 1.004.023 1.596.013a71.863 71.863 0 0 0 3.322-.142l.02-.001h.02c.092 0 .15-.012.183-.022.03-.01.041-.02.043-.02.001-.002.006-.006.013-.02a.345.345 0 0 0 .028-.089c.046-.229-.004-.562-.074-.955a.99.99 0 0 1 .43-.997c.505-.334.518-.74.473-.876-.082-.253-.111-.628.102-.963.21-.33.205-.542.173-.672-.039-.159-.146-.316-.3-.466a1.058 1.058 0 0 1-.184-1.239c.085-.163.085-.27.073-.337a.558.558 0 0 0-.144-.263 1.15 1.15 0 0 0-.407-.284h-3.423v-2.238c0-1.966-.453-2.695-.826-2.97-.384-.281-.918-.267-1.546-.127Zm2.27-.912c.876.644 1.347 1.921 1.347 4.01v.958h2.223c.136 0 .262.036.35.066.098.034.202.081.304.137.202.111.43.276.626.496.196.22.38.518.448.888.061.33.023.677-.124 1.023.205.227.422.542.52.947.12.495.045 1.038-.285 1.595.206.716-.07 1.599-.841 2.191.058.34.12.818.034 1.247a1.445 1.445 0 0 1-.466.834c-.275.234-.622.333-.998.336-.851.057-2.163.124-3.364.143-.604.01-1.187.008-1.672-.014-.454-.02-.909-.061-1.197-.164-.234-.083-.451-.19-.643-.285l-.063-.03a5.45 5.45 0 0 0-.675-.291c-.492-.168-1.204-.302-2.428-.228A1.281 1.281 0 0 1 13 25.033v-4.23c0-.726.563-1.222 1.135-1.324 1.15-.205 2.568-1.144 3.603-3.486V13.37c0-.573.376-1.105.955-1.237.664-.151 1.697-.303 2.559.33Z"
      clipRule="evenodd"
    />
  </svg>
);

export const ThumUpHover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle
      cx={20}
      cy={20}
      r={19}
      fill="#414141"
      stroke="#fff"
      strokeWidth={2}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M18.982 13.376v2.62c0 .176-.035.355-.109.521-1.163 2.636-2.88 3.928-4.525 4.222a.167.167 0 0 0-.091.047.059.059 0 0 0-.012.017v4.23s0 .002.003.004c.006.006.016.01.027.01 1.348-.082 2.222.062 2.893.29.33.113.596.24.82.351l.058.029c.204.1.355.174.517.232.091.032.367.073.847.095.449.02 1.004.023 1.596.013a71.863 71.863 0 0 0 3.322-.142l.02-.001h.02c.092 0 .15-.012.183-.022.03-.01.041-.02.043-.02.001-.002.006-.006.013-.02a.345.345 0 0 0 .028-.089c.046-.229-.004-.562-.074-.955a.99.99 0 0 1 .43-.997c.505-.334.518-.74.473-.876-.082-.253-.111-.628.102-.963.21-.33.205-.542.173-.672-.039-.159-.146-.316-.3-.466a1.058 1.058 0 0 1-.184-1.239c.085-.163.085-.27.073-.337a.558.558 0 0 0-.144-.263 1.15 1.15 0 0 0-.407-.284h-3.423v-2.238c0-1.966-.453-2.695-.826-2.97-.384-.281-.918-.267-1.546-.127Zm2.27-.912c.876.644 1.347 1.921 1.347 4.01v.958h2.223c.136 0 .262.036.35.066.098.034.202.081.304.137.202.111.43.276.626.496.196.22.38.518.448.888.061.33.023.677-.124 1.023.205.227.422.542.52.947.12.495.045 1.038-.285 1.595.206.716-.07 1.599-.841 2.191.058.34.12.818.034 1.247a1.445 1.445 0 0 1-.466.834c-.275.234-.622.333-.998.336-.851.057-2.163.124-3.364.143-.604.01-1.187.008-1.672-.014-.454-.02-.909-.061-1.197-.164-.234-.083-.451-.19-.643-.285l-.063-.03a5.45 5.45 0 0 0-.675-.291c-.492-.168-1.204-.302-2.428-.228A1.281 1.281 0 0 1 13 25.033v-4.23c0-.726.563-1.222 1.135-1.324 1.15-.205 2.568-1.144 3.603-3.486V13.37c0-.573.376-1.105.955-1.237.664-.151 1.697-.303 2.559.33Z"
      clipRule="evenodd"
    />
  </svg>
);
