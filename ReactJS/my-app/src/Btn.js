// function Btn() {
//     const clickHandler = 
//         () => console.log("Clicked");
//     return (
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     );
// }

// export default Btn;

// copy the code-> press and hold the ctrl key->select the code-> press and release the k button and click c-> release the ctrl key

function Btn() {
    const clickHandler = 
    () => console.log("Mouse over");
    return (
    <button onMouseOver={clickHandler}>
        Click me
    </button>
    );
}

export default Btn;