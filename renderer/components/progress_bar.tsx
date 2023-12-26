interface BarProps { 
    size?: number; 
    progress?: number; 
    trackWidth?: number; 
    trackColor?: string; 
    indicatorWidth?: number; 
    indicatorColor?: string; 
    indicatorCap?: "round" | "inherit" | "butt" | "square"; 
    label?: string; 
    labelColor?: string; 
}

export default function ProgressBar(props:BarProps) {
  let {
    size,
    progress,
    trackWidth,
    trackColor,
    indicatorWidth,
    indicatorColor,
    indicatorCap,
    label,
    labelColor,
  } = props

  const center = size / 2,
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - progress) / 100)


  return (
    <>
      <div
        className="svg-pi-wrapper"
        style={{ width: size, height: size }}
      >
        <svg
          className="svg-pi" 
          style={{ width: size, height: size }}
        >
          <circle
            className="svg-pi-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            className={`svg-pi-indicator`}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap}
          />
        </svg>
        <div 
            className="svg-pi-label text-[#fff]" 
          >
            <span className="svg-pi-label__loading">
              {label}
            </span>  
          </div>
      
      </div>
    </>
  )
}

