function loadData(){
  // create a new request object
  xmlRequest = new XMLHttpRequest();
  // this function runs on state change
  xmlRequest.onreadystatechange = function() {
    // if the request was a success do this
    if (this.readyState == 4 && this.status == 200) {
      // parse the string into a js object
      let chaeyoungObject = JSON.parse(this.responseText);
      // select each paragraph tag in index.html by ID and change the html to be the values in our js object
      document.getElementById('name').innerHTML = chaeyoungObject.name;
      document.getElementById('birthday').innerHTML = chaeyoungObject.birthday;
      document.getElementById('bio').innerHTML = chaeyoungObject.bio;
    }
  }
  // make a get request to the file chaeyoung.json
  xmlRequest.open("GET", "chaeyoung.json", true);
  // send the request
  xmlRequest.send();
}
