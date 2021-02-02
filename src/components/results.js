import "../scss/result.scss";
function Results(props) {
    return (
        <div id="result">

            <pre role="pre">
                Count: {JSON.stringify(props.count, null, 2)}
             ,
             Result :{JSON.stringify(props.data, null, 2)}
            </pre>
        </div>
    );
}


export default Results;