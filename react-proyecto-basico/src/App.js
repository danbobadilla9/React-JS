
const Video = props => {
    return React.createElement("div",{},[
        React.createElement("h2",{},props.title),
        React.createElement("h3",{},props.dateAdded),
        React.createElement("h3",{},props.channel)
    ]);
}

const App = () => {
    return React.createElement("div",{},[
        React.createElement("h2",{},"Buscandor Video"),
        React.createElement(Video,{
            title:"Muse Sing for Absolution",
            dateAdded:"23/01/23",
            channel:"Muse"
        }),
        React.createElement(Video,{
            title:"Muse Uno",
            dateAdded:"23/11/21",
            channel:"Muse"
        }),
        React.createElement(Video,{
            title:"Muse Death Inside",
            dateAdded:"22/81/99",
            channel:"Muse"
        })
    ]);
}



ReactDOM.render(React.createElement(App),document.getElementById("root"));