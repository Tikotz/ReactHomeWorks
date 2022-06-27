import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function StudentComp(){

  let list = StudentsListComp();
  return(
    <>
    {
      list.map(s => 
      <p style={s.grade <= 56 ? {backgroundColor: "red"}
       : s.grade >= 57 && s.grade <= 75 ? {backgroundColor: 'yellow'}
       : s.grade > 75 && s.grade <= 85 ? {backgroundColor: 'orange'} :
       {backgroundColor: 'green'}} > {`${s.id} - ${s.name} - ${s.grade} - Teacher Words: 
        ${s.grade <= 56 ? "Poor"
       : s.grade >= 57 && s.grade <= 75 ? "OK"
       : s.grade > 75 && s.grade <= 85 ? "Good" :
       "Exellent" }`}
       </p>)
    }

    </>
  );
}
function StudentsListComp(){
  let studentList = [
  {id:1,name:"or shani",grade:100},
  {id:2,name:"or lo shani",grade:10},
  {id:3,name:"shmulik",grade:57},
  {id:4,name:"Mishu",grade:76},
  {id:5,name:"ze ah",grade:76},
  {id:6,name:"ze hamor",grade:100},

  ];
  return studentList;
}


function GetYoutubeList(){
  let list = [{title: "Onepiece video", url: "https://www.youtube.com/embed/SIyS3CSPXUg" ,width: 250, height: 400},
  {title: "LOL Bel'veth", url: "https://www.youtube.com/embed/Vk2qDhvWhgI&t=641s" ,width: 250, height: 400},
  {title: "LOL Bel'veth 2", url: "https://www.youtube.com/embed/W-ZAGWppvlw" ,width: 250, height: 400},
]
  return list;
}

function YouTubeVideoListComp(){
  let objects = GetYoutubeList();
    return(
        objects.map(o => 
        <YouTubeVideoComp width={o.width} height={o.height} url={o.url} title={o.title} ></YouTubeVideoComp>
        )    
    )
  
}

function YouTubeVideoComp(props){
 return (
  <>
  <h3> {props.title}</h3>
  <iframe width={props.width} height={props.height} src={props.url} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </>
 )
}


root.render(
  <React.StrictMode>
    {<StudentComp /> }
    < YouTubeVideoListComp/>
  </React.StrictMode>
);

