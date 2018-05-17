function generateParagraph(){
    //get the div has container ID
    var container = document.getElementById("container");

    //create the first paragraph node, add text and assign CSS class
    var para1 = document.createElement("p");
    var node1 = document.createTextNode(`The Document Object Model (DOM) is a
    programming interface for HTML and XML documents. It represents the page so that
    programs can change the document structure, style, and content. The DOM represents
    the document as nodes and objects. That way, programming languages can connect to
    the page.`);
    para1.appendChild(node1);
    para1.classList.add("para1");
    
    //create the second paragraph node, add text and assign CSS class
    var para2 = document.createElement("p");
    var node2 = document.createTextNode(`A Web page is a document. This document
    can be either displayed in the browser window or as the HTML source. But it is the same
    document in both cases. The Document Object Model (DOM) represents that same
    document so it can be manipulated. The DOM is an object-oriented representation of
    the web page, which can be modified with a scripting language such as JavaScript.`);
    para2.appendChild(node2);
    para2.classList.add("para2");

    //add the paragraph node
    container.appendChild(para1);
    container.appendChild(para2);


}