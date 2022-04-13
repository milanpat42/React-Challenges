import CreateBabyButton from "./BabyNameButtons";

function DisplayBabyNames(props) {
  const babyArr = props.babyData.map((baby, index) => {
    return <CreateBabyButton name={baby.name} sex={baby.sex} key={baby.name} />;
  });
  return <div className="baby-wrapper">{babyArr}</div>;
}

export default DisplayBabyNames;
