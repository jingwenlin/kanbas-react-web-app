function MapFunction(){
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;
    const squareLi = (a:number)=>{
        return <li>{a*a}</li>
    };
    
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    const squareLis = numberArray1.map(squareLi);


    return(
        <>
        <h4>Map</h4>
        squres = {squares}
        <br/>
        cubes = {cubes}
        <br/>
        <ul>
            {squareLis}
        </ul>
        <ol>
            {numberArray1.map((a)=>(
                <li key={a}>{a*a}</li>))}
        </ol>
        </>
    )
}

export default  MapFunction;