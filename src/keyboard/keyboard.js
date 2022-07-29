export default function Keyboard({myGuess, setMyGuess, setGusses, gusses,rowNum,setRowNum,sol}) {
    const firstRow = ['ר','ק','א','ט','ו','ן','ם','פ'];
    const secondtRow = ['ש','ד','ג','כ','ע','י','ח','ל','ך','ף'];
    const thirdtRow = ['ז','ס','ב','ה','נ','מ','צ','ת','ץ'];

    const handleAddLetter = (e)=>{
        if (myGuess.length < 5)
            setMyGuess(myGuess + e);
    }
    const handleRemoveLetter = ()=>{
        setMyGuess(myGuess.slice(0,-1))
    }

    const handleSumbit = ()=>{
        if (myGuess.length === 5){
            let tmpArr = [...gusses]
            let tab = [...myGuess];
            let tmpGuess = tab.map((letter,index) => {
                if (sol[index] === letter)
                    return {key: letter, color: 'green'}
                else if (sol.includes(letter))
                    return {key: letter, color: 'yellow'}
                else{
                    return {key: letter, color: 'grey'}
                }
            })
            tmpArr[rowNum] = tmpGuess
            setGusses(tmpArr)
            setMyGuess('')
            setRowNum(rowNum+1);
        }
    }

    const keyboard1 = firstRow.map((letter) =>
        <button  onClick={()=>handleAddLetter(letter)} style={{padding:6,width:'28px', overflow:'hidden', borderRadius:6, margin: 2, backgroundColor: 'rgb(224, 223, 223)' , fontSize:'25px'}}
        key={letter}>
        {letter}
        </button>
    )
    keyboard1.push( <button onClick={()=>handleRemoveLetter()} style={{color:'grey', padding:6,width:'30px', overflow:'hidden', borderRadius:6, margin: 2, backgroundColor: 'rgb(224, 223, 223)' , fontSize:'25px'}}
    key={'x'}>
    {'x'}
    </button>)
    const keyboard2 = secondtRow.map((letter) =>
    <button onClick={()=>handleAddLetter(letter)} style={{padding:6,width:'28px', overflow:'hidden', borderRadius:6, margin: 2, backgroundColor: 'rgb(224, 223, 223)' , fontSize:'25px'}}
    key={letter}>
    {letter}
    </button>
)
    const keyboard3 = [<button onClick={handleSumbit} style={{padding:3 ,width:'48px', overflow:'hidden', height:'45px', borderRadius:6, margin: 2, backgroundColor: 'rgb(224, 223, 223)' , fontSize:'13px'}}
    key={'etner'}>
    enter
    </button>]
    keyboard3.push.apply(keyboard3, thirdtRow.map((letter) =>
    <button onClick={()=>handleAddLetter(letter)} style={{padding:6,width:'28px', overflow:'hidden', borderRadius:6, margin: 2, backgroundColor: 'rgb(224, 223, 223)' , fontSize:'25px'}}
    key={letter}>
    {letter}
    </button>
    ))

      return (
        <div style={{alignItems:'center',
                    flex: 1,
                    flexDirection: 'row'}}>
            <div style={{flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginLeft: 5,
                        marginRight: 5}}>
            <div>{keyboard1}</div>
            <div> {keyboard2}</div>
            <div>{keyboard3}</div>
            </div> 
      </div>         
      )
      
  }