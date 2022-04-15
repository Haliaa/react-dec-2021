const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <div><h5>"userId": {userId}</h5></div>
            <div>"id": {id}</div>
            <div>"title": {title}</div>
            <div>"body": {body}</div>
        </div>
    );
};

export {Post};