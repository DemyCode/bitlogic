function addinputnodes()
{
  this.inputnodes.push('');
}

function removeinputnodes()
{
  this.inputnodes.pop()
}

const vm = Vue.createApp({
  data() {
    return{
      inputnodes: [],
      outputnodes: []
    }
  },
  methods:{
    addinputnodes,
    removeinputnodes
  }
})

vm.component('note', {
  props : ['content'],
  template : `<p> {{ content }} </p>`
})

vm.mount('#app')