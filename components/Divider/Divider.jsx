import './divider.css'

export default function Divider({ style, className = '' }) {
  return (
    <div className='container-divider'>
      <div className={`divider ${className}`} style={style}></div>
    </div>
  )
}
