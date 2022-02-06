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
                cursor: 'pointer',
                borderBottomLeftRadius: 40,
                borderTopRightRadius: 40,
            }}
            onClick={handleClick}
        >{name}</button>
    )
}