function loadData(){
  xmlRequest = new XMLHttpRequest();
  xmlRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let chaeyoungObject = JSON.parse(this.responseText);
      document.getElementById('name').innerHTML = chaeyoungObject.name;
      document.getElementById('birthday').innerHTML = chaeyoungObject.birthday;
      document.getElementById('bio').innerHTML = chaeyoungObject.bio;
    }
  }
  xmlRequest.open("GET", "chaeyoung.json", true);
  xmlRequest.send();
}
