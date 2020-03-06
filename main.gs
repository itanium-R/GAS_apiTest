function accessApi(url) {
  return UrlFetchApp.fetch(url).getContentText();
}

// ページにアクセスされたときに実行
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

  return ContentService.createTextOutput()
          .setMimeType(ContentService.MimeType.JSON)
          .setContent(JSON.stringify(json));
}