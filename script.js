

let parentCursor=document.createElement("div");
  
  document.querySelector("body").append(parentCursor);
  parentCursor.classList.add("parent_cursor");
  let childCursor=document.createElement("div");
  childCursor.classList.add("child_cursor");
  document.querySelector("body").append(childCursor);

document.querySelector("html").addEventListener("mousemove",function(e)
{
  moveCursor(parentCursor,e);
  moveCursor(childCursor,e);
})

function moveCursor(element,e)
{
  element.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;
}

