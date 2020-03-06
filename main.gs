function accessApi(url) {
  return UrlFetchApp.fetch(url).getContentText();
}

function doGet(ev) {  
  const getJson = (ev) => {
    try{
      const url = ev.parameter["url"];
      return accessApi(url);
    }catch(er){
      return JSON.stringify( { error: er.message } );
    }
  };

  const json = getJson(ev);
  console.log(json);

  return ContentService.createTextOutput()
          .setMimeType(ContentService.MimeType.JSON)
          .setContent(json);
}