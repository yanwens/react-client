function path(type, header) {
  let path = '';
  if (type ==='laoban'){
    path = '/laoban';
  }else {
    path = '/dashen'
  }
  if (!header){
    path += 'Info';
  }
  return path;

}
export default path;