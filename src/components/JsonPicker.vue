<template>

  <div class="json-path-picker" @click="pickPath">
    <pre ref="json-renderer" class="json-tree"></pre>
  </div>
</template>

<script>
import { jsonPathPicker, clearJsonPathPicker } from 'jsonpath-picker-vanilla'
export default {
    name: 'JSONPathPicker',
    data() {
        return {
            clickedPath: '',
            path: { value: ''},
        }
    },
    props: {
        code: {
            type: Object,
            default() {
                return {
                    sample: {
                      type:'json',
                      value:'这是简单的json例子'
                    }
                }
            }
        },
        opts: Object, default() { return {}; }
    },
    methods: {
        pickPath(ev) {
            // Check if ev target is the pick-path
            if(ev.target && ev.target.classList.contains('pick-path')) {
     this.$emit('path', this.path.value);
            }
        }
    },
    mounted() {
        // Render jpPicker
        if (this.$refs['json-renderer']) {
            jsonPathPicker(this.$refs['json-renderer'], this.$props.code, [this.path], this.$props.opts);
        }
    },
    watch: {
        code: function(val) {
            if (this.$refs['json-renderer']) {
                clearJsonPathPicker(this.$refs['json-renderer']);
                if (val) {
                    jsonPathPicker(this.$refs['json-renderer'], this.$props.code, [this.path], this.$props.opts);
                }
            }
        }
    },
    destroyed() {
        if (this.$refs['json-renderer']) {
            clearJsonPathPicker(this.$refs['json-renderer']);
        }
    },
}
</script>

<style lang="scss" scoped>
.json-path-picker {
    padding: 3px 10px;
}
</style>
