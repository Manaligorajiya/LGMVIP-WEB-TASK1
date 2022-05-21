function add(){
    document.getElementById('error').innerHTML="";
    let task=document.getElementById('text').value;
    if(task== ''){
        document.getElementById('error').innerHTML="Please Enter The Value";
    }
    else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        li.textContent=task;
        //  let img=document.createElement("img");
        //  img.src="remove .png";
        
        let a=document.createElement('a');
        a.textContent="X";
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);
        let pos=box.firstElementChild;
        // document.write(pos);
        if(pos==null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,pos);
        }
    }
    document.getElementById('text').value="";
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
})

