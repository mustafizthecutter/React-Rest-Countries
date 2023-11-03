const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <h4>Country Name: {country.name.common} </h4>
        </div>
    );
};

export default CountryData;