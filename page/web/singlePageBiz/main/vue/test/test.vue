<template>
    <div id="app">
        <div>this is a vue demo</div>
        <div class="main_data">{{mainData}}</div>
        <component-A></component-A>
    </div>
</template>

<style>
    #app {
        color: blue;
    }
    .main_data {
        color: darkred;
    }
</style>

<script>
    import componentA from "./component/componentA"
    export default {
        name: 'test',
        data: function() {
            return {
                mainData: "bindData"
            }
        },
        components: {
            'component-A': componentA
        }
    }
</script>