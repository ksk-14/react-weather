const Results = (props) => {
  return (
    <div>
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.temprature && <div>{props.results.temprature}<sapn>℃</sapn></div>}
      {props.results.conditionText && 
        <div>
          <img src={props.results.icon}alt="icon"/><span>{props.results.conditionText}</span>
        </div>
      }
    </div>
  );
};

export default Results; 