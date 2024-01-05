function funsion(cosita) {

  if (cosita % 4 === 0 || cosita % 400 === 0) 
  {
    if (cosita % 4 === 0 && cosita % 100 === 0 && cosita % 400 !==0) 
    {
      return false;
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }

}
  
module.exports = funsion;