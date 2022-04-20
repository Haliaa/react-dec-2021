const PostDetails = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <div><h3>id:{id}</h3></div>
            <hr/>
            <div>userId:{userId}</div>
            <hr/>
            <div>title:{title}</div>
            <hr/>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export {PostDetails};