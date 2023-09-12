
const HandleLogOut = () => {
    localStorage.removeItem('token')
    return;
};

export default HandleLogOut;
