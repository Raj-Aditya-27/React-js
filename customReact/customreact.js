const mainContainer=document.querySelector("#root");
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: "click me to visit google"
}

customRender(reactElement,mainContainer);

// function customRender(reactElement,mainContainer){
//     const reactDom=document.createElement(reactElement.type);
//     reactDom.innerHTML=reactElement.children;
//     reactDom.setAttribute('href',reactElement.props.href);
//     reactDom.setAttribute('target',reactElement.props.target);
//     mainContainer.appendChild(reactDom);
// }

function customRender(reactElement,mainContainer){
    const reactDom=document.createElement(reactElement.type);
    reactDom.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
       reactDom.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(reactDom);
}