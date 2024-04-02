/*
<div id="parent">
    <div id="child">
    <h1></h1>
    <h2></h2>
    </div>
    <div id="child2">
    <h1></h1>
    <h2></h2>
    </div>
</div>
*/





const parent= React.createElement("div",{id:"parent"}, 
[
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")
]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")
])
]);



//JSX


// const heading=React.createElement("h1", 
// {id:"heading", xyz: "abc"}, //attribute to h1 tag
// "Hello World from React!"); //children
// console.log(heading);
//React element is an javascript object
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



root.render(parent);
console.log(parent);