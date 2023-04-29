<template>
    <div>
        <div class="label pb-1 text-xs font-semibold" >Interval</div> 
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
        name?: string;
        required?: boolean;
    }>();
    
    const { modelValue, name } = toRefs(props);
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

<style scoped lang="scss">
.chip-container {
    @apply flex gap-2;
    .chip {
        @apply bg-gray-100 border border-gray-200 px-4 py-1 rounded-lg text-sm text-sm cursor-pointer;
        input {
            @apply hidden;
        }
    }
    .chip.selected {
        @apply bg-gray-300 cursor-default;
    }
}

</style>