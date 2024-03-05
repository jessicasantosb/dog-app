import React from 'react'

function ThemeToggleBtn() {
    const handleChangeTheme = () => {
        document.body.classList.toggle("dark-theme")
    }

  return (
    <button onClick={handleChangeTheme}>
        mudar tema
    </button>
  )
}

export default ThemeToggleBtn
