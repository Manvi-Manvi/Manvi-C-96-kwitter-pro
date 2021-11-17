

  var firebaseConfig = {
    apiKey: "AIzaSyDyTlII27o8qMhYhuGBDLap0Yp_VYH_DII",
    authDomain: "kwitter-project2-f13b2.firebaseapp.com",
    databaseURL: "https://kwitter-project2-f13b2-default-rtdb.firebaseio.com",
    projectId: "kwitter-project2-f13b2",
    storageBucket: "kwitter-project2-f13b2.appspot.com",
    messagingSenderId: "242368507236",
    appId: "1:242368507236:web:462c0f6ba6e930143b9e71",
    measurementId: "G-HLPMW7Z1HP"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("userName");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room name",room_name);
    window.location="kwitter_page.html";
    }
  
    

function getData() 
{
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     row="<div class='room_name', id="+Room_names+" onclick='reDirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
     document.getElementById("output").innerHTML+=row;


    
    });});}
getData();

function reDirectToRoomName(roomName){
    localStorage.setItem("room name",roomName);
    window.location="kwitter_page.html";    
}

function logout(){
  localStorage.removeItem("userName");
  localStorage.removeItem("room name");
  window.location="index.html";
}