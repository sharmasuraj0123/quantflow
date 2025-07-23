"use client"

import React from "react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#3730a3" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="url(#logoGradient)"
          className="drop-shadow-lg"
        />
        
        {/* Data flow nodes */}
        <circle cx="10" cy="10" r="2" fill="white" opacity="0.9" />
        <circle cx="22" cy="10" r="2" fill="white" opacity="0.9" />
        <circle cx="16" cy="16" r="2.5" fill="white" />
        <circle cx="10" cy="22" r="2" fill="white" opacity="0.9" />
        <circle cx="22" cy="22" r="2" fill="white" opacity="0.9" />
        
        {/* Connecting lines representing data flow */}
        <path
          d="M10 10 L16 16 L22 10"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.8"
          fill="none"
        />
        <path
          d="M10 22 L16 16 L22 22"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.8"
          fill="none"
        />
        <path
          d="M10 10 L10 22"
          stroke="white"
          strokeWidth="1"
          opacity="0.6"
          fill="none"
        />
        <path
          d="M22 10 L22 22"
          stroke="white"
          strokeWidth="1"
          opacity="0.6"
          fill="none"
        />
        
        {/* Central Q letter */}
        <text
          x="16"
          y="20"
          textAnchor="middle"
          className="fill-white font-bold text-xs"
          style={{ fontSize: '10px' }}
        >
          Q
        </text>
      </svg>
    </div>
  )
}
