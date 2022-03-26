document.addEventListener('DOMContentLoaded', ()=>{
    function createParagraph(){
        const graph=document.createElement('p');
        graph.textContent=("we've added a new paragraph");
        document.body.appendChild(graph);
    }
    const buttons= document.querySelectorAll('button');

    for (const button of buttons){
        button.addEventListener('click', createParagraph);
    }
})
