
function Message() {
    const name = 'ABNER';
    if (name) {
        return <h1> Hello {name} </h1>;
    } else {
        return <h1> hello </h1>;
    }
}

export default Message;