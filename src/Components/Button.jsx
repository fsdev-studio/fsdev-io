export default function Button({ baseColor, name, handleClick }) {
    return (
        <button
            style={{
                width: 100,
                height: 50,
                color: 'white',
                backgroundColor: baseColor,
                borderColor: "transparent",
                fontWeight: 'bold',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >{name}</button>
    )
}