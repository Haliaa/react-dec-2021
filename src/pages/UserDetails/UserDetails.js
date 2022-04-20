const UserDetails = ({user}) => {
    const {id, name, username, email} = user
    return (
        <div>
            <div><h3>id:{id}</h3></div>
            <hr/>
            <div>name:{name}</div>
            <hr/>
            <div>username:{username}</div>
            <hr/>
            <div>email:{email}</div>
            <hr/>
        </div>
    );
};

export {UserDetails};