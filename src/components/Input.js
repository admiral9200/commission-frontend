const Input = ({
    idText,
    name,
    type,
    autoComplete,
}) => {
    return (
        <input
            id={idText}
            name={name}
            type={type}
            autoComplete={autoComplete}
            required
            className="block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]"
        />
    )
}

export default Input;