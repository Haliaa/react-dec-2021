const User = ({user, setUserDetails, trigger}) => {
    const {id, name, username} = user
    return (
        <div>
            {id}.) {name} -- {username}
            <button onClick={() => {
                setUserDetails(user);
                trigger()
            }}>Get Details
            </button>
        </div>
    );
};

export {User};