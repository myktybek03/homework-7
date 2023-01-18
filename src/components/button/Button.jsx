import React from "react"

const Button = ({ bgcolor, color, title, onClick, width }) => {
  const styles = {
    backgroundColor: bgcolor,
    color: color,
    width: width,
    padding: "7px",
    borderRadius: "7px",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  }
  return (
    <div>
      <button style={styles} onClick={onClick}>
        {title}
      </button>
    </div>
  )
}

export default Button
