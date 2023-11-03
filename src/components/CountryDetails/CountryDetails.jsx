import CountryData from "../CountryData/CountryData";
const CountryDetails = (props) => {
    return (
        <div>
            {/* <h4>Country Details: {country.name.common}</h4> */}
            <CountryData {...props}></CountryData>
        </div >

    );
};

export default CountryDetails;