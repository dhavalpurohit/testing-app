<template>
  
  <grid-layout
    v-model:layout="layout"
    :responsive-layouts="layouts"
    :col-num="12"
    :row-height="30"
    :is-draggable="draggable"
    :is-resizable="resizable"
    :vertical-compact="true"
    :use-css-transforms="true"
    :responsive="responsive"
    @breakpoint-changed="breakpointChangedEvent"
  >
    <grid-item
      v-for="item in layout"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
    >
      <component v-if="item.isComponent" :is="item.c"></component>
    <div v-else v-html="item.c"></div>
    </grid-item>
  </grid-layout>
</template>

<script>
import { ref } from "vue";
import { GridLayout, GridItem } from "vue-grid-layout"
import Hellow from './hello.vue'

let layout = {
    md: [
        // {"x":0, "y":0, "w":8, "h":2, "i":"0", "c":'Hellow', isComponent: true},
        // {"x":2, "y":0, "w":2, "h":4, "i":"1", "c":'1', isComponent: false},
        // {"x":4, "y":0, "w":2, "h":5, "i":"2", "c":'2', isComponent: false},
        // {"x":6, "y":0, "w":2, "h":3, "i":"3", "c":'3', isComponent: false},
        // {"x":2, "y":4, "w":2, "h":3, "i":"4", "c":'4', isComponent: false},
        // {"x":4, "y":5, "w":2, "h":3, "i":"5", "c":'5', isComponent: false},
        // {"x":2, "y":0, "w":2, "h":5, "i":"6", "c":'6', isComponent: false}
    ],
    lg: [
        {"x":0,"y":0,"w":8,"h":2,"i":"0", "c":'Hellow', isComponent: true},
        {"x":8,"y":0,"w":4,"h":2,"i":"1", "c":'<h1>Dropdown here</h1>', isComponent: false},
        {"x":0,"y":1,"w":3,"h":2,"i":"2", "c":'<h1>Recent Trades</h1>', isComponent: false},
        {"x":3,"y":1,"w":5,"h":2,"i":"3", "c":'<h1>Charts</h1>', isComponent: false},
        {"x":8,"y":1,"w":4,"h":2,"i":"4", "c":'<h1>But/shell</h1>', isComponent: false},
        {"x":0,"y":2,"w":8,"h":2,"i":"5", "c":'<h1>My Position</h1>', isComponent: false},
        {"x":8,"y":2,"w":4,"h":2,"i":"7", "c":'<h1>Total</h1>', isComponent: false},
    ],
};
export default {
  components: {
        GridLayout,
        GridItem,
        Hellow
    },
    data() {
        return {
            layouts: layout,
            layout: layout["lg"],
            draggable: false,
            resizable: false,
            responsive: true,
        }
    },
    methods: {
        breakpointChangedEvent: function(newBreakpoint, newLayout){
            console.log("BREAKPOINT CHANGED breakpoint=", newBreakpoint, ", layout: ", newLayout );
        }
    }
};
</script>
<style scoped>
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>