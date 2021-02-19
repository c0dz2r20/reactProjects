const Header = () => {
    return (
        <div className='header'>
            <h5>Weather App</h5>
        </div>
    )
}

const Outputs = props => {
    if (props.result === null) {
        return("")
    }
    else {
        return (
        
            <div className='outputs'>
                <p className="locName">
                    Weather for <strong>{props.result.name}</strong>
                </p>
                <table className="table table-primary">
                    <thead>
                        <tr>
                        <th scope="col">Weather</th>
                        <th scope="col">Min Temp</th>
                        <th scope="col">Max Temp</th>
                        <th scope="col">Visibility</th>
                        <th scope="col">Wind Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.result.weather[0].description}</td>
                            <td>{props.result.main.temp_min }</td>
                            <td>{props.result.main.temp_max }</td>
                            <td>{props.result.visibility }</td>
                            <td>{props.result.wind.speed }</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

const Inputs = props => {

    const [user, setUser] = React.useState('')
    const [finalLocation, setFinalLocation] = React.useState('')
    const [result, setResult] = React.useState(null)

    function fetchLocation(e) {
        setUser(e.target.value)
    }
    
    function fetchDetails(e) {
        let baseURL = '//api.openweathermap.org/data/2.5/weather?q='
        const API_KEY = '&appid=fdb0eecafa49c2ed186b74018b5ad0b8'
        let total = baseURL + user + API_KEY
        fetch(total)
            .then(resp => resp.json())
            .then(data => {
                setResult (data)
            })
        setFinalLocation(user)
        setUser('')
    }
    return (
        <div className='inputs'>
            <p className="label">Enter the location to find the weather.</p>
            <input type="text" className='loc-input' autoFocus placeholder='Enter a location' name="" id="location" onChange={fetchLocation} value={user} />
            <button onClick={fetchDetails}>Get Details</button>
            <Outputs result={result}/>
           
        </div>
    )
}

const Sample = () => {
    const [user, setUser] = React.useState('')
    const handleChange = e => {
        setUser(e.target.value)
    }
    const handleSubmit = e => {
        console.log(user);
        setUser('')
    }
    return (
        <div>
            <input type="text" name="" id="" value={user} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <Header />
            <Inputs />
            {/* <Sample /> */}
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))