import './index.scss'

const AnimatedLetters = ({ letterClass, strAarray, idx}) => {
   return (
    <span>
        {
            strAarray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
   )
};

export default AnimatedLetters;