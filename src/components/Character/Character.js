const Character = ({character:{name, status, species, image}}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h4>{species}</h4>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};