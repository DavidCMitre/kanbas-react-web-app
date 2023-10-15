function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    console.log("Array Index and Length");
    console.log(length1);
    console.log(index1);

    return(
        <div>
            <h4>Array Index and Length</h4>
            length1 = {length1} <br/>
            index1 = {index1} <br/>
        </div>
    )
}
export default ArrayIndexAndLength