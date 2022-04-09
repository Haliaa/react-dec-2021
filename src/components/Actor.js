
const Actor = ({name1, img1}) => {
    // const {name1,img1} = props //name1=props.name1, img1=props.img1
    return (
        <div>
            <h1>{name1}</h1>
            <img src={img1} alt={name1}/>
        </div>
    );
};


export default Actor;