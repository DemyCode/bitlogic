addinputnodes = function() {this.inputnodes.push('IN');}
addoutputnodes = function() {this.outputnodes.push('OUT');}
removeinputnodes = function() {this.inputnodes.pop();}
removeoutputnodes = function() {this.outputnodes.pop();}

function removeinputnodes()
{
    this.inputnodes.pop()
}

const vm = Vue.createApp({
  data() {
    return{
      inputnodes: ['IN'],
      outputnodes: ['OUT']
    }
  },
  methods:{
    addinputnodes,
    removeinputnodes,
    addoutputnodes,
    removeoutputnodes
  }
})

vm.component('note', {
  props : ['content'],
  template : `<p> {{ content }} </p>`
})

vm.mount('#app')