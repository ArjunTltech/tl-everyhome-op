<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="error-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffebee;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ffcdd2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="800" height="600" fill="url(#error-gradient)"/>
  
  <g transform="translate(400, 300) scale(0.7)">
    <path d="M-100,-150 L100,-150 L150,0 L100,150 L-100,150 L-150,0 Z" 
          fill="#e53935" opacity="0.2"/>
    
    <text x="0" y="50" text-anchor="middle" font-size="180" font-weight="bold" fill="#d32f2f">
      400
    </text>
    
    <text x="0" y="150" text-anchor="middle" font-size="30" fill="#b71c1c">
      Bad Request
    </text>
    
    <text x="0" y="200" text-anchor="middle" font-size="20" fill="#c62828">
      Your request could not be processed
    </text>
  </g>
  
  <text x="400" y="550" text-anchor="middle" font-size="20" fill="#b71c1c">
    Check your request and try again
  </text>
</svg>