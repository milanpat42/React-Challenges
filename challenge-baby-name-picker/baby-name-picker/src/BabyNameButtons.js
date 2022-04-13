function CreateBabyButton(props){
    return (
        <div className = 'baby-name'>
            <h1>{props.name}</h1>
            <h4>{props.sex}</h4>
        </div>
    )
}
export default CreateBabyButton