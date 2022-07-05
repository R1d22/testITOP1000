export default function Button( {text, size, color, hoverColor, activeColor, onclick }) {
    return (
      <button onClick={onclick} className={`w-${size} bg-[#${color}] hover:bg-[#${hoverColor}] active:bg-[#${activeColor}]`}>{text}</button>
    );
}
