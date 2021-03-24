function addinteractor() {this.inputnodes.push('IN');}
function removeinteractor() {this.inputnodes.pop();}
function addoutput() {this.outputnodes.push('OUT');}
function removeoutput() {this.outputnodes.pop();}

var draggedelement;
var inverterid = 0;

function addinverter()
{
  this.inverters.push('inverter_' + inverterid);
  inverterid += 1;
}

function mover(event)
{
  if (draggedelement)
  {
    let w = parseInt(getComputedStyle(draggedelement).width);
    let h = parseInt(getComputedStyle(draggedelement).height);
    draggedelement.style.left = (event.clientX - w / 2) + "px";
    draggedelement.style.top = (event.clientY - h / 2) + "px";
  }
}

function dragged(event)
{
  draggedelement = event.target;
}

function released(event)
{
  draggedelement = null;
  console.log('releaser')
}

const vm = Vue.createApp({
  data() {
    return{
      inputnodes: [],
      outputnodes: [],
      inverters : [],
      linkers : []
    }
  },
  methods:{
    addinteractor,
    removeinteractor,
    addoutput,
    removeoutput,
    addinverter,
    dragged,
  }
})

// vm.component('inverter', {
//   props : ['content'],
//   template : `<div class="inverter" @mousedown="mousedown" @mouseup="mouseup"></div>`
// })

vm.mount('#app')

window.addEventListener('mousemove', mover)
window.addEventListener('mouseup', released)