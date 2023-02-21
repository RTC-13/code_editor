import React from 'react'
const Button = ({title, onClick}) => {
  return (
    <div>
      <button
        style={{
          maxWidth: "140px",
          minWidth: "80px",
          height: "30px",
          marginRight: "5px",
          borderRadius: "5px",
          backgroundColor: "Highlight"
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}
export default Button
