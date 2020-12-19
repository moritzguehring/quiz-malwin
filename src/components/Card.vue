<template>
    <div class="card">
        <h2>Aufgabe {{index}}/6</h2>
        <div>
            {{desc}}
        </div>
    </div>
    
</template>
<script>
export default {
    props: ["index", "desc"]
}
</script>
<style lang="scss" scoped>

</style>