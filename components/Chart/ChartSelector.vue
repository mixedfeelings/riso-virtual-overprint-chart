<template>
    <div class="form-item flex flex-col w-full">
        <label for="chart-type" aria-label="Type">Type</label>     
        <select
            :class="modelValue != 'Select' ? 'selected' : '' "
            @change="updateValue($event.target.value)"
            v-model="modelValue"
            :required="required"
            id="chart-type"
        >
            <option disabled>Select</option>
            <option
                v-for="option in options"
                :key="option.id"
                :index="option.id"
                :value="option.id"
                :selected="selected ? true : false"
            >
                {{ option.name }}
            </option>
        </select>
    </div>
</template>
<script setup lang="ts">
    import { ref, toRefs } from 'vue';
    const props = defineProps<{
        modelValue: string;
        name?: string;
        required?: boolean;
    }>();
    
    const { modelValue, name } = toRefs(props);
    
    const selected = props.modelValue || "Select";

    
    const options = [
        {
            id: 'standard',
            name: 'Standard',
        }, 
        {
            id: 'chemical',
            name: 'Chemical Color Plate Corp.',
        },
        {
            id: 'dramatic',
            name: 'Dramatic Color by Overprinting',
        }, 
    ]
    
    const emit = defineEmits(['update:modelValue'])
    
    function updateValue(value:any) {
        emit('update:modelValue', value)
    }
</script>
