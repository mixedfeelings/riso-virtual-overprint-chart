<template>
    <div>
        <h4>Interval</h4> 
        <div class="chip-container">
            <label 
                v-for="option in options" 
                :for="option.name"
                :key="option.id" 
                :index="option.id" 
                class="chip"
                :class="button_class(option)" 
            >
                <input type="radio" 
                @change="$emit('update:modelValue', option.id)" 
                :id="option.name" :value="option.id" v-model="picked"> 
                {{option.name}}
            </label>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, toRefs } from 'vue';
    const props = defineProps<{
        modelValue: number;
        required?: boolean;
    }>();
    
    const { modelValue } = toRefs(props);
    const picked = ref(0);

    const options = [
        {
            id: 25,
            name: "25%",
        }, 
        {
            id: 10,
            name: "10%",
        }, 
        {
            id: 5,
            name: "5%",
        }, 
    ];

    function button_class(option:any) {
        let bc = "";
        if (picked.value == option.id){ 
            bc += "selected ";
        }
        return bc;
    };

    onMounted(() => {
        picked.value = 10;
    });
    
</script>
