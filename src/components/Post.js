const Post = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            {id} -- 'userId': {userId} -- 'title': {title} -- 'body': {body}
        </div>
    );
};

export default Post;