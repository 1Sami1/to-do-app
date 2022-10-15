export default function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[newDate.getMonth()];
    
    
    
    return `${name<10?`0${name}`:`${name}`}, ${date}th`
    }