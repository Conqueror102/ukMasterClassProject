

const Button = ({ text, bg, color, className, onclick }) => {
  return (
    <button onClick={onclick} className={`${bg} p-3 ${color} rounded-md font-medium ${className} cursor-pointer`}>{text}</button>
  )
}

export default Button