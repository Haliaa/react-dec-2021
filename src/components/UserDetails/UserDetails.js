const UserDetails = ({userDetails, getUserId}) => {
    const {id, name, username, email} = userDetails
    return (
        <div>
            <div><h3>id:{id}</h3></div>
            <div><h3>name:{name}</h3></div>
            <div><h3>username:{username}</h3></div>
            <div><h3>email:{email}</h3></div>
            <div>
                <button onClick={() => {
                    getUserId(id)
                }}>Get Posts
                </button>
            </div>
        </div>
    );
};

export {UserDetails};