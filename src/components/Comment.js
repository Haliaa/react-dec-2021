const Comment = ({comment}) => {
    const {id, postId, body} = comment
    return (
        <div>
            {id} -- 'postId': {postId} -- 'body': {body}
        </div>
    );
};

export default Comment;