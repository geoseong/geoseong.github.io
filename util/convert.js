const getFormmatedDt = (formattedDtBefore) => {
  let set2Length = (val) => {return (val<10)?"0" + val:val;}
  let date = new Date(formattedDtBefore);
  let formattedDatetimeAfter = `${date.getFullYear()}-${set2Length(date.getMonth()+1)}-${set2Length(date.getDate())} ${set2Length(date.getHours())}:${set2Length(date.getMinutes())}`;
  let formattedDateAfter = `${date.getFullYear()}-${set2Length(date.getMonth()+1)}-${set2Length(date.getDate())}`;
  
  return {datetime: formattedDatetimeAfter, date: formattedDateAfter};
}

export {
  getFormmatedDt
}