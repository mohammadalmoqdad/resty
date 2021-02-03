import "../scss/result.scss";
function Results(props) {
    console.log("prooops headers", props.headers)
    return (
        <div id="result">

            <pre role="pre">
                Headers: {JSON.stringify(props.headers, null, 2)}
             ,<br/>
             Result :{JSON.stringify(props.data, null, 2)}
            </pre>
        </div>
    );
}


export default Results;